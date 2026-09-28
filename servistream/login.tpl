<main class="servistream-login-page">
    <aside class="servistream-login-intro" aria-label="Información de ServiStream">
        <a href="{$WEB_ROOT}/index.php" class="servistream-login-brand">
            {if $assetLogoPath}<img src="{$assetLogoPath}" alt="{$companyname}">{else}<span>{$companyname}</span>{/if}
        </a>
        <div class="servistream-login-intro-copy">
            <span class="servistream-login-status"><i class="fas fa-circle"></i> Plataforma disponible</span>
            <h1>Tu operación,<br>siempre cerca.</h1>
            <p>Consulta tus servicios, facturas y solicitudes de soporte desde un espacio diseñado para avanzar con claridad.</p>
        </div>
        <div class="servistream-login-links">
            <a href="{$WEB_ROOT}/announcements.php"><i class="far fa-newspaper"></i> Avisos del servicio</a>
            <a href="{$WEB_ROOT}/serverstatus.php"><i class="fas fa-signal"></i> Estado de la red</a>
        </div>
    </aside>

    <section class="servistream-login-form-wrap">
        <div class="servistream-login-form-card">
            <div class="servistream-login-heading">
                <span>Área de clientes</span>
                <h2>Inicia sesión</h2>
                <p>Ingresa tus datos para continuar.</p>
            </div>

            {include file="$template/includes/flashmessage.tpl"}
            <div class="providerLinkingFeedback"></div>

            <form method="post" action="{routePath('login-validate')}" class="login-form" role="form">
                <div class="form-group">
                    <label for="inputEmail">{$LANG.clientareaemail}</label>
                    <input type="email" name="username" class="form-control" id="inputEmail" placeholder="{$LANG.enteremail}" autofocus>
                </div>

                <div class="form-group">
                    <label for="inputPassword">{$LANG.clientareapassword}</label>
                    <input type="password" name="password" class="form-control" id="inputPassword" placeholder="{$LANG.clientareapassword}" autocomplete="off" >
                </div>

                <div class="checkbox">
                    <label>
                        <input type="checkbox" name="rememberme" /> {$LANG.loginrememberme}
                    </label>
                </div>
                {if $captcha->isEnabled()}
                    <div class="text-center margin-bottom">
                        {include file="$template/includes/captcha.tpl"}
                    </div>
                {/if}
                <div class="servistream-login-actions">
                    <input id="login" type="submit" class="btn btn-primary{$captcha->getButtonClass($captchaForm)}" value="{$LANG.loginbutton}" />
                    <a href="{routePath('password-reset-begin')}" class="servistream-login-forgot">{$LANG.forgotpw}</a>
                </div>
            </form>

            {if $linkableProviders}
                <div class="servistream-login-social">
                    {include file="$template/includes/linkedaccounts.tpl" linkContext="login" customFeedback=true}
                </div>
            {/if}

            {if $condlinks.allowClientRegistration}
                <p class="servistream-login-register">¿Aún no tienes cuenta? <a href="{$WEB_ROOT}/register.php">Crear cuenta</a></p>
            {/if}
        </div>
    </section>
</main>
