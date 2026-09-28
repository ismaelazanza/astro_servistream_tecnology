# Tema ServiStream para WHMCS

Tema de área de clientes de ServiStream basado en el tema SIX. Conserva la estructura, los datos Smarty y la compatibilidad de SIX; los cambios son de presentación.

## Instalación

1. Copia la carpeta `servistream` al directorio `templates/` de la instalación de WHMCS.
2. En **Configuración del sistema → General → General**, selecciona **ServiStream** como plantilla de cliente.
3. Comprueba que el logo corporativo esté configurado en WHMCS. El encabezado utiliza la ruta de logo nativa (`$assetLogoPath`).
4. Limpia la caché de plantillas de WHMCS si no se reflejan los cambios de inmediato.

## Personalización visual

Los colores, bordes, tipografía y superficies se centralizan al inicio de `css/servistream.css` mediante las variables `--ss-*`.

No se ha modificado ningún archivo del núcleo de WHMCS ni la plantilla SIX original.
