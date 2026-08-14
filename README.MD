# 🚀 Design System

Sitio web profesional para Design System, empresa de desarrollo de software especializada en soluciones digitales. Construido con **Vite 8 + TypeScript + Bootstrap 5.3** con enfoque en rendimiento, responsividad y experiencia de usuario moderna.

**[Ver demo en vivo](#deployment)**

---

## 📋 Descripción del Proyecto

Design System es una empresa de desarrollo de software que ofrece soluciones digitales personalizadas:
- 🌐 Páginas web responsivas y modernas
- 📱 Aplicaciones Android nativas
- 💻 Programas informáticos personalizados
- ⚙️ Optimización de procesos
- 🎨 Diseño de experiencia de usuario (UX/UI)
- 🚀 Desarrollo full-stack
- 🔧 Consultoría técnica

El sitio incluye:
- ✅ Página principal con portafolio de servicios
- 📧 Formulario de contacto funcional con EmailJS
- 📱 Diseño completamente responsive (mobile-first)
- ⚡ Animaciones suaves con GSAP
- 🔔 Modales y alertas personalizados
- 🌐 SEO optimizado
- ♿ Accesibilidad mejorada (WCAG)
- 📲 PWA (Progressive Web App) con offline support

---

## ✨ Stack Tecnológico

| Tecnología | Versión | Propósito |
|---|---|---|
| [Vite](https://vitejs.dev/) | 8.x | Bundler y dev server ultra-rápido |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Tipado estático y seguridad de tipos |
| [Bootstrap](https://getbootstrap.com/) | 5.3.8 | Framework CSS responsive |
| [Bootstrap Icons](https://icons.getbootstrap.com/) | 1.13.x | Iconos profesionales |
| [Font Awesome](https://fontawesome.com/) | 7.3.x | Iconos vectoriales complementarios |
| [GSAP](https://gsap.com/) | 3.15.x | Animaciones fluidas y complejas |
| [SweetAlert2](https://sweetalert2.github.io/) | 11.26.x | Modales y alertas elegantes |
| [Axios](https://axios-http.com/) | 1.13.x | Cliente HTTP para llamadas API |
| [EmailJS](https://www.emailjs.com/) | 4.4.x | Envío de emails desde el cliente |
| [ESLint](https://eslint.org/) | 9.x | Linter de código JavaScript/TypeScript |
| [Stylelint](https://stylelint.io/) | 17.x | Linter de CSS |
| [PWA Plugin](https://vite-pwa-org.netlify.app/) | 1.x | Service worker y offline support |

---

## 🚀 Inicio Rápido

### Requisitos previos
- **Node.js** 18+ (recomendado 20+)
- **npm** 9+ o **yarn** 4+

### Instalación

```bash
# 1. Clonar el repositorio
git clone <tu-repositorio>
cd Desing_System

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
```

El servidor estará disponible en `http://localhost:5173`

---

## 📁 Estructura del Proyecto

```
Desing_System/
├── index.html                    # Página principal (servicios, portafolio, CTA)
├── vite.config.js                # Configuración Vite (multi-página, PWA)
├── package.json                  # Dependencias del proyecto
├── tsconfig.json                 # Configuración TypeScript (strict mode)
├── eslint.config.js              # Configuración ESLint
├── .stylelintrc.json             # Configuración Stylelint
├── robots.txt                    # Instrucciones para crawlers
├── sitemap.xml                   # Mapa del sitio para SEO
│

│
├── public/
│   ├── favicon.svg               # Favicon
│   ├── favicon-96x96.png         # Favicon PNG
│   ├── og-image.webp             # Imagen Open Graph
│   ├── asistente.png             # Imagen modal asesoramiento
│   ├── banner.png                # Banner principal
│   ├── entregamos.png            # Icono proceso 4
│   ├── soporte.png               # Icono soporte
│   ├── codificacion.png          # Icono servicio
│   └── [otras imágenes...]       # Portafolio, testimonios, etc.
│
├── src/
│   ├── main.ts                   # Entry point (Bootstrap, iconos, CSS hub, scripts)
│   │
│   ├── scripts/
│   │   └── contacto.ts           # Lógica formulario contacto + EmailJS
│   │
│   ├── assets/
│   │   └── fonts/                # Fuentes custom (@font-face en var.css)
│   │
│   └── styles/
│       ├── style.css             # Hub central (importa todos los CSS)
│       ├── var.css               # Variables CSS, colores, fuentes
│       ├── tags.css              # Estilos de etiquetas globales
│       ├── menuBar.css           # Navegación y menu
│       ├── modal.css             # Estilos del modal
│       ├── footer.css            # Estilos del footer
│       ├── index.css             # Estilos página principal
│       └── contacto.css          # Estilos página contacto
│
├── fonts/                        # Fuentes locales del proyecto
└── dist/                         # Build de producción (generado con `npm run build`)
```

---

## 🛠️ Comandos Disponibles

### Desarrollo
```bash
# Iniciar servidor con hot-reload
npm run dev

# Compilar TypeScript (verificar tipos)
npm run typecheck

# Verificar código con ESLint
npm run lint

# Verificar CSS con Stylelint
npm run lint:css
```

### Build & Deploy
```bash
# Compilar para producción
npm run build

# Servir la carpeta dist localmente (preview)
npm run preview

# Limpiar carpeta dist
npm run clean

# Publicar en GitHub Pages (requiere configuración)
npm run deploy
```

---

## 🎨 Características Principales

### 🎯 Modal de Asesoramiento
- Modal personalizado (no Bootstrap modal)
- Abre desde múltiples botones CTA (Solicitar asesoramiento, Hablemos de tu proyecto)
- Cierre con botón o click fuera
- Animaciones suaves

### 📧 Modal de Contacto
- Formulario integrado en modal dentro de la página principal
- Integración EmailJS (sin servidor)
- Validación de campos
- Envío de emails directamente desde el cliente
- Respuestas automáticas con SweetAlert2

### 📱 Responsive Design
- Mobile-first approach
- Breakpoints Bootstrap: 576px, 768px, 992px, 1200px, 1400px
- Imágenes optimizadas con media queries
- Menú adaptable y nav colapsable

### ⚡ Optimizaciones
- Lazy loading de imágenes
- Code splitting automático con Vite
- Service Worker para offline support
- Manifest PWA incluido
- Minificación automática en producción

### 🎬 Animaciones
- GSAP para efectos complejos
- Transiciones CSS suaves
- Scroll animations
- Modal animations

---

## ⚙️ Configuración

### Variables de Entorno
Crear archivo `.env` en la raíz:

```env
# URL del sitio (usado en meta tags Open Graph y EmailJS)
VITE_SITE_URL=https://tudominio.com

# EmailJS (opcional, si usas contacto)
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=public_xxxxx
```

### Configuración Vite
El archivo `vite.config.js` incluye:
- ✅ PWA plugin automático
- ✅ Optimización de imágenes
- ✅ Rollup config para chunks

### TypeScript
- Modo strict habilitado
- ESM only (`"type": "module"` en package.json)
- Tipos CheckSyntax: ✅

---

## 📊 Rendimiento

| Métrica | Target | Status |
|---|---|---|
| Lighthouse Performance | >90 | ✅ |
| Core Web Vitals | Green | ✅ |
| TypeScript Errors | 0 | ✅ |
| ESLint Errors | 0 | ✅ |
| CSS Lint Errors | 0 | ✅ |

---

## 🚀 Deployment

### GitHub Pages
```bash
# 1. Configurar en package.json (ya está configurado)
# 2. Ejecutar
npm run deploy

# El sitio se publica en: https://username.github.io/repository
```

### Vercel / Netlify
```bash
# Vercel automáticamente detecta Vite
# Solo conecta tu repo y listo

# Comandos detectados:
# Build: npm run build
# Output: dist
```

### Servidor personalizado
```bash
# 1. Build de producción
npm run build

# 2. Subir carpeta 'dist/' a tu servidor
# El servidor debe servir dist/index.html para rutas SPA
```

---

## 🔍 SEO & Social

El proyecto incluye:
- ✅ Meta tags completos (descripción, keywords, Open Graph)
- ✅ robots.txt configurado
- ✅ sitemap.xml automático
- ✅ Favicons múltiples
- ✅ JSON-LD structured data ready
- ✅ Canonical URLs
- ✅ Geolocalización (Chuy, Rocha, Uruguay)
- ✅ WhatsApp meta tag

---

## 🐛 Troubleshooting

### "El modal no se abre"
✅ **Solución:** Verificar que ambos botones tengan `data-modal-open`
```html
<button class="btn btn-border btn-lg" type="button" data-modal-open>
  Solicitar asesoramiento
</button>
```

### "Las imágenes no se cargan en mobile"
✅ **Solución:** Usar media queries en `index.css`:
```css
@media (max-width: 768px) {
  .img_banner { display: none; }
}
```

### "EmailJS no funciona"
✅ **Solución:** 
1. Crear cuenta en emailjs.com
2. Configurar `.env` con credenciales
3. Verificar IDs de template y service

### "ESLint reporta errores"
```bash
npm run lint -- --fix  # Auto-fix problemas
```

---

## 📝 Convenciones del Proyecto

- **CSS**: `snake_case` para clases custom, Bootstrap utilities para grid
- **TypeScript**: `camelCase` para variables/funciones, `PascalCase` para clases/tipos
- **Componentes**: Guardar en `src/` con estructura clara
- **Imports**: Usar rutas relativas (`./`) dentro de src
- **Estilos**: Importar en `src/styles/style.css` hub central

---

## 📚 Documentación Interna

- `CONTEXT.md` - Contexto del proyecto y hallazgos
- `AGENTS.md` - Información de agentes y verificación
- `DECISIONS.md` - Decisiones arquitectónicas
- `SESSION.md` - Sesiones de trabajo y cambios
- `TASKS.md` - Tareas pendientes
- `DEPENDENCIAS.md` - Detalles de dependencias

---

## 📄 Licencia

MIT License - Siéntete libre de usar este proyecto como base.

---

## 👥 Contacto

**Design System**
- 🌐 Sitio web: [www.designsystem.com](https://designsystem.com)
- 📧 Email: contacto@designsystem.com
- 📞 Teléfono: +598 XXXX XXXX
- 💼 LinkedIn: [Design System](https://linkedin.com/company/design-system)
- 🐙 GitHub: [Design System](https://github.com/design-system)

---

## 🎯 Roadmap

- [ ] Integrar sistema de booking para consultas técnicas
- [ ] Dashboard de admin para gestionar proyectos
- [ ] Sistema de testimonios y case studies dinámicos
- [ ] Blog de tips de desarrollo
- [ ] Galería interactiva de portafolio
- [ ] Sistema de notificaciones en tiempo real
- [ ] Multi-idioma (español/inglés/portugués)
- [ ] Integración con sistemas de pago

---

**Última actualización:** 2026-08-13
**Versión:** 1.0.0
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



### Menú mobile auto-cierre
Al hacer clic en cualquier enlace del menú de navegación en dispositivos móviles, el menú hamburguesa se cierra automáticamente.

### SEO y PWA preconfigurados
Cada página incluye meta tags, Open Graph, Twitter Card, URL canónica, `sitemap.xml`, `robots.txt` y `site.webmanifest` para PWA.

## 📋 Requisitos

- Node.js 18+
- npm 9+

## 📄 Licencia

[MIT](LICENCE)
