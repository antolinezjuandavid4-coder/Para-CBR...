# Un universo para ti

Web estática lista para GitHub Pages. No necesita instalar paquetes ni compilar.

## Publicar

1. Descomprime el ZIP.
2. Sube **su contenido** a la raíz de tu repositorio. `index.html`, `styles.css`, `responsive.css`, `config.js`, `app.js`, `gate.js` y `cosmos.js` deben quedar juntos, sin una carpeta `dist` por encima.
3. En GitHub abre **Settings → Pages → Build and deployment → Deploy from a branch**.
4. Selecciona la rama **main**, carpeta **/ (root)** y guarda.
5. Espera a que GitHub termine la publicación y abre el enlace que aparece en Pages. Si actualizas una publicación anterior, reemplaza los archivos y recarga la página.

Guía oficial: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

Todas las rutas son relativas, por lo que también funciona en `usuario.github.io/nombre-del-repositorio/`. Se incluye `.nojekyll`. No subas solamente el ZIP: GitHub necesita los archivos descomprimidos.

## Desbloqueo

- **28 de septiembre de 2026, 02:00 Colombia / 00:00 Sinaloa**.
- Instante absoluto: `2026-09-28T07:00:00Z`, configurable en `config.js`.
- El contador usa el reloj del dispositivo; se recalcula al volver a la pestaña y nunca depende de que los intervalos sigan ejecutándose en segundo plano.
- A la hora indicada aparece la invitación. El recorrido se inicia con su botón y la introducción no se puede saltar.
- La clave alternativa pregunta **¿Cuál es mi comida favorita?** y acepta **salchipapa**, sin distinguir mayúsculas y minúsculas. También ignora espacios al principio y al final.
- Un error bloquea el formulario 30 segundos. Hay intentos ilimitados. La espera y el acceso por clave se recuerdan en ese navegador cuando permite almacenamiento local. Borrar los datos del sitio elimina ese recuerdo.
- Esta es una sorpresa de una web estática, no un sistema de autenticación: la clave y los textos forman parte de los archivos publicados. La clave permite entrar antes de la fecha como respaldo.

## Sonido y teléfonos

El sonido está seleccionado desde el inicio. Por la política de reproducción de los navegadores empieza con el primer toque o tecla; el botón permite silenciarlo antes o durante el recorrido. No hacen falta archivos de audio: por defecto se sintetiza el ambiente.

Las escenas permanecen limitadas al viewport. Las tarjetas largas se desplazan dentro de su propio contenedor, sin ampliar la galaxia. El teclado móvil reduce el área de espera y permite desplazar el formulario. El cierre incluye un aviso pulsable **Nuestra conexión sigue aquí abajo** que lleva al mapa en teléfonos.

Se respeta la opción del sistema para reducir movimiento. Las tipografías externas son opcionales: hay fuentes de respaldo si Google Fonts no carga.

## Personalizar

Edita `config.js` para cambiar nombre, textos, capítulos, música y sorpresa. Conserva siete capítulos. Para imágenes, video o música, crea una carpeta `assets` junto a `index.html` y usa rutas relativas como `assets/foto.jpg`. El capítulo 5 no contiene el espacio de fotografía ni el párrafo retirado.

La despedida conserva los mapas de México y Colombia, sus estrellas pulsantes y la conexión tenue. La sorpresa sigue en órbita a causa de la perturbación inesperada, tal como se solicitó.

Para probar localmente, sirve esta carpeta con un servidor HTTP. Abrir `index.html` por doble clic puede bloquear los módulos JavaScript. La URL de GitHub Pages sí los sirve correctamente.

Los datos geográficos y su atribución están en `FUENTES-MAPA.md`.
