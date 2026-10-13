# CAT CODE DEMO SYSTEM v1.0

> **⚠️ Copia de referencia — NO editar aquí (decisión del CEO, 2026-10-05).**
> Este fichero es una **copia byte a byte** de `../01_BACKEND/CAT_CODE_DEMO_SYSTEM_v1.0.md` (verificado por hash SHA-256). **Canónico: `01_BACKEND/`.**
> Se conserva porque en este vault no se borra nada. **Motivo de la marca:** dos copias idénticas divergen en cuanto alguien edita una, y entonces el sistema base del portfolio tiene dos versiones distintas — que es exactamente el fallo que este documento evita al abrirse.
> Mismo patrón que `02_FRONTEND/PORTFOLIO_BRIEF_BACKEND.md`, ya marcado como *"referencia de contrato"* en el árbol de `00_LEEME_GLOBAL.md`.
> **Si necesitas cambiar el sistema base, edita `01_BACKEND/` y vuelve a copiar aquí.** Si prefieres que esta sea la canónica, dilo y se invierte la marca — pero solo una de las dos debe editarse.

Este será el **sistema base para construir todas las demos del portfolio de CAT CODE**.

La idea es simple: **no volver a construir cada demo desde cero**. Creamos un sistema reutilizable y cada proyecto cambia solamente su identidad, contenido, imágenes y módulos.

Además, mantendremos los **cuatro** casos conceptuales actuales: **Taller Recambios, Casa Nora, Ruta Norte y Estudio Lumen** — una demo por nivel de CUSTOM, más la del paquete FULL. El reparto vigente, con qué secciones se quita o se añade en cada salto, está en `UNIFICADO/09_PORTFOLIO/DEMOS/MAPEOS_Y_NIVELES.md`, que **manda** sobre cualquier lista de demos de este documento. El documento de portfolio confirma que son conceptos/placeholder y que los resultados reales nunca deben inventarse.

> **⚠️ Actualizado el 2026-09-30.** Esta línea decía *"los tres casos conceptuales actuales: Casa Nora, Estudio Lumen y Ruta Norte"*. El eje de mapeo se reescribió dos veces: primero a escalera de CUSTOM con 3 demos, y después a **4 demos** (se añadió **Taller Recambios** = CUSTOM Basic y **Estudio Lumen** pasó a **FULL**). No se borró ninguna demo: lo que cambió es a qué nivel pertenece cada una. La razón de fondo: **un nivel sin demo es un nivel que no se puede enseñar**. 

---

# 1. OBJETIVO

## CAT CODE DEMO SYSTEM v1.0

Sistema interno para crear rápidamente:

* Landing pages
* Webs de pequeños negocios
* Demos de portfolio
* Proyectos CUSTOM
* Proyectos WEEKLY
* Proyectos SOCIAL
* Proyectos FULL

Debe permitir pasar de:

**brief → diseño → contenido → imágenes → desarrollo → QA → deploy**

sin reinventar la arquitectura en cada proyecto.

---

# 2. PRINCIPIO FUNDAMENTAL

```text
CAT CODE DEMO SYSTEM
        │
        ├── CORE
        │
        ├── DESIGN SYSTEM
        │
        ├── COMPONENTS
        │
        ├── CONTENT SYSTEM
        │
        ├── IMAGE SYSTEM
        │
        ├── SEO SYSTEM
        │
        ├── SOCIAL SYSTEM
        │
        ├── WHATSAPP SYSTEM
        │
        ├── QA SYSTEM
        │
        └── PROJECT TEMPLATES
                 │
                 ├── CUSTOM
                 ├── WEEKLY
                 ├── SOCIAL
                 └── FULL
```

---

# 3. REGLA DE ARQUITECTURA

Separar:

### SISTEMA

Lo que reutilizamos.

### PROYECTO

Lo que cambia.

Por ejemplo:

```text
SYSTEM
Button
Card
Header
Footer
Hero
FAQ
CTA
SEO
WhatsApp
Responsive
Animation
```

Mientras que:

```text
PROJECT
Casa Nora
Estudio Lumen
Ruta Norte
```

tienen:

```text
logo
colores
tipografía
imágenes
textos
servicios
páginas
contenido
```

---

# 4. STACK V1

Recomiendo:

```text
Next.js
TypeScript
Tailwind CSS
Framer Motion
Lucide React
```

Y:

```text
Node.js
npm
ESLint
Prettier
Vitest
```

No introducir backend en V1.

Las demos deben poder funcionar como proyectos frontend independientes.

---

# 5. ESTRUCTURA DEL REPOSITORIO

```text
cat-code-demo-system/
│
├── README.md
├── OPENCODE.md
├── ARCHITECTURE.md
├── VISION.md
├── ROADMAP.md
├── CHANGELOG.md
├── LICENSE
│
├── package.json
├── tsconfig.json
├── next.config.ts
├── eslint.config.mjs
├── postcss.config.mjs
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── not-found.tsx
│   └── sitemap.ts
│
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── sections/
│   ├── cards/
│   ├── forms/
│   ├── content/
│   ├── social/
│   └── ui/
│
├── config/
│   ├── site.ts
│   ├── theme.ts
│   ├── navigation.ts
│   └── features.ts
│
├── content/
│   ├── site.ts
│   ├── services.ts
│   ├── testimonials.ts
│   ├── faq.ts
│   ├── journal.ts
│   └── social.ts
│
├── data/
│   └── projects/
│
├── public/
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── lib/
│   ├── seo/
│   ├── whatsapp/
│   ├── analytics/
│   └── utils/
│
├── styles/
│   ├── tokens.css
│   └── utilities.css
│
├── tests/
│   ├── components/
│   ├── content/
│   └── utils/
│
└── docs/
    ├── DESIGN_SYSTEM.md
    ├── COMPONENTS.md
    ├── CONTENT_SYSTEM.md
    ├── IMAGE_SYSTEM.md
    ├── SEO_SYSTEM.md
    ├── SOCIAL_SYSTEM.md
    ├── QA.md
    └── DEPLOY.md
```

---

# 6. SISTEMA DE PROYECTOS

Cada demo tendrá una configuración.

```text
projects/
│
├── casa-nora/
│   ├── project.config.ts
│   ├── content.ts
│   ├── theme.ts
│   └── images.ts
│
├── estudio-lumen/
│   ├── project.config.ts
│   ├── content.ts
│   ├── theme.ts
│   └── images.ts
│
└── ruta-norte/
    ├── project.config.ts
    ├── content.ts
    ├── theme.ts
    └── images.ts
```

---

# 7. PROJECT CONFIG

Ejemplo:

```ts
export const project = {
  id: "ruta-norte",

  name: "Ruta Norte",

  type: "tourism",

  package: "FULL",

  city: "Bilbao",

  demo: true,

  status: "concept",

  whatsapp: {
    enabled: true,
    number: "",
  },

  features: {
    hero: true,
    services: true,
    destinations: true,
    journal: true,
    social: true,
    faq: true,
    contact: true,
  },
};
```

---

# 8. SISTEMA DE PAQUETES

Este es uno de los puntos más importantes.

## CUSTOM

Debe demostrar:

```text
Landing
Hero
Problema/Solución
Servicios
Beneficios
CTA
Contacto
WhatsApp
SEO
Responsive
```

### Demo

**Casa Nora**

---

# WEEKLY

Debe demostrar:

```text
Landing
+
contenido semanal
+
promociones
+
calendario
```

---

# SOCIAL

Debe demostrar:

```text
Landing
+
contenido visual
+
feed social
+
CTA
+
reserva/contacto
```

### Demo

**Estudio Lumen**

---

# FULL

Debe demostrar:

```text
Landing
+
contenido
+
social
+
conversión
+
páginas internas
+
SEO
+
WhatsApp
```

### Demo

**Ruta Norte**

Esto mantiene coherencia con la estructura actual del portfolio. 

---

# 9. DESIGN TOKENS

Crear tokens para que cada demo pueda tener su propia identidad.

```ts
export const theme = {
  colors: {
    background: "",
    foreground: "",
    primary: "",
    secondary: "",
    accent: "",
    muted: "",
    border: "",
  },

  radius: {
    sm: "",
    md: "",
    lg: "",
  },

  spacing: {
    section: "",
    container: "",
  },

  typography: {
    heading: "",
    body: "",
  },
};
```

---

# 10. COMPONENTES BASE

## Navigation

```text
Header
DesktopNav
MobileNav
MobileMenu
AnnouncementBar
```

## Hero

```text
Hero
HeroImage
HeroContent
HeroCTA
```

## Content

```text
Section
SectionHeading
RichText
```

## Cards

```text
ServiceCard
ExperienceCard
DestinationCard
ArticleCard
SocialCard
TestimonialCard
```

## CTA

```text
CTA
WhatsAppCTA
FinalCTA
```

## Forms

```text
ContactForm
Input
Textarea
Select
SubmitButton
```

## Utility

```text
Button
Badge
IconButton
Divider
Container
```

---

# 11. REGLA DE COMPONENTES

Los componentes no deben contener contenido específico de una marca.

❌ Mal:

```tsx
<h2>El norte se vive.</h2>
```

dentro de `Hero.tsx`.

✅ Bien:

```tsx
<Hero
  title={hero.title}
  description={hero.description}
/>
```

Así el mismo componente sirve para:

```text
Casa Nora
Estudio Lumen
Ruta Norte
```

---

# 12. SISTEMA DE CONTENIDO

Separar contenido de código.

```text
content/
├── site.ts
├── hero.ts
├── services.ts
├── about.ts
├── faq.ts
├── journal.ts
└── social.ts
```

Ejemplo:

```ts
export const hero = {
  eyebrow: "Experiencias · Turismo",
  title: "El norte se vive.",
  description:
    "Descubre paisajes, sabores y experiencias que no aparecen en las rutas de siempre.",
  primaryCta: "Explorar experiencias",
  secondaryCta: "Hablar por WhatsApp",
};
```

---

# 13. SISTEMA DE IMÁGENES

Nunca colocar imágenes directamente dentro de los componentes.

Usar:

```ts
export const images = {
  hero: "/images/ruta-norte/hero/hero.webp",

  experiences: {
    nature: "/images/ruta-norte/experiences/naturaleza.webp",
    food: "/images/ruta-norte/experiences/gastronomia.webp",
  },
};
```

Esto permite cambiar una imagen sin tocar componentes.

---

# 14. IMAGE CHECKLIST

Cada proyecto:

```text
[ ] Hero desktop
[ ] Hero mobile
[ ] Services
[ ] Featured
[ ] About
[ ] CTA
[ ] Social
[ ] OG image
[ ] Favicon
```

---

# 15. SISTEMA SOCIAL

Para SOCIAL y FULL:

```text
SocialFeed
SocialCard
SocialGrid
SocialCTA
```

Datos:

```ts
export const socialPosts = [
  {
    id: "01",
    image: "...",
    caption: "...",
    category: "...",
    platform: "instagram",
  },
];
```

No conectar Instagram en V1.

---

# 16. WHATSAPP SYSTEM

Crear una única utilidad:

```ts
export function createWhatsAppUrl(
  phone: string,
  message?: string
) {
  // implementation
}
```

Todos los botones utilizan la misma función.

Ejemplo:

```text
HABLAR POR WHATSAPP
```

Mensaje configurable:

```text
Hola, me interesa conocer más sobre [proyecto].
```

---

# 17. SEO SYSTEM

Cada proyecto tendrá:

```ts
seo: {
  title: "",
  description: "",
  keywords: [],
  ogImage: "",
}
```

Generar automáticamente:

```text
<title>
<meta description>
OpenGraph
Twitter Card
canonical
robots
sitemap
```

---

# 18. ACCESSIBILITY SYSTEM

Todos los componentes deben cumplir:

```text
WCAG-oriented practices
```

Como mínimo:

```text
✓ semantic HTML
✓ keyboard navigation
✓ focus states
✓ alt text
✓ form labels
✓ sufficient contrast
✓ reduced motion
✓ accessible buttons
```

---

# 19. RESPONSIVE SYSTEM

Definir breakpoints globales:

```text
sm
md
lg
xl
2xl
```

Pero los componentes deben adaptarse por comportamiento, no simplemente por tamaño.

Ejemplo:

```text
Desktop:
4 cards

Tablet:
2 cards

Mobile:
1 card
```

---

# 20. ANIMATION SYSTEM

Crear presets:

```text
fadeIn
fadeUp
fadeDown
scaleIn
imageReveal
staggerChildren
```

No animar cada elemento.

Regla:

> La animación debe mejorar la percepción, nunca distraer de la conversión.

---

# 21. FORM SYSTEM

Todos los formularios deben tener:

```text
idle
loading
success
error
disabled
```

Aunque sea una demo.

Ejemplo:

```text
ENVIAR SOLICITUD

↓

ENVIANDO...

↓

✓ Mensaje enviado
```

En una demo sin backend real, mostrar explícitamente:

> Demo — formulario de ejemplo.

No fingir que se envió un mensaje real.

---

# 22. DEMO DATA RULE

Regla crítica:

### Nunca inventar prueba social.

Nada de:

```text
★★★★★ 4.9
+5.000 clientes
98% satisfacción
```

si no existe.

El documento de portfolio actual establece precisamente que los resultados de casos no deben inventarse y que estos proyectos son conceptos/placeholder. 

Para demos usar:

```text
Proyecto conceptual
```

o simplemente omitir métricas.

---

# 23. QA SYSTEM

Cada proyecto debe pasar:

```text
FUNCTIONAL QA
VISUAL QA
RESPONSIVE QA
ACCESSIBILITY QA
SEO QA
PERFORMANCE QA
CONTENT QA
```

Checklist:

```text
[ ] npm run lint
[ ] npm run typecheck
[ ] npm run test
[ ] npm run build
[ ] no console errors
[ ] no broken links
[ ] no missing images
[ ] mobile checked
[ ] desktop checked
[ ] keyboard checked
[ ] metadata checked
[ ] favicon checked
[ ] OG checked
```

---

# 24. PROJECT STATUS

Cada demo tendrá:

```text
concept
design
development
qa
ready
published
archived
```

Ejemplo:

```text
Ruta Norte
status: ready
```

---

# 25. DOCUMENTACIÓN DE CADA DEMO

Cada proyecto terminado debe producir:

```text
PROJECT.md
```

con:

```text
Cliente:
Tipo:
Ciudad:
Paquete:
Objetivo:
Público:
Propuesta:
Secciones:
Funcionalidades:
Contenido:
Imágenes:
CTA:
SEO:
Estado:
URL:
```

---

# 26. PORTFOLIO PRESENTATION

El sistema también debe generar la información que CAT CODE necesita para mostrar cada proyecto:

```ts
export const portfolioProject = {
  name: "Ruta Norte",
  category: "Turismo / Experiencias",
  city: "Bilbao",
  package: "FULL",
  description:
    "Landing + contenido + presencia social + conversión",
  demoUrl: "",
  image: "",
  status: "concept",
};
```

---

# 27. ESTRUCTURA FINAL DE UN PROYECTO

Una demo terminada debería verse así:

```text
ruta-norte/
│
├── app/
├── components/
├── config/
├── content/
├── lib/
├── public/
│   └── images/
│
├── tests/
│
├── README.md
├── PROJECT.md
├── DESIGN.md
├── SEO.md
├── QA.md
├── DEPLOY.md
│
├── package.json
└── tsconfig.json
```

---

# 28. ROADMAP

## M0 — Foundation

```text
Repository
Next.js
TypeScript
Tailwind
ESLint
Prettier
Vitest
```

## M1 — Design System

```text
tokens
typography
colors
spacing
buttons
cards
containers
```

## M2 — Layout System

```text
Header
Footer
Navigation
Mobile menu
Sections
```

## M3 — Content System

```text
Hero
Services
About
FAQ
CTA
```

## M4 — Media System

```text
Images
Responsive images
Image cards
Gallery
```

## M5 — Social

```text
Social cards
Social grid
Instagram-style feed
```

## M6 — Conversion

```text
WhatsApp
Contact
Forms
CTA
```

## M7 — SEO

```text
Metadata
OG
Sitemap
Robots
Schema
```

## M8 — Motion

```text
Framer Motion
reveal
hover
transitions
```

## M9 — QA

```text
tests
responsive
accessibility
performance
```

## M10 — Demo Templates

```text
CUSTOM
WEEKLY
SOCIAL
FULL
```

## M11 — First Projects

```text
Casa Nora
Estudio Lumen
Ruta Norte
```

## M12 — Portfolio Integration

```text
CAT CODE website
portfolio cards
case pages
demo links
```

---

# 29. REGLA DE ORO

El sistema **no debe convertirse en una plantilla visual rígida**.

Debe proporcionar:

> **estructura reutilizable + libertad visual.**

Casa Nora no debe parecer Ruta Norte.

Estudio Lumen no debe parecer Casa Nora.

Pero los tres deben sentirse construidos por la **misma empresa profesional**.

Ese es exactamente el valor que queremos demostrar con CAT CODE.

---

# 30. PROMPT MAESTRO PARA OPENCODE

Este es el prompt que usaría para iniciar el repositorio:

```text
# CAT CODE DEMO SYSTEM v1.0

Construye desde cero un sistema reutilizable para crear
proyectos web demo de CAT CODE.

OBJETIVO:

Crear una arquitectura frontend profesional y reutilizable
para construir rápidamente demos de portfolio para pequeños
negocios.

El sistema debe soportar cuatro tipos de proyecto:

CUSTOM
WEEKLY
SOCIAL
FULL

==================================================
STACK
==================================================

Next.js
TypeScript
App Router
Tailwind CSS
Framer Motion
Lucide React
ESLint
Prettier
Vitest

==================================================
PRINCIPIO
==================================================

Separar completamente:

SYSTEM

de:

PROJECT

Los componentes reutilizables no deben contener contenido
específico de una marca.

Toda la identidad, contenido, imágenes y configuración
deben ser inyectables mediante configuración y datos.

==================================================
ARQUITECTURA
==================================================

Crear:

app/
components/
config/
content/
data/
lib/
public/
styles/
tests/
docs/

==================================================
COMPONENTES
==================================================

Crear componentes reutilizables para:

Header
DesktopNav
MobileNav
MobileMenu
AnnouncementBar
Hero
Section
SectionHeading
Button
Badge
Card
ServiceCard
ExperienceCard
DestinationCard
ArticleCard
SocialCard
CTA
WhatsAppCTA
ContactForm
FAQ
Footer
```

```text
==================================================
CONFIGURACIÓN DE PROYECTOS
==================================================

Cada proyecto debe poder definir:

id
name
type
package
city
status
theme
content
images
features
seo
whatsapp

==================================================
PAQUETES
==================================================

CUSTOM:

Landing
Hero
Services
Benefits
CTA
Contact
WhatsApp
SEO

WEEKLY:

CUSTOM
+
Weekly promotions
+
Calendar
+
Content blocks

SOCIAL:

Landing
+
Social content
+
Social feed
+
CTA
+
Contact/booking

FULL:

Landing
+
Content
+
Social
+
Internal pages
+
Journal
+
Conversion
+
SEO

==================================================
THEME
==================================================

Crear design tokens configurables:

colors
typography
spacing
radius
shadows
container
breakpoints

Cada proyecto debe poder tener una identidad diferente.

==================================================
CONTENT
==================================================

No hardcodear contenido dentro de componentes.

Crear:

hero
services
about
faq
journal
social
cta
navigation

==================================================
IMAGES
==================================================

Crear sistema centralizado de imágenes.

Nunca depender de URLs externas en producción.

Utilizar next/image.

Soportar:

desktop
mobile
thumbnail
OG

==================================================
WHATSAPP
==================================================

Crear utilidad reutilizable:

createWhatsAppUrl()

Número configurable mediante configuración.

No hardcodear números reales.

==================================================
SEO
==================================================

Implementar:

metadata
OpenGraph
Twitter cards
canonical
robots
sitemap
structured data cuando corresponda

==================================================
ACCESSIBILITY
==================================================

Todos los componentes deben:

usar HTML semántico
ser navegables con teclado
tener focus states
tener alt text
tener labels
tener contraste suficiente
respetar prefers-reduced-motion

==================================================
ANIMATIONS
==================================================

Crear presets reutilizables:

fadeIn
fadeUp
scaleIn
imageReveal
stagger

Las animaciones deben ser sutiles.

==================================================
FORMS
==================================================

Crear estados:

idle
loading
success
error
disabled

Nunca fingir envíos reales.

Si no existe backend mostrar estado demo.

==================================================
QA
==================================================

Configurar:

lint
typecheck
test
build

Crear checklist QA.

No debe haber:

console errors
broken links
missing images
TypeScript errors
lint errors
build errors

==================================================
DEMO PROJECTS
==================================================

Preparar soporte para:

Casa Nora
Estudio Lumen
Ruta Norte

Son proyectos conceptuales.

No inventar:

clientes reales
reviews
métricas
resultados
premios
seguidores
reservas
testimonios

Usar "Proyecto conceptual" cuando sea necesario.

==================================================
QUALITY
==================================================

El sistema debe ser:

modular
tipado
mantenible
responsive
accesible
performante
documentado

Evitar sobreingeniería.

No crear backend.

No crear base de datos.

No añadir dependencias innecesarias.

==================================================
DOCUMENTACIÓN
==================================================

Crear:

README.md
OPENCODE.md
ARCHITECTURE.md
VISION.md
ROADMAP.md

docs:

DESIGN_SYSTEM.md
COMPONENTS.md
CONTENT_SYSTEM.md
IMAGE_SYSTEM.md
SEO_SYSTEM.md
SOCIAL_SYSTEM.md
QA.md
DEPLOY.md

==================================================
ORDEN DE IMPLEMENTACIÓN
==================================================

1. Foundation
2. Design tokens
3. Layout
4. UI components
5. Content system
6. Image system
7. Social system
8. WhatsApp
9. SEO
10. Accessibility
11. Animation
12. QA
13. Demo templates
14. Demo projects

==================================================
REGLA FINAL
==================================================

No detenerse después de crear archivos vacíos.

Implementar funcionalidad real.

Ejecutar lint.

Ejecutar typecheck.

Ejecutar tests.

Ejecutar build.

Corregir cualquier error.

Entregar CAT CODE DEMO SYSTEM v1.0 funcionando.
```

## Resultado que buscamos

Al terminar este sistema, crear una nueva demo debería pasar de esto:

**“Tengo que construir otra web desde cero”**

a:

**“Creo un nuevo proyecto → elijo CUSTOM/SOCIAL/FULL → cargo identidad + contenido + imágenes → OpenCode construye la demo.”**

Y ahí es donde el sistema empieza a convertirse en una **herramienta de producción interna de CAT CODE**, no simplemente en un repositorio de componentes.

---

> **Este archivo es canónico** (decisión del CEO, 2026-09-30). Origen histórico con la misma referencia: `Proyectos/Portafolio/CAT_CODE_DEMO_SYSTEM_v1.0.md` — **no editar ahí.**
