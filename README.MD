# 🚀 Plantilla Web — Vite + Bootstrap + Font Awesome + GSAP + SweetAlert2 + Axios

Plantilla base para iniciar proyectos web. Clonás, `npm install`, `npm run dev`, y empezás a codificar.

## ✨ Tecnologías incluidas

| Tecnología | Versión | Carga | Uso |
|---|---|---|---|
| [Vite](https://vitejs.dev/) | 8.x | npm | Bundler y dev server |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | npm | Tipado estático |
| [Bootstrap](https://getbootstrap.com/) | 5.3.8 | npm | Framework CSS responsive |
| [Bootstrap Icons](https://icons.getbootstrap.com/) | 1.13.x | npm | Iconos |
| [Font Awesome](https://fontawesome.com/) | 6.7.x | npm | Iconos vectoriales |
| [GSAP](https://gsap.com/) | 3.15.x | npm | Animaciones |
| [SweetAlert2](https://sweetalert2.github.io/) | 11.26.x | npm | Alertas y modales |
| [Axios](https://axios-http.com/) | 1.13.x | npm | Cliente HTTP |
| [EmailJS](https://www.emailjs.com/) | 4.4.x | npm | Envío de emails desde el cliente |
| [ESLint](https://eslint.org/) | 9.x | npm | Linter de código |
| [Stylelint](https://stylelint.io/) | 17.x | npm | Linter de CSS |
| [vite-plugin-pwa](https://vite-pwa-org.netlify.app/) | 1.x | npm | Service worker y manifest PWA |

## 📁 Estructura

```
PlantillaWeb/
├── index.html                 # Página principal
├── vite.config.js             # Configuración Vite (multi-page)
├── package.json               # Dependencias
├── tsconfig.json              # TypeScript strict
├── eslint.config.js           # ESLint
├── .stylelintrc.json          # Stylelint
│
├── pages/
│   └── contacto.html          # Página de contacto (ejemplo)
│
├── src/
│   ├── main.ts                # Entry point (importa CSS global, Bootstrap, Font Awesome)
│   ├── entities/              # Modelos de datos (ej: Persona)
│   ├── interfaces/            # Interfaces TypeScript
│   ├── scripts/               # Lógica JS/TS (ej: formulario contacto con EmailJS)
│   ├── services/              # Servicios API
│   ├── modules/               # Módulos reutilizables
│   ├── utils/                 # Utilidades
│   ├── styles/                # CSS modular
│   │   ├── style.css          # Hub de imports
│   │   ├── var.css            # Variables CSS + @font-face
│   │   ├── menuBar.css        # Navegación
│   │   ├── footer.css         # Footer
│   │   ├── index.css          # Página principal
│   │   └── contacto.css       # Página contacto
│   └── assets/                # Imágenes, fuentes, etc.
│
├── public/                    # Archivos estáticos (favicons, manifest)
├── .env                       # Variables de entorno
├── site.webmanifest           # PWA manifest
├── sitemap.xml                # SEO
├── robots.txt                 # Crawlers
└── LICENCE                    # MIT
```

### 📁 Dónde colocar imágenes y archivos

| Carpeta | Cuándo usarla | Ejemplos |
|---|---|---|
| `src/assets/` | Archivos que **importás** en JS/TS/CSS | `import logo from './assets/logo.png'`, `background: url('./assets/fondo.png')` |
| `public/` | Archivos referenciados por **ruta directa** desde el HTML o archivos estáticos | `<img src="/icono.png">`, favicons, manifest icons, `robots.txt` |

**Regla práctica:** si lo vinculás desde un `<link>`, un `<img src="...">` directo en HTML, o desde el `site.webmanifest` → va en `public/`. Si lo importás con `import` o `url()` desde JS/CSS → va en `src/assets/`.

## 🛠️ Comandos

| Comando | Descripción |
|---|---|
| `npm run dev` | Dev server con hot reload → http://localhost:5173 |
| `npm run build` | Build producción → `dist/` |
| `npm run preview` | Previsualizar build |
| `npm run typecheck` | TypeScript type checking |
| `npm run lint` | ESLint (`src/`) |
| `npm run lint:css` | Stylelint (`src/**/*.css`) |
| `npm run deploy` | Publicar `dist/` en GitHub Pages |
| `npm run clean` | Eliminar `dist/` |

### Despliegue en GitHub Pages

Para publicar el sitio en GitHub Pages:

```bash
npm run deploy
```

Esto construye el proyecto y publica `dist/` en la rama `gh-pages`.

## 🚀 Cómo usar esta plantilla

```bash
git clone https://github.com/Design-System-ET/Plantilla-Web-Vite-Bootstrap-Font-Awesome-SweetAlert2-Axios.git
cd mi-proyecto
npm install
npm run dev
```

### Personalización rápida

1. Editar `index.html`: título, meta tags, contenido
2. Cambiar colores en `src/styles/var.css` (`:root`)
3. Agregar páginas: crear HTML en `pages/`, CSS en `src/styles/`, registrar en `vite.config.js`
4. Configurar `.env` con tu dominio y credenciales

## 📝 Personalización paso a paso

### Paso 1 — Datos del proyecto
- Cambiar `"name"` en `package.json`
- Actualizar `<title>`, `<meta description>`, y Open Graph en cada HTML
- Reemplazar `TU_DOMINIO` en `robots.txt` y `sitemap.xml`
- Actualizar datos en `site.webmanifest`
- Modificar copyright en `LICENCE`

### Paso 2 — Estilos
- Editar colores en `src/styles/var.css` dentro de `:root`
- Reemplazar fuentes en `src/assets/fonts/` y actualizar `@font-face` en `var.css`
- Agregar estilos por página en sus respectivos archivos CSS

### Paso 3 — Agregar nuevas páginas
1. Crear el archivo HTML en `pages/nueva-pagina.html`
2. Crear su archivo CSS en `src/styles/nueva-pagina.css`
3. Importar el CSS en `src/styles/style.css`:
   ```css
   @import "./nueva-pagina.css";
   ```
4. Registrar la página en `vite.config.js`:
   ```js
   input: {
     main: resolve(__dirname, "index.html"),
     contacto: resolve(__dirname, "pages/contacto.html"),
     nuevaPagina: resolve(__dirname, "pages/nueva-pagina.html")
   }
   ```

### Paso 4 — Favicons
Generar los favicons PNG desde `public/favicon.svg` usando [RealFaviconGenerator](https://realfavicongenerator.net/) y colocarlos en `public/`.

## 🌐 SEO

Cada página incluye: meta tags, Open Graph, Twitter Card, URL canónica, sitemap, robots.txt, manifest PWA.

## 📱 PWA (Progressive Web App)

El proyecto usa `vite-plugin-pwa` con estrategia `generateSW` (Workbox) para generar automáticamente el service worker y el manifest.

- **Service worker** generado en build (`dist/sw.js`) con precache de todos los assets
- **Manifest** generado automáticamente con íconos 192x192 y 512x512
- **Registro automático** del SW en ambas páginas (index y contacto)
- **Auto-update**: el SW se actualiza silenciosamente al publicar cambios

Al abrir el sitio en un dispositivo móvil, el navegador ofrecerá "Agregar a pantalla de inicio" para instalar la app como acceso directo.

## 🎨 Sistema de estilos

### Variables CSS disponibles (`var.css`)

```css
:root {
    /* COLORES — Material Design palette */
    --dark-primary-color: #1976D2;
    --light-primary-color: #BBDEFB;
    --primary-color: #2196F3;
    --text-color: #FFFFFF;
    --accent-color: #00BCD4;
    --primary-text-color: #212121;
    --secundary-text-color: #757575;
    --divider-color: #BDBDBD;

    /* TAMAÑOS */
    --text: 25px;

    /* FUENTES */
    --seven: 'Seven', sans-serif;
    --prototype: 'Prototype', sans-serif;
    --sensations: 'Sensations', sans-serif;
    --le_your_script: 'Le Jour Script', sans-serif;
}
```

### Organización CSS

| Archivo | Contenido |
|---|---|
| `style.css` | Hub central — solo contiene `@import` |
| `var.css` | Variables globales y `@font-face` |
| `tags.css` | Reset global y estilos base (body, header, nav, section, hr) |
| `menuBar.css` | Estilos de barra de navegación |
| `footer.css` | Estilos del footer |
| `index.css` | Estilos exclusivos de `index.html` |
| `contacto.css` | Estilos exclusivos de `contacto.html` |

## 🧩 Funcionalidades implementadas

### Demo de Axios + SweetAlert2
La página principal incluye un botón **"Cargar usuario de ejemplo"** que obtiene datos de `https://jsonplaceholder.typicode.com/users/1` vía Axios y muestra el resultado en un modal de SweetAlert2.

### Formulario de contacto con EmailJS
La página `contacto.html` cuenta con un formulario que envía emails mediante EmailJS, con validación y modales de éxito/error con SweetAlert2.

### Entidad demo Persona
Se incluye una clase `Persona` (entity) con su interfaz `Personas` para demostrar el patrón de modelo de datos con TypeScript.

### Menú mobile auto-cierre
Al hacer clic en cualquier enlace del menú de navegación en dispositivos móviles, el menú hamburguesa se cierra automáticamente.

### SEO y PWA preconfigurados
Cada página incluye meta tags, Open Graph, Twitter Card, URL canónica, `sitemap.xml`, `robots.txt` y `site.webmanifest` para PWA.

## 📋 Requisitos

- Node.js 18+
- npm 9+

## 📄 Licencia

[MIT](LICENCE)
