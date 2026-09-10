# Manual de Usuario — CREAR

Manual interactivo del Sistema de Gestión Académica CREAR, para uso del personal interno (Directora, Secretaria, Profesoras).

## Cómo abrirlo

Hacé doble clic en `index.html`, o abrilo con clic derecho → "Abrir con" → tu navegador.

## Cómo editarlo (VS Code)

1. Abrí esta carpeta completa en VS Code: `Archivo → Abrir Carpeta`.
2. Estructura del proyecto:

```
manual-usuario-crear/
├── index.html          → Contenido y estructura (HTML)
├── css/
│   └── styles.css      → Colores, tipografía, espaciados
├── js/
│   └── script.js        → Navegación entre secciones y buscador
├── assets/
│   └── images/          → Todas las capturas de pantalla + el logo
└── README.md             → Este archivo
```

3. Para ver los cambios: guardá el archivo y actualizá el navegador (no hace falta ningún servidor, `index.html` se abre directo desde el disco).

## Cómo agregar una sección nueva

1. En `index.html`, buscá el bloque `<div id="sidebar">` y agregá un nuevo `<div class="nav-item">` con un `data-section` único.
2. Más abajo, agregá un nuevo `<div class="section" id="sec-TU-ID">...</div>` con el mismo id (con el prefijo `sec-`).
3. Si la sección necesita una captura, guardala en `assets/images/` y usá `<img src="assets/images/nombre.jpg">`.

## Cómo cambiar colores

Todos los colores están centralizados en `css/styles.css`, arriba de todo, dentro de `:root { ... }`. Cambiá el valor hexadecimal ahí y se actualiza en todo el manual.

## Publicarlo con un link (para el botón "Ayuda" del sistema)

Opción más simple y gratuita: [Netlify Drop](https://app.netlify.com/drop) — arrastrás esta carpeta completa al navegador y te da una URL pública al instante, sin necesidad de crear cuenta.
