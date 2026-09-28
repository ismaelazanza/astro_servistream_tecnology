<?php
declare(strict_types=1);

$allowedOrigins = ['https://servistream.net', 'https://www.servistream.net', 'https://servistreamtechnology.com', 'https://www.servistreamtechnology.com', 'http://localhost:4321', 'http://127.0.0.1:4321'];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowedOrigins, true)) { header('Access-Control-Allow-Origin: ' . $origin); header('Vary: Origin'); }
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, max-age=0');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Accept');
if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'OPTIONS') { http_response_code(204); exit; }

function respond(array $payload, int $status = 200): never { http_response_code($status); echo json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE); exit; }
function isPublicAddress(string $address): bool { return filter_var($address, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE) !== false; }

/** @return array{scheme:string,host:string,port:int,url:string,resolve:string}|null */
function validatePublicUrl(string $input): ?array
{
    if (!preg_match('#^https?://#i', $input)) $input = 'https://' . $input;
    $url = filter_var($input, FILTER_VALIDATE_URL);
    $parts = is_string($url) ? parse_url($url) : false;
    if (!is_array($parts) || !isset($parts['scheme'], $parts['host'])) return null;
    $scheme = strtolower((string) $parts['scheme']);
    $host = strtolower((string) $parts['host']);
    if (!in_array($scheme, ['http', 'https'], true) || isset($parts['user'], $parts['pass']) || filter_var($host, FILTER_VALIDATE_IP) || !preg_match('/^(?=.{1,253}$)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}$/', $host)) return null;
    $port = isset($parts['port']) ? (int) $parts['port'] : ($scheme === 'https' ? 443 : 80);
    if (!in_array($port, [80, 443], true)) return null;
    $address = null;
    foreach (dns_get_record($host, DNS_A | DNS_AAAA) ?: [] as $record) {
        $candidate = $record['ip'] ?? $record['ipv6'] ?? null;
        if (is_string($candidate) && isPublicAddress($candidate)) { $address = $candidate; break; }
    }
    if ($address === null) return null;
    $defaultPort = ($scheme === 'https' && $port === 443) || ($scheme === 'http' && $port === 80);
    $path = ($parts['path'] ?? '/') . (isset($parts['query']) ? '?' . $parts['query'] : '');
    return ['scheme' => $scheme, 'host' => $host, 'port' => $port, 'url' => "{$scheme}://{$host}" . ($defaultPort ? '' : ":{$port}") . $path, 'resolve' => str_contains($address, ':') ? "[{$address}]" : $address];
}

function redirectUrl(array $site, string $location): ?string
{
    $location = trim($location);
    if ($location === '') return null;
    $base = $site['scheme'] . '://' . $site['host'] . ((($site['scheme'] === 'https') && $site['port'] === 443) || (($site['scheme'] === 'http') && $site['port'] === 80) ? '' : ':' . $site['port']);
    if (str_starts_with($location, '//')) return $site['scheme'] . ':' . $location;
    if (preg_match('#^https?://#i', $location)) return $location;
    if (str_starts_with($location, '/')) return $base . $location;
    $directory = rtrim(dirname(parse_url($site['url'], PHP_URL_PATH) ?: '/'), '/');
    return $base . ($directory === '' ? '/' : $directory . '/') . $location;
}

/** @return array{status:int,time:int,error:string,location:?string} */
function requestSite(array $site): array
{
    $handle = curl_init($site['url']);
    curl_setopt_array($handle, [CURLOPT_RETURNTRANSFER => true, CURLOPT_HEADER => true, CURLOPT_NOBODY => true, CURLOPT_FOLLOWLOCATION => false, CURLOPT_CONNECTTIMEOUT => 5, CURLOPT_TIMEOUT => 8, CURLOPT_USERAGENT => 'Servistream Availability Checker/1.0', CURLOPT_RESOLVE => ["{$site['host']}:{$site['port']}:{$site['resolve']}"], CURLOPT_PROTOCOLS => CURLPROTO_HTTP | CURLPROTO_HTTPS, CURLOPT_REDIR_PROTOCOLS => CURLPROTO_HTTP | CURLPROTO_HTTPS]);
    $response = curl_exec($handle);
    $error = curl_error($handle);
    $status = (int) curl_getinfo($handle, CURLINFO_RESPONSE_CODE);
    $time = (int) round(((float) curl_getinfo($handle, CURLINFO_TOTAL_TIME)) * 1000);
    $headerSize = (int) curl_getinfo($handle, CURLINFO_HEADER_SIZE);
    curl_close($handle);
    $headers = is_string($response) ? substr($response, 0, $headerSize) : '';
    preg_match_all('/^Location:\s*(.+)$/im', $headers, $matches);
    $location = $matches[1] !== [] ? trim((string) end($matches[1])) : null;
    return compact('status', 'time', 'error', 'location');
}

$input = trim((string) ($_GET['url'] ?? ''));
if ($input === '') respond(['online' => false, 'message' => 'Ingresa un dominio o URL para comprobarlo.'], 422);
$site = validatePublicUrl($input);
if ($site === null) respond(['online' => false, 'message' => 'Ingresa un dominio público válido usando HTTP o HTTPS.'], 422);
$requestedDomain = $site['host'];
$totalTime = 0;
$result = ['status' => 0, 'time' => 0, 'error' => '', 'location' => null];
for ($redirects = 0; $redirects <= 3; $redirects++) {
    $result = requestSite($site);
    $totalTime += $result['time'];
    $nextUrl = in_array($result['status'], [301, 302, 303, 307, 308], true) && is_string($result['location']) ? redirectUrl($site, $result['location']) : null;
    if ($nextUrl === null) break;
    $nextSite = validatePublicUrl($nextUrl);
    if ($nextSite === null) respond(['online' => false, 'domain' => $requestedDomain, 'message' => 'La redirección del sitio no apunta a un destino público válido.'], 422);
    $site = $nextSite;
}
if ($result['status'] === 0) respond(['online' => false, 'domain' => $requestedDomain, 'protocol' => $site['scheme'], 'message' => 'El sitio no respondió dentro del tiempo de comprobación.', 'error' => $result['error'] !== '' ? 'connection_failed' : 'no_response']);
$online = $result['status'] >= 200 && $result['status'] < 400;
respond(['online' => $online, 'domain' => $requestedDomain, 'status' => $result['status'], 'protocol' => $site['scheme'], 'responseTime' => $totalTime, 'message' => $online ? "{$requestedDomain} está en línea y devolvió el estado HTTP {$result['status']}." : "{$requestedDomain} respondió con el estado HTTP {$result['status']}."]);
