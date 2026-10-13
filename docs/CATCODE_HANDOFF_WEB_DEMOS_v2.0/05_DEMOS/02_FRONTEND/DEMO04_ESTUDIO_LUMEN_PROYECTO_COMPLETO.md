# ESTUDIO LUMEN — PROYECTO DEMO COMPLETO

### Landing Page · Paquete SOCIAL · Portfolio CAT CODE

Vamos a plantearlo como una **web real de un estudio de belleza/estética**, pero claramente marcada internamente como proyecto conceptual para el portfolio de CAT CODE.

La diferencia con Casa Nora es importante: **Estudio Lumen debe vender principalmente imagen, contenido y presencia social**, no funcionar como una web de restaurante con reservas como objetivo principal.

> **⚠️ Stack histórico (Next.js/React).** El estándar actual es **Astro + Tailwind CSS en Vercel** (decisión del 2026-09-27). Este brief se conserva como registro: **el copy y el diseño de abajo no se reescriben.**
>
> **Nivel comercial: PAQUETE FULL · 199 €/mes, setup incluido · RECOMENDADO.**
> Estructura según `UNIFICADO/09_PORTFOLIO/DEMOS/MAPEOS_Y_NIVELES.md` §7.
> **Cambio del 2026-09-30 (importante):** esta demo pasa de SOCIAL a **FULL**, y con ella **deja de ser la tercera para ser la cuarta**. FULL = **CUSTOM Pro + WEEKLY Pro + SOCIAL Pro** (`PRECIOS.md` §5), así que:
> - La **landing baja a 8 secciones** (grado Pro), no 14.
> - Aparece un **calendario editorial de WEEKLY** que **no existía** en este brief.
> - La **rejilla de Instagram pasa a ser la capa SOCIAL**, no una sección de la landing.
> - Se le añade la **sección de Ubicación**, que faltaba.
>
> ⚠️ **Es la demo más cara de las cuatro** y la que más trabajo tiene. Ver `# 44 · NIVEL COMERCIAL FULL (2026-09-30)` al final del brief.

---

# 01 · CONCEPTO

**Nombre:** ESTUDIO LUMEN
**Categoría:** Belleza / Estética
**Paquete:** SOCIAL
**Ciudad demo:** Valencia, España
**Tipo:** Landing + contenido visual + integración de redes

### Concepto

> **Belleza que se siente. Imagen que habla.**

Estudio Lumen es un estudio de belleza contemporáneo especializado en cuidado facial, cabello, manicura y tratamientos personalizados.

La web debe transmitir:

* Elegancia
* Cuidado
* Confianza
* Feminidad moderna
* Profesionalidad
* Cercanía
* Estética premium
* Contenido visual para Instagram

### Objetivo comercial

La página debe conseguir que una persona:

1. Descubra el estudio.
2. Vea los resultados y trabajos.
3. Explore Instagram.
4. Conozca los servicios.
5. Contacte por WhatsApp.
6. Solicite una cita.

---

# 02 · IDENTIDAD VISUAL

## Dirección artística

**Editorial beauty + minimalismo premium + estética mediterránea contemporánea.**

No queremos:

* Spa genérico.
* Web rosa cliché.
* Exceso de flores.
* Fotografías artificiales.
* Diseño recargado.
* Estética de peluquería barata.

Queremos:

> **Un estudio de belleza moderno que podría existir perfectamente en Valencia.**

---

## Paleta

```text
CREAM       #F8F5F0
CHARCOAL    #171717
SOFT TAUPE  #D8CEC4
SAND        #E8DED4
ROSE        #CFAFA7
WHITE       #FFFFFF
```

### Tipografía

Título:

```text
DM Serif Display
```

Texto:

```text
Inter
```

Alternativa si quieres mantener una sola familia:

```text
Jura
```

---

# 03 · ESTRUCTURA COMPLETA

```text
ESTUDIO LUMEN
│
├── Announcement
├── Header
├── Hero
├── Intro
├── Servicios
├── Filosofía
├── Resultados / Trabajos
├── Instagram
├── Experiencia
├── Sobre Lumen
├── Galería
├── CTA WhatsApp
├── FAQ
└── Footer
```

---

# 04 · ANNOUNCEMENT BAR

Pequeña barra superior.

```text
NUEVA TEMPORADA · RESERVA TU CITA POR WHATSAPP →
```

Debe poder ocultarse fácilmente desde configuración.

---

# 05 · HEADER

Logo:

```text
LUMEN
ESTUDIO DE BELLEZA
```

Menú:

```text
Inicio
Servicios
Resultados
Instagram
Estudio
Contacto
```

CTA:

```text
RESERVAR CITA
```

En móvil:

```text
☰
```

---

# 06 · HERO

Esta es la sección más importante.

## Layout

Desktop:

```text
┌──────────────────────────────────────────────────────┐
│ LOGO      Inicio Servicios Resultados Instagram  CTA │
├───────────────────────────────┬──────────────────────┤
│                               │                      │
│  BELLEZA QUE                 │                      │
│  SE SIENTE.                  │     IMAGEN           │
│                              │     MODELO           │
│  Tratamientos, cuidado       │                      │
│  y belleza pensados          │                      │
│  para ti.                    │                      │
│                              │                      │
│  [ RESERVAR CITA ]           │                      │
│  [ VER INSTAGRAM ]           │                      │
│                              │                      │
└───────────────────────────────┴──────────────────────┘
```

### Headline

> **Belleza que se siente.**

### Subheadline

> Tratamientos, cuidado y belleza pensados para ti.

### CTA principal

```text
RESERVAR CITA
```

### CTA secundario

```text
VER INSTAGRAM
```

### Microcopy

```text
Valencia · Estudio de belleza contemporáneo
```

---

# 07 · INTRO

Título:

> **Tu momento empieza aquí.**

Texto:

> En Lumen creemos que cuidarte no debería sentirse como una obligación, sino como un momento para ti.

> Creamos una experiencia cercana, cuidada y personalizada para que salgas sintiéndote exactamente como quieres.

Tres pequeños indicadores:

```text
01
Cuidado personalizado

02
Productos seleccionados

03
Experiencia Lumen
```

---

# 08 · SERVICIOS

Título:

> **Todo lo que necesitas para sentirte bien.**

Grid de cuatro servicios.

---

## 01 · CUIDADO FACIAL

```text
Limpieza
Hidratación
Tratamientos personalizados
```

CTA:

```text
DESCUBRIR
```

---

## 02 · PELO

```text
Corte
Color
Tratamientos
Styling
```

---

## 03 · MANICURA

```text
Manicura
Semipermanente
Nail art
Cuidado
```

---

## 04 · CEJAS & MIRADA

```text
Diseño
Laminado
Lifting
Tinte
```

---

# 09 · SERVICIO DESTACADO

Crear una sección editorial grande.

Título:

> **Tu piel. Tu momento. Tu tratamiento.**

Texto:

> Analizamos lo que tu piel necesita y diseñamos una experiencia personalizada para ayudarte a conseguir una piel más luminosa, equilibrada y cuidada.

CTA:

```text
VER TRATAMIENTOS
```

Imagen grande de tratamiento facial.

---

# 10 · RESULTADOS

Esta sección es fundamental para el paquete **SOCIAL**.

Título:

> **El resultado habla por nosotros.**

Subtítulo:

> Una selección de nuestros últimos trabajos.

Grid:

```text
┌────────────┬────────────┬────────────┐
│            │            │            │
│   FOTO     │   FOTO     │   FOTO     │
│            │            │            │
├────────────┼────────────┼────────────┤
│            │            │            │
│   FOTO     │   FOTO     │   FOTO     │
│            │            │            │
└────────────┴────────────┴────────────┘
```

Categorías:

```text
TODOS
PELO
UÑAS
PIEL
MIRADA
```

Al hacer click:

* Lightbox
* Imagen grande
* Categoría
* Descripción breve

---

# 11 · INSTAGRAM

Esta es **la sección estrella del paquete SOCIAL**.

Título:

> **Más Lumen en Instagram.**

Texto:

> Descubre nuestros últimos trabajos, inspiración y pequeños momentos del estudio.

Crear grid visual:

```text
┌───────┬───────┬───────┐
│       │       │       │
│ IMG   │ IMG   │ IMG   │
│       │       │       │
├───────┼───────┼───────┤
│       │       │       │
│ IMG   │ IMG   │ IMG   │
│       │       │       │
└───────┴───────┴───────┘
```

Cada publicación puede tener:

```text
@estudiolumen
```

y una pequeña etiqueta:

```text
NUEVO
PELO
NAILS
SKIN
```

CTA:

```text
SEGUIR EN INSTAGRAM
```

Para la demo **no utilizar una integración real de Instagram**.

Usar contenido local mock.

Esto permite demostrar al cliente cómo quedaría el bloque.

---

# 12 · EXPERIENCIA LUMEN

Título:

> **No es solo un tratamiento.**

Tres pasos:

### 01

**Escuchamos**

> Empezamos entendiendo lo que buscas.

### 02

**Creamos**

> Elegimos el tratamiento adecuado para ti.

### 03

**Cuidamos**

> Cada detalle importa, antes, durante y después.

Visual:

```text
01 ───── 02 ───── 03
ESCUCHAR  CREAR   CUIDAR
```

---

# 13 · SOBRE EL ESTUDIO

Título:

> **Un espacio para volver a ti.**

Texto:

> Lumen nace de una idea sencilla: crear un espacio donde belleza, cuidado y tranquilidad convivan.

> Un estudio íntimo, contemporáneo y cercano donde cada persona pueda sentirse cómoda siendo ella misma.

Imagen:

Interior del estudio.

---

# 14 · GALERÍA

Galería editorial asimétrica.

Ejemplo:

```text
┌──────────────────┬───────────┐
│                  │           │
│                  │   IMG     │
│      IMG         │           │
│                  ├───────────┤
│                  │           │
├───────────┬──────┤   IMG     │
│   IMG     │ IMG  │           │
└───────────┴──────┴───────────┘
```

Animaciones muy suaves.

Nada de sliders innecesarios.

---

# 15 · CTA WHATSAPP

Sección completa.

Fondo oscuro.

Título:

> **¿Nos vemos en Lumen?**

Texto:

> Cuéntanos qué necesitas y te ayudamos a encontrar el tratamiento perfecto para ti.

Botón:

```text
HABLAR POR WHATSAPP
```

Microcopy:

```text
Respondemos personalmente.
```

---

# 16 · FAQ

### ¿Necesito reservar con antelación?

Sí. Recomendamos reservar previamente para garantizar disponibilidad.

### ¿Puedo combinar varios servicios?

Sí. Podemos ayudarte a crear una combinación adaptada a tus necesidades.

### ¿Trabajáis con productos profesionales?

Sí. Seleccionamos productos profesionales adecuados para cada servicio.

### ¿Dónde está Estudio Lumen?

Valencia.

> Dirección conceptual para esta demo. No utilizar como ubicación comercial real.

---

# 17 · FOOTER

```text
LUMEN
ESTUDIO DE BELLEZA

Belleza que se siente.

Valencia · España

Instagram
WhatsApp
Contacto

Servicios
Resultados
Estudio
Preguntas frecuentes
```

Footer inferior:

```text
© 2026 Estudio Lumen

Proyecto conceptual
Diseñado y desarrollado por CAT CODE
```

---

# 18 · BADGE DE DEMO

Durante desarrollo:

```text
PROYECTO DEMO
```

No debe parecer parte de la marca.

Puede colocarse discretamente abajo a la izquierda.

En producción:

```text
DEMO_MODE = false
```

y desaparece.

---

# 19 · COMPONENTES

OpenCode debe crear componentes reutilizables.

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── not-found.tsx
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── AnnouncementBar.tsx
│   │
│   ├── hero/
│   │   └── Hero.tsx
│   │
│   ├── services/
│   │   ├── Services.tsx
│   │   └── ServiceCard.tsx
│   │
│   ├── portfolio/
│   │   ├── Results.tsx
│   │   ├── ResultCard.tsx
│   │   └── Lightbox.tsx
│   │
│   ├── instagram/
│   │   ├── InstagramFeed.tsx
│   │   └── InstagramPost.tsx
│   │
│   ├── gallery/
│   │   └── Gallery.tsx
│   │
│   ├── sections/
│   │   ├── Intro.tsx
│   │   ├── Philosophy.tsx
│   │   ├── Experience.tsx
│   │   ├── About.tsx
│   │   ├── CTA.tsx
│   │   └── FAQ.tsx
│   │
│   └── ui/
│       ├── Button.tsx
│       ├── Badge.tsx
│       ├── Container.tsx
│       └── SectionHeading.tsx
│
├── data/
│   ├── services.ts
│   ├── results.ts
│   ├── instagram.ts
│   ├── gallery.ts
│   └── faq.ts
│
├── lib/
│   ├── constants.ts
│   └── utils.ts
│
└── types/
    └── index.ts
```

---

# 20 · STACK

Para esta demo recomiendo:

```text
Next.js
TypeScript
Tailwind CSS
Lucide React
Framer Motion
```

Configuración:

```text
Next.js App Router
Strict TypeScript
ESLint
Responsive
Mobile First
SEO
Accessibility
```

---

# 21 · MODELO DE DATOS

No colocar contenido directamente dentro de los componentes.

Por ejemplo:

```ts
export const services = [
  {
    id: "facial",
    title: "Cuidado facial",
    description:
      "Tratamientos personalizados para cuidar y potenciar tu piel.",
    category: "skin",
    image: "/images/services/facial.jpg",
  },
];
```

Instagram:

```ts
export const instagramPosts = [
  {
    id: "01",
    image: "/images/instagram/post-01.jpg",
    category: "nails",
    label: "NAILS",
    alt: "Manicura realizada en Estudio Lumen",
  },
];
```

Esto permite posteriormente conectar:

```text
Instagram API
CMS
Base de datos
Panel de administración
```

sin reconstruir la web.

---

# 22 · ESTRUCTURA DE IMÁGENES

```text
public/
└── images/
    ├── hero/
    │   └── lumen-hero.jpg
    │
    ├── services/
    │   ├── facial.jpg
    │   ├── hair.jpg
    │   ├── nails.jpg
    │   └── brows.jpg
    │
    ├── results/
    │   ├── result-01.jpg
    │   ├── result-02.jpg
    │   ├── result-03.jpg
    │   ├── result-04.jpg
    │   ├── result-05.jpg
    │   └── result-06.jpg
    │
    ├── instagram/
    │   ├── post-01.jpg
    │   ├── post-02.jpg
    │   ├── post-03.jpg
    │   ├── post-04.jpg
    │   ├── post-05.jpg
    │   └── post-06.jpg
    │
    ├── studio/
    │   ├── interior-01.jpg
    │   ├── interior-02.jpg
    │   └── interior-03.jpg
    │
    └── og/
        └── og-image.jpg
```

---

# 23 · UX MOBILE

La versión móvil debe ser excelente.

Orden:

```text
LOGO
MENU
HERO
CTA
INTRO
SERVICIOS
TRABAJO
INSTAGRAM
EXPERIENCIA
ESTUDIO
GALERÍA
FAQ
WHATSAPP
FOOTER
```

Botón flotante:

```text
WhatsApp
```

Debe permanecer accesible mientras se navega.

---

# 24 · ANIMACIONES

Utilizar animaciones discretas.

### Entrada

```text
opacity 0 → 1
translateY 20px → 0
```

### Imágenes

```text
scale 1 → 1.03
```

en hover.

### Cards

Elevación mínima.

### Evitar

```text
parallax excesivo
zoom agresivo
textos girando
animaciones continuas
efectos de plantilla
```

La sensación debe ser:

> **Premium, tranquila y editorial.**

---

# 25 · SEO

Title:

```text
Estudio Lumen | Estudio de Belleza en Valencia
```

Description:

```text
Estudio Lumen es un espacio de belleza contemporáneo en Valencia.
Descubre nuestros tratamientos, trabajos y experiencia.
```

Open Graph:

```text
Estudio Lumen — Belleza que se siente.
```

Schema:

```text
BeautySalon
```

Pero al ser una demo, **no inventar dirección, teléfono, horarios ni coordenadas reales**.

---

# 26 · PERFORMANCE

OpenCode debe implementar:

```text
next/image
lazy loading
responsive images
WebP/AVIF cuando corresponda
font optimization
minimal JavaScript
componentes server cuando sea posible
```

Objetivo:

```text
LCP < 2.5s
CLS < 0.1
INP < 200ms
```

---

# 27 · REGLAS DEL PROYECTO

Muy importante para CAT CODE:

### NO inventar:

```text
❌ clientes reales
❌ testimonios reales
❌ premios
❌ estadísticas
❌ seguidores
❌ resultados comerciales
❌ reseñas
❌ direcciones reales
❌ teléfonos reales
❌ certificaciones
```

Todo debe ser claramente conceptual.

Cuando se utilice texto de demostración:

```text
Contenido conceptual para demostración.
```

---

# 28 · QUÉ DEMUESTRA ESTA DEMO A UN CLIENTE

Esta demo debe permitirle a CAT CODE mostrar:

### SOCIAL

```text
✓ Identidad visual
✓ Landing profesional
✓ Galería de trabajos
✓ Feed social
✓ Contenido visual
✓ Instagram integrado conceptualmente
✓ CTA WhatsApp
✓ Servicios
✓ Mobile
✓ SEO
```

Y comercialmente transmite:

> **“No solamente publicamos en Instagram. Construimos el lugar donde todo ese contenido convierte.”**

Ese es precisamente el valor que debería demostrar el paquete **SOCIAL**.

---

# 29 · PROMPT MAESTRO PARA OPENCODE

Copia y pega esto directamente:

```text
# OPENCODE MASTER PROMPT
# ESTUDIO LUMEN — CAT CODE PORTFOLIO DEMO

Actúa como:

- Senior Product Designer
- Senior UX/UI Designer
- Senior Frontend Engineer
- Next.js Architect
- TypeScript Engineer
- Accessibility Specialist
- SEO Specialist
- Performance Engineer
- QA Engineer

Debes construir una landing page completa, profesional y lista para portfolio para CAT CODE.

==================================================
PROYECTO
==================================================

Nombre:
ESTUDIO LUMEN

Categoría:
Belleza / Estética

Ciudad conceptual:
Valencia, España

Paquete CAT CODE:
SOCIAL

Tipo:
Portfolio Demo

Objetivo:

Crear una landing page de un estudio de belleza contemporáneo que demuestre cómo CAT CODE puede combinar:

- Landing profesional
- Contenido visual
- Portfolio de trabajos
- Integración conceptual con Instagram
- Servicios
- CTA WhatsApp
- Experiencia mobile
- SEO
- Diseño premium

La web debe parecer un negocio REAL y profesional.

PERO:

Es un proyecto conceptual.

No inventes:

- clientes reales
- testimonios
- premios
- estadísticas
- seguidores
- resultados
- reseñas
- certificaciones
- dirección real
- teléfono real
- coordenadas reales

Si necesitas información inexistente, utiliza contenido conceptual claramente marcado.

==================================================
STACK
==================================================

Utilizar:

Next.js
TypeScript
App Router
Tailwind CSS
Lucide React
Framer Motion

Strict TypeScript.

ESLint.

Componentes reutilizables.

Mobile first.

==================================================
DIRECCIÓN VISUAL
==================================================

Estética:

- editorial
- beauty
- premium
- minimal
- femenina moderna
- mediterránea contemporánea
- elegante
- cálida
- profesional

NO utilizar:

- rosa cliché
- exceso de flores
- estética spa genérica
- diseño recargado
- gradients exagerados
- sombras excesivas
- animaciones innecesarias
- aspecto de template

Debe parecer una marca real.

==================================================
COLORES
==================================================

CREAM:
#F8F5F0

CHARCOAL:
#171717

SOFT TAUPE:
#D8CEC4

SAND:
#E8DED4

ROSE:
#CFAFA7

WHITE:
#FFFFFF

==================================================
TIPOGRAFÍA
==================================================

Headings:

DM Serif Display

Body:

Inter

==================================================
ESTRUCTURA
==================================================

Crear:

```text
01. AnnouncementBar          ← CROMO
02. Header                   ← CROMO
03. Hero                                § 1  (CTA WhatsApp, :131)
04. Intro + 10. About Studio  →         § 2  (fusionadas)
05. Services                           § 3
09. Experience                         § 4  (reescrita: garantía, no estrellas)
NUEVA · Ubicación                      § 5
06. Featured Service                   § 6  (sección ampliada)
07. Results + 11. Gallery  →           § 7  (galería, fusionadas)
13. FAQ                                § 8
14. Footer                             ← CROMO (SIN aviso legal en Pro)

═══════════════════════════════════════
── CAPA FULL, ENCIMA DE LA LANDING ──
[CALENDARIO EDITORIAL · WEEKLY]        ← NUEVO, no existía
[REJILLA DE INSTAGRAM · SOCIAL]        ← era el bloque 8. Instagram Feed
```

**La landing cuenta 8 secciones de contenido: §1 Hero · §2 Sobre nosotros · §3 Servicios · §4 Confianza · §5 Ubicación · §6 Sección ampliada · §7 Galería · §8 FAQ.** Las capas de WEEKLY y SOCIAL se suman **encima**, y son lo que hace que esta sea la demo de FULL y no un Pro más.

### Qué se movió y por qué

| Bloque original | Ahora | Por qué |
|---|---|---|
| `8. Instagram Feed` | **Capa SOCIAL** | No es una sección de landing: es contenido recurrente, que es exactamente lo que distingue al paquete FULL |
| `12. WhatsApp CTA` | **Fusionado en el hero** | El catálogo dice "Hero con CTA de WhatsApp", no una sección aparte |
| — | **NUEVO: Ubicación** | Basic ya la exige (`PRECIOS.md:35`) y el brief no la tenía |
| — | **NUEVO: calendario editorial** | Es la capa WEEKLY, la que faltaba por completo |

### 🛑 Conflicto con el Brief Backend que hay que resolver

Este brief ya resolvió su CTA a **WhatsApp**: la barra de anuncio dice *"NUEVA TEMPORADA · RESERVA TU CITA POR WHATSAPP →"* (`:143`) y existe la sección `# 15 · CTA WHATSAPP` (`:523`), con su botón *"HABLAR POR WHATSAPP"* en `:540`.

Pero `PORTFOLIO_BRIEF_BACKEND.md:190-204` (§4.2) sigue definiendo el contrato `CitaEstudioLumen` con origen *"RESERVAR CITA del hero/CTA"*, y `PORTFOLIO_BRIEF_FRONTEND.md:138, :203` sigue tratando el formulario de cita como el camino principal.

**Gana WhatsApp.** El CTA es un botón de WhatsApp. El payload `CitaEstudioLumen` pasa a ser **la demostración del formulario del extra**, en posición secundaria y con su badge. Ver `# 44`.

==================================================
HERO
==================================================

Headline:

"Belleza que se siente."

Subheadline:

"Tratamientos, cuidado y belleza pensados para ti."

CTA principal:

"RESERVAR CITA"

CTA secundario:

"VER INSTAGRAM"

Microcopy:

"Valencia · Estudio de belleza contemporáneo"

Hero visual:

Modelo femenina adulta en un estudio de belleza contemporáneo.

Fotografía editorial realista.

==================================================
INTRO
==================================================

Title:

"Tu momento empieza aquí."

Texto:

"En Lumen creemos que cuidarte no debería sentirse como una obligación, sino como un momento para ti."

Crear tres bloques:

Cuidado personalizado
Productos seleccionados
Experiencia Lumen

==================================================
SERVICIOS
==================================================

Crear:

Cuidado facial
Pelo
Manicura
Cejas & Mirada

Cada servicio debe tener:

- imagen
- título
- descripción
- CTA

==================================================
RESULTADOS
==================================================

Crear una galería filtrable:

TODOS
PELO
UÑAS
PIEL
MIRADA

Grid editorial.

Cada elemento debe tener:

- imagen
- categoría
- alt text
- lightbox

==================================================
INSTAGRAM
==================================================

Crear un feed visual de 6 publicaciones.

No conectar Instagram real.

Utilizar datos locales.

Cada post:

- imagen
- categoría
- etiqueta
- alt text

CTA:

"SEGUIR EN INSTAGRAM"

Preparar arquitectura para poder sustituir posteriormente el mock por Instagram API/CMS.

==================================================
EXPERIENCIA
==================================================

Crear tres pasos:

01 ESCUCHAMOS
02 CREAMOS
03 CUIDAMOS

Diseño editorial.

==================================================
ABOUT
==================================================

Title:

"Un espacio para volver a ti."

Texto:

"Lumen nace de una idea sencilla: crear un espacio donde belleza, cuidado y tranquilidad convivan."

Usar imagen del interior.

==================================================
GALERÍA
==================================================

Crear galería editorial asimétrica.

Debe funcionar perfectamente en:

- desktop
- tablet
- mobile

Agregar lightbox.

==================================================
CTA
==================================================

Fondo oscuro.

Title:

"¿Nos vemos en Lumen?"

Texto:

"Cuéntanos qué necesitas y te ayudamos a encontrar el tratamiento perfecto para ti."

CTA:

"HABLAR POR WHATSAPP"

==================================================
FAQ
==================================================

Crear:

¿Necesito reservar con antelación?

¿Puedo combinar varios servicios?

¿Trabajáis con productos profesionales?

¿Dónde está Estudio Lumen?

Las respuestas deben dejar claro que es una demo cuando corresponda.

==================================================
FOOTER
==================================================

Mostrar:

LUMEN
ESTUDIO DE BELLEZA

Belleza que se siente.

Valencia · España

Instagram
WhatsApp
Contacto

Servicios
Resultados
Estudio
FAQ

Copyright.

Mostrar discretamente:

"Proyecto conceptual · Diseñado y desarrollado por CAT CODE"

==================================================
DATA ARCHITECTURE
==================================================

No hardcodear contenido dentro de los componentes.

Crear:

src/data/services.ts
src/data/results.ts
src/data/instagram.ts
src/data/gallery.ts
src/data/faq.ts

Los componentes deben consumir estos datos.

==================================================
RESPONSIVE
==================================================

Mobile first.

Breakpoints adecuados.

La experiencia mobile debe sentirse diseñada específicamente para móvil.

No simplemente reducir el desktop.

==================================================
ACCESSIBILITY
==================================================

Implementar:

semantic HTML
ARIA cuando sea necesario
keyboard navigation
focus states
alt text
contraste adecuado
reduced motion

==================================================
SEO
==================================================

Implementar:

metadata
title
description
Open Graph
favicon
robots
sitemap

Title:

"Estudio Lumen | Estudio de Belleza en Valencia"

Description:

"Estudio Lumen es un espacio de belleza contemporáneo en Valencia. Descubre nuestros tratamientos, trabajos y experiencia."

==================================================
PERFORMANCE
==================================================

Utilizar:

next/image
lazy loading
responsive images
optimized fonts
minimal client components

Evitar JavaScript innecesario.

==================================================
ANIMATIONS
==================================================

Utilizar Framer Motion únicamente cuando aporte valor.

Animaciones:

fade
slide
micro scale

Duración corta.

Respetar prefers-reduced-motion.

==================================================
WHATSAPP
==================================================

Crear CTA preparado para:

WhatsApp

Pero NO utilizar un número real.

Usar configuración:

NEXT_PUBLIC_WHATSAPP_NUMBER

Si está vacío:

mostrar estado demo.

==================================================
DEMO MODE
==================================================

Crear:

NEXT_PUBLIC_DEMO_MODE=true

Cuando true:

mostrar discretamente:

"PROYECTO DEMO"

No debe romper la estética.

==================================================
IMAGES
==================================================

Utilizar rutas locales:

/images/hero/
/images/services/
/images/results/
/images/instagram/
/images/studio/
/images/og/

No depender de imágenes remotas.

==================================================
QUALITY
==================================================

Antes de finalizar:

- ejecutar lint
- ejecutar typecheck
- ejecutar build
- comprobar responsive
- comprobar navegación
- comprobar botones
- comprobar lightbox
- comprobar FAQ
- comprobar menú mobile
- comprobar imágenes
- comprobar SEO
- comprobar accesibilidad

No dejar errores TypeScript.

No dejar componentes sin utilizar.

No dejar imports muertos.

==================================================
CRITICAL RULE
==================================================

NO crear una simple plantilla.

Crear una experiencia completa de portfolio.

El resultado debe poder mostrarse a un cliente real como ejemplo de lo que CAT CODE puede construir.

La web debe sentirse:

premium
moderna
real
editorial
cálida
profesional
visual

NO debe sentirse:

genérica
artificial
barata
sobrecargada
como template.

Construye el proyecto completo.
```

---

# 30 · RESULTADO ESPERADO EN EL PORTFOLIO CAT CODE

La ficha final podría aparecer así:

### 💇 Estudio Lumen

**Belleza / Estética · Valencia**

**Paquete:** SOCIAL

> Presencia digital para un estudio de belleza con landing, portfolio visual, contenido e integración conceptual con redes sociales.

**Incluye:**

```text
✓ Landing
✓ Diseño visual
✓ Servicios
✓ Galería de trabajos
✓ Feed social
✓ Instagram
✓ WhatsApp
✓ Mobile
✓ SEO
```

**CTA del portfolio:**

```text
VER PROYECTO →
```

Y la demostración debe dejar muy claro el concepto de CAT CODE:

> **Contenido que atrae. Una web que convierte.**

---

# 44 · NIVEL COMERCIAL FULL (2026-09-30)

> Sección añadida después de redactar el brief. **No reescribe el copy de arriba:** lo reordena en tres capas. Fuente canónica: `UNIFICADO/09_PORTFOLIO/DEMOS/MAPEOS_Y_NIVELES.md` §7.
>
> **FULL = CUSTOM Pro + WEEKLY Pro + SOCIAL Pro** (`PRECIOS.md` §5). **199 €/mes con setup incluido. Es la única demo con precio de suscripción y es la que el catálogo recomienda.**

## ⚠️ Esto es la demo más cara de las cuatro

Requiere tres bloques de trabajo que las otras demos no tienen:

| Capa | Qué hay que construir | Estado en el brief |
|---|---|---|
| **Landing Pro** | 8 secciones | ✅ Hay copy para casi todas. Falta Ubicación |
| **Calendario editorial WEEKLY** | 5 piezas/semana, ordenadas por fecha | ❌ **No existe. Hay que escribirlo entero** |
| **Rejilla SOCIAL** | Feed de Instagram gestionado | ✅ Ya está: era el bloque `8. Instagram Feed` |

**El calendario editorial es el trabajo nuevo de verdad.** Antes esta demo era "una landing bonita con Instagram"; ahora tiene que demostrar **que CAT CODE produce contenido de forma sostenida**, que es lo que el cliente del paquete FULL está pagando.

## 1 · La landing, en grado Pro (8)

| # | Sección | De dónde sale |
|---|---|---|
| 1 | **Hero** con CTA de WhatsApp | `3. Hero` — CTA *"Reserva tu cita por WhatsApp"* (`:143`) |
| 2 | **Sobre nosotros** | `4. Intro` + `10. About Studio` **fusionadas** |
| 3 | **Servicios** | `5. Services` — Cuidado facial · Pelo · Manicura · Cejas & Mirada |
| 4 | **Confianza** | `9. Experience` **reescrita**: garantía y proceso, no estrellas |
| 5 | **Ubicación** | **NUEVA** — Valencia, dirección, horario, teléfono, mapa |
| 6 | **Sección ampliada** | `6. Featured Service` |
| 7 | **Galería** | `7. Results` + `11. Gallery` **fusionadas** |
| 8 | **FAQ** | `13. FAQ` |

**Cromo:** `1. AnnouncementBar` · `2. Header` · `14. Footer` (sin aviso legal — eso es de Premium).

## 2 · Capa WEEKLY — calendario editorial

**Contenido recurrente, no secciones de la landing.** Se demuestra como un calendario con piezas ya producidas y fechadas.

Formato de cada pieza: **fecha · red · formato · copy · imagen**.

| Semana | Piezas | Qué demuestra |
|---|---|---|
| S1 | 5 piezas | Lanzamiento: el estudio y su forma de trabajar |
| S2 | 5 piezas | Servicios: un tratamiento por pieza, con su duración y su precio |
| S3 | 5 piezas | El proceso: qué pasa cuando entras, en qué orden |
| S4 | 5 piezas | Confianza: garantía, condiciones, casos resueltos |
| S5 | 5 piezas | Objection: las dudas que salen antes de la primera cita |

**Reparto por red y formato:**

| Red | Piezas | Formatos |
|---|---|---|
| Instagram | 2/semana | Reel corto + carrusel |
| Stories | 2/semana | Daily de proceso + recordatorio |
| Post fijo | 1/semana | Imagen con texto |

**Reglas del calendario:**
- **Todo lleva fecha real en la demo.** Un calendario sin fechas parece una plantilla.
- **El copy es escribible tal cual**, sin huecos: *"colocar aquí"*.
- **Nunca datos inventados de cliente** — nada de "450 clientas" ni ★★★★★.
- **La rejilla que se ve en la landing sale de este calendario.** No son dos cosas distintas.

## 3 · Capa SOCIAL — rejilla de Instagram

Era el bloque `8. Instagram Feed`. **Deja de ser una sección de la landing y pasa a ser la demostración de la capa SOCIAL.**

- Rejilla de **9 a 12 piezas** con pie de foto.
- En móvil, las piezas llevan a un **enlace externo**, no a otra foto.
- **Sin API de Instagram.** Datos estáticos del demo, que es lo que permite `PORTFOLIO_BRIEF_BACKEND.md:42` (§1.2, fuera de alcance: API Instagram).
- Mismo criterio que el calendario: **cero prueba social inventada.**

## 4 · El formulario de cita: el EXTRA, y por detrás de WhatsApp

### 🛑 Por qué aquí el conflicto es serio

`PORTFOLIO_BRIEF_BACKEND.md:190-204` (§4.2) define `CitaEstudioLumen` con origen *"RESERVAR CITA del hero/CTA"*, y el frontend `:136, :160` lo trata como el camino principal de conversión. **Pero este brief ya resolvió el CTA a WhatsApp** (`:143`, `:161`, `:192`, `:209`).

**Gana WhatsApp.** El CTA es un botón de WhatsApp: se escribe, llega y se agenda ahí mismo. El payload queda como **la demostración del formulario del extra**, en posición secundaria.

Si no se corrige, la demo se contradice a sí misma: el hero promete una cosa y el formulario es la puerta de entrada real.

| # | Dónde | Qué pone |
|---|---|---|
| 1 | **Badge visible** sobre el título | `EXTRA · a presupuestar` |
| 2 | **Texto visible dentro** | `Demostración. Este formulario no envía nada a ningún sitio ni comprueba disponibilidad.` |
| 3 | **Tooltip ℹ** | el bloque largo de abajo |

**Tooltip corto** (`title=` del icono):

> No viene incluido en tu nivel: el contacto es WhatsApp. Pídenoslo como extra.

**Tooltip largo** (popover):

> **El formulario no va incluido en este nivel.**
> El contacto de esta landing es un botón de WhatsApp: te escriben y agendas ahí mismo, sin esperas. Un formulario te obligaría a redactar tu propia política de privacidad y la de cookies, y a mantenerlas al día cada vez que cambies algo.
> Si lo quieres, es un extra: tú nos das el texto legal redactado y nosotros lo montamos. Esto es una demo de cómo se vería.

**El formulario es interactivo**, con los estados `idle → loading → success`. Un formulario bloqueado se lee como un extra a medio hacer. **La honestidad la pone el aviso, no el bloqueo.**

## 5 · Badge de demo — en las tres capas

**Esta demo necesita el badge en tres sitios**, porque es la única con contenido recurrente:

| Capa | Dónde va el badge |
|---|---|
| Landing | Hero + footer |
| Calendario editorial | En la propia pieza, como pie de foto |
| Rejilla de Instagram | En el pie de la pieza |

> Un calendario sin marcar se lee como contenido real de una empresa real. Con contenido recurrente el badge importa el doble.

## 6 · Confianza sin prueba social

`7. Results` y `9. Experience` son las dos secciones con más riesgo de invención. Se reescriben según `MAPEOS_Y_NIVELES.md` §3 (`00_LEEME_GLOBAL.md:108` (regla 5 — ahora tres categorías)).

| En lugar de | Se enseña |
|---|---|
| ★★★★★ · "4,9 sobre Google" | **La garantía escrita**: qué pasa si el resultado no te convence y quién responde |
| "450 clientas" | **El proceso**: qué te hacen, en qué orden, cuánto dura |
| "El estudio más valorado de la zona" | **Años de actividad** — un dato, no una promesa |

**Ojo con `7. Results`:** el nombre de la sección es peligroso porque invita a poner cifras. **Puede enseñar trabajos** —el trabajo a la vista sí vale, es contenido de la demo— **pero nunca cuántos clientes hay ni qué nota tienen.**

## 7 · Footer — panel de nivel

```text
PAQUETE FULL · 199 €/mes · setup incluido · RECOMENDADO

Incluye: landing CUSTOM Pro completa (8 secciones) ·
        calendario editorial WEEKLY con 5 piezas por semana ·
        gestión de redes SOCIAL con rejilla de Instagram ·
        hosting · responsive · SEO básico

El único nivel con setup incluido: pagas una vez el mes, sin obras.

¿Ver el escalón de landing por separado? → Ruta Norte (Custom Premium)
¿Ver el escalón de entrada? → Taller Recambios (Custom Basic)
```

**El footer NO lleva aviso legal.** Es de Premium (`PRECIOS.md:37`), y además **lo pone el cliente, no CAT CODE**: es su NIF y su domicilio, no copy nuestro.

## 8 · Checklist

- [ ] Badge "proyecto conceptual" en landing, calendario y rejilla
- [ ] Landing con 8 secciones, ni una más
- [ ] Ubicación nueva escrita
- [ ] `12. WhatsApp CTA` fusionado en el hero
- [ ] `7. Results` y `11. Gallery` fusionadas
- [ ] **Calendario editorial de 5 semanas × 5 piezas, con fechas reales y copy escrito**
- [ ] La rejilla sale del calendario, no es un bloque aparte
- [ ] Formulario de cita **detrás** de WhatsApp, con badge + aviso + tooltip
- [ ] Sin prueba social en ninguna sección
- [ ] Panel de nivel con 199 €/mes y setup incluido
- [ ] Enlace a los tres niveles del portfolio

---

> **Este archivo es canónico** (decisión del CEO, 2026-09-30). Origen histórico con la misma referencia: `Proyectos/Portafolio/DEMO04_ESTUDIO_LUMEN_PROYECTO_COMPLETO.md` — **no editar ahí.**
