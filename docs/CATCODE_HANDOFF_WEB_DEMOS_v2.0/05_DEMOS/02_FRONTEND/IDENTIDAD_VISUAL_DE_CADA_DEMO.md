Sí. Para que las demos de **CAT CODE** queden realmente completas y parezcan proyectos que podrían entregarse a un cliente —no simples mockups— todavía faltan varias piezas.

Yo las cerraría con este **checklist de producción**:

> ## 📷 Origen de las fotos: SOLO IA (decisión del CEO, 2026-10-05)
>
> **Ni Pexels, ni Pixabay, ni Unsplash, ni ningún banco de imágenes.** Todas las fotos de las demos se generan con IA, desde los packs de prompts de `03_SOCIAL_MEDIA/DEMO0*_PROMPTS_IA.md`.
>
> **Por qué, escrito para que no se reabra en seis meses:**
>
> | Motivo | Detalle |
> |---|---|
> | **Control de identidad** | Un personaje tiene que ser **la misma persona** en el hero, en la sección de equipo, en el testimonio y en el perfil social. Con IA se itera; con un banco de imágenes, no |
> | **Cero licencias** | Una foto de stock tiene una licencia, unos límites y una atribución que puede cambiar. Una imagen generada con IA no tiene ninguna de las tres cosas |
> | **Verosimilitud local** | Un banco genérico se ve como banco genérico. Una peluquería de barrio de Sevilla generada a medida se ve como una peluquería de barrio de Sevilla |
> | **Coherencia entre demos** | Las cuatro comparten sistema visual. Un solo generador lo hace fácil |
>
> **El argumento que sí se descartó:** *"las fotos de stock son más rápidas y realistas"*. Son más rápidas, sí; realistas en el sentido de *personaje real y coherente*, no. Y el coste de/licenses no compensa.
>
> **Consecuencia práctica:** los packs de prompts de `03_SOCIAL_MEDIA/` son **la fuente de todas las imágenes del portfolio**. Si una demo necesita una foto que no está en su pack, se **añade el prompt**, no se va a buscar la foto.

### 1. Identidad visual de cada demo

* Logo/wordmark
* Favicon
* Paleta definitiva
* Tipografías
* Sistema de botones
* Iconografía
* Espaciados
* Tratamiento de imágenes
* Estados hover/focus/active
* Versión desktop + tablet + móvil

### 2. Banco de imágenes

Para cada proyecto:

* Hero
* Imágenes de cada servicio/categoría
* Imagen destacada
* Imágenes para artículos
* Imágenes para redes
* Imagen Open Graph
* Favicon/elementos gráficos

**Ruta Norte** ya tiene prácticamente definido este paquete de prompts.

### 3. Contenido real de la demo

No solamente diseño:

* Textos completos
* Títulos y subtítulos
* CTAs
* Descripciones
* FAQ
* Footer
* Mensajes de WhatsApp
* Microcopy de botones y formularios
* Datos de ejemplo

La demo debe poder navegarse como si fuera un negocio real.

### 4. Funcionalidad

Aquí es donde una demo FULL debe diferenciarse de una simple landing.

Por ejemplo, **Ruta Norte**:

* Navegación funcional
* Menú móvil
* Scroll suave
* Filtros/categorías de experiencias
* Cards clicables
* Página individual de experiencia
* FAQ desplegable
* Formulario de contacto
* Botón WhatsApp
* Links sociales
* Newsletter/demo
* Animaciones
* Estados de carga/error
* 404 personalizada

### 5. Páginas internas

Para los proyectos **FULL**, yo agregaría:

```text
/
├── Inicio
├── Experiencias
│   ├── Naturaleza
│   ├── Gastronomía
│   ├── Aventura
│   └── Escapadas
├── Experiencia individual
├── Destinos
├── Journal
│   └── Artículo individual
├── Nosotros
├── FAQ
├── Contacto
└── 404
```

No necesariamente todas las demos necesitan tantas páginas. La idea es que **FULL demuestre que CAT CODE puede construir una presencia digital completa**.

---

# 6. SEO

Cada demo debería tener:

* `<title>`
* Meta description
* Open Graph
* Twitter/X card
* Favicon
* URLs limpias
* Sitemap
* Robots.txt
* Canonical
* `alt` en imágenes
* headings correctamente estructurados
* Schema.org cuando tenga sentido

---

# 7. Responsive real

Hay que probar cada demo en:

```text
Desktop
├── 1440px
├── 1280px
└── 1024px

Tablet
├── 834px
└── 768px

Mobile
├── 430px
├── 390px
└── 375px
```

Y no simplemente "que se vea bien".

Hay que revisar:

* menú
* hero
* grids
* imágenes
* tipografías
* botones
* formularios
* cards
* footer
* WhatsApp CTA

---

# 8. Performance

Especialmente importante porque las demos van a formar parte del portfolio de CAT CODE.

* WebP/AVIF
* imágenes optimizadas
* lazy loading
* responsive images
* fuentes optimizadas
* JS mínimo
* animaciones eficientes
* evitar imágenes gigantes
* Lighthouse alto

Objetivo orientativo:

```text
Performance     90+
Accessibility   90+
Best Practices  90+
SEO             90+
```

---

# 9. Accesibilidad

* contraste
* navegación con teclado
* focus visible
* labels
* alt text
* botones correctamente definidos
* `aria-*` cuando corresponda
* estructura semántica
* reduced motion

Esto además hace que el trabajo se vea mucho más profesional.

---

# 10. QA de cada demo

Crear un pequeño documento:

```text
QA.md
```

Con pruebas:

```text
[ ] Desktop
[ ] Tablet
[ ] Mobile
[ ] Menú
[ ] Todos los enlaces
[ ] Botones
[ ] WhatsApp
[ ] Formularios
[ ] FAQ
[ ] Imágenes
[ ] SEO
[ ] Favicon
[ ] 404
[ ] Accesibilidad
[ ] Performance
[ ] Console errors = 0
```

---

# 11. Deploy

Cada demo debería tener:

```text
GitHub Repository
        ↓
Build
        ↓
Deploy
        ↓
URL pública
```

Por ejemplo:

```text
catcode/
├── portfolio-casa-nora
├── portfolio-estudio-lumen
└── portfolio-ruta-norte
```

Y cada una debería poder abrirse mediante una URL pública.

---

# 12. Presentación dentro del portfolio CAT CODE

Esto es **muy importante**.

No basta con tener las webs.

En la página Portfolio de CAT CODE debería aparecer:

### CASA NORA

**Landing · CUSTOM**

> Una landing premium diseñada para convertir visitas en contactos.

**Ver proyecto →**

---

### ESTUDIO LUMEN

**Social · SOCIAL**

> Una presencia digital pensada para conectar contenido, marca y redes sociales.

**Ver proyecto →**

---

### RUTA NORTE

**Experiencias · FULL**

> Una solución digital completa para una marca turística: web, contenido y conversión.

**Ver proyecto →**

---

# 13. Documentación de cada demo

Yo pondría dentro de cada repositorio:

```text
README.md
PROJECT.md
DESIGN.md
CONTENT.md
IMAGES.md
SEO.md
QA.md
DEPLOY.md
```

Así CAT CODE no solamente muestra una web bonita: demuestra que tiene **un sistema profesional para producirlas**.

---

# 14. Lo que falta específicamente en tus 4 demos

| Demo          | Paquete | Estado |
| ------------- | ------- | ------ |
| CASA NORA     | CUSTOM  | 🟡     |
| ESTUDIO LUMEN | SOCIAL  | 🟡     |
| RUTA NORTE    | FULL    | 🟡     |

Y el objetivo final sería:

```text
CASA NORA
Landing funcional
✓ Diseño
✓ Contenido
✓ Imágenes
✓ Responsive
✓ WhatsApp
✓ SEO
✓ Deploy

ESTUDIO LUMEN
Social funcional
✓ Diseño
✓ Contenido
✓ Imágenes
✓ Feed social
✓ CTA
✓ Responsive
✓ SEO
✓ Deploy

RUTA NORTE
Full funcional
✓ Web completa
✓ Experiencias
✓ Destinos
✓ Journal
✓ Contenido
✓ Imágenes
✓ WhatsApp
✓ Formularios
✓ Responsive
✓ SEO
✓ Performance
✓ Deploy
```

### Y hay una cosa que yo haría antes de seguir creando más demos

Construiría un **CAT CODE DEMO SYSTEM v1.0**.

Es decir, un sistema común para que las cuatro demos tengan:

```text
CAT CODE DEMO SYSTEM
│
├── Design System
├── Components
├── Layouts
├── Buttons
├── Cards
├── Forms
├── Header
├── Footer
├── WhatsApp CTA
├── SEO
├── Responsive
├── Accessibility
├── Image System
├── Animation System
└── QA System
```

Después cada proyecto solamente cambia:

```text
MARCA
CONTENIDO
COLORES
IMÁGENES
COMPONENTES NECESARIOS
PÁGINAS
```

Eso te permitiría construir **10, 20 o 50 demos mucho más rápido** con OpenCode.

**Mi siguiente paso recomendado:** terminar primero **CASA NORA + ESTUDIO LUMEN + RUTA NORTE al 100%**, y después convertir lo aprendido en el **CAT CODE DEMO SYSTEM v1.0** que utilizarás para todos los proyectos futuros.

---

> **Este archivo es canónico** (decisión del CEO, 2026-09-30). Origen histórico con la misma referencia: `Proyectos/Portafolio/IDENTIDAD_VISUAL_DE_CADA_DEMO.md` — **no editar ahí.**
