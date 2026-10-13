# PORTFOLIO — BRIEF FRONTEND

> **⚠️ Stack histórico (Next.js/React).** El estándar actual de las landings de cliente es **Astro + Tailwind CSS en Vercel** (decisión del 2026-09-27, `Cambios Listos para Actualizar/04_STACK_ASTRO_Y_DEMO.md`). Este documento se conserva como registro del stack con el que se concibieron las demos: **no se reescribe todavía**. El demo nuevo en Astro se construirá aparte.

> Ruta: `Proyectos/Portafolio`
> Alcance: 4 demos del portafolio de CAT CODE.
> Rol objetivo: Frontend.
> Estado: borrador para entregar a desarrollo.

---

## 0. REGLA INVIOLABLE DE LAS DEMOS

Los 4 proyectos son **conceptuales / placeholder** del portafolio de CAT CODE:

- NO inventar clientes, reservas, citas, reseñas, estadísticas, premios ni testimonios reales.
- Todo dato mostrado es demo y debe marcarse como "Proyecto conceptual".
- Las imágenes son locales (nunca URLs externas) y sin texto/logos superpuestos (los overlays los pone el frontend).

---

## 1. ARQUITECTURA: SISTEMA vs PROYECTO

Referencia canónica: `CAT_CODE_DEMO_SYSTEM_v1.0`.

Separar TODO en dos capas. El código del **SISTEMA** no contiene contenido de ninguna marca; el **PROYECTO** es un paquete de configuración + contenido.

```
portafolio/
├── sistema/                  # reutilizable, sin contenido de marca
│   ├── components/           # UI base (ver §3)
│   ├── tokens/               # design tokens genéricos
│   ├── presets/              # animaciones + SEO + imágenes
│   └── lib/                  # utilidades (createWhatsAppUrl, estados)
└── proyectos/
    ├── casa-nora/            # CUSTOM (landing)
    ├── estudio-lumen/        # SOCIAL (landing + feed)
    └── ruta-norte/           # FULL (landing + contenido + publicación/admin)
```

### Archivos de configuración por proyecto

Cada proyecto expone 4 archivos que el SISTEMA consume; el componente UI nunca conoce la marca:

```ts
// project.config.ts
{
  slug: 'casa-nora',
  nombre: 'Casa Nora',
  tipo: 'CUSTOM' | 'SOCIAL' | 'FULL',
  tagline: 'Cocina mediterránea. Momentos que se recuerdan.',
  whatsapp: { numero: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '', ... },
  demoMode: process.env.NEXT_PUBLIC_DEMO_MODE === 'true',
  paqueteSecciones: [...],
  paginasInternas: [...],   // Ruta Norte: /experiencias, /destinos, /inspiracion, ...
}

// theme.ts        → tokens del proyecto (paleta, tipografías, radios, sombras)
// content.ts      → textos, servicios, destinos, FAQ, footer
// images.ts       → mapa de imágenes locales (hero, servicios, og, ...)
```

---

## 2. DISEÑO: DISEÑO > COMPONENTES GENÉRICOS

- Preferir **design tokens por proyecto** (tema claro/oscuro no obligatorio): paleta, tipografías, radios, sombras, espaciados → consumidos por los componentes.
- Design tokens y estilos generales: consultar `IDENTIDAD_VISUAL_DE_CADA_DEMO.md` (checklist de producción: paleta, tipografías, botones, iconografía, espaciados, hover/focus/active, desktop+tablet+móvil).
- 3 identidades distintas que NO deben parecer una plantilla en serie:
  - **Casa Nora** — CUSTOM · restaurante mediterráneo contemporáneo. Landing pulida. Elegancia cálida, editorial de gastronomía.
  - **Estudio Lumen** — SOCIAL · estudio de belleza premium Valencia. Editorial beauty + minimalismo premium.
  - **Ruta Norte** — FULL · turismo/experiencias norte de España. Boutique, cinematográfica, natural. NO parecer agencia de viajes genérica.

---

## 3. COMPONENTES BASE DEL SISTEMA

Sin contenido de marca; reciben props/tokens. Nombres orientativos (se pueden ajustar a convenciones del proyecto):

```
Header / Nav / MobileMenu
Hero
Intro/About
Section (título + contenido)
Cards (servicio / experiencia / destino)
CTA
WhatsAppCTA            → usa createWhatsAppUrl + estado demo
ContactForm            → usa los estados de §6
FAQ (acordeón desplegable)
Gallery / Results
InstagramFeed (mock)   → SOCIAL (Estudio Lumen) y publicación de Ruta Norte
Steps / HowItWorks     → Ruta Norte
TestimoniosConceptuales → SOLO marcados como demo (recomendado evitar)
Footer
```

Requisitos de implementación:

- Mobile-first (menú móvil funcional, scroll suave).
- Estados hover/focus/active visibles en botones, cards y links.
- Animaciones: presets cortos `fade`, `slide`, `scale` — y **respetar `prefers-reduced-motion`**.
- Sin imágenes externas: local en `/public/images/<proyecto>/`.

---

## 4. IMAGE SYSTEM

- Todas las imágenes **locales en `/public/images/<proyecto>/`**, guardadas como **WebP**.
- Usar `next/image` (optimización + `loading="lazy"` donde corresponda; `priority` en hero).
- Sin texto ni logo dentro de las imágenes (los textos/CTAs los coloca el frontend encima).
- Mapa en `images.ts` para referenciar rutas desde un solo lugar.
- Checklist de imágenes por proyecto según `IDENTIDAD_VISUAL_DE_CADA_DEMO.md`: hero, servicios, destacada, artículos/galería, redes, OG, favicon.
- Estrategia de generación/referencias visuales: ver `PORTFOLIO_BRIEF_SOCIAL.md`.

---

## 5. SEO SYSTEM

Referencia: `CAT_CODE_DEMO_SYSTEM_v1.0` §17.

```ts
seo: {
  title: '',
  description: '',
  keywords: [],
  ogImage: '',   // local
}
```

Generar automáticamente: `<title>`, `<meta description>`, OpenGraph, Twitter Card, canonical, robots, sitemap. Cada proyecto (y cada página interna de Ruta Norte) define su propio objeto.

---

## 6. ESTADOS DE LA UI

- **Loader / skeleton**: estados de carga para galerías/feed mock. No bloquear la primera pintura con esperas de red.
- **404 personalizada**: coherente con la identidad de cada proyecto.
- **Formularios** (presupuesto / reserva / cita / contacto): estados `idle → loading → success` (demo) y `error` validado. Ver `PORTFOLIO_BRIEF_BACKEND.md` §4–§5. Exportar los textos de estado desde la configuración, no hardcodeados en el componente.

### 6.1 El formulario es un EXTRA, y hay que etiquetarlo

**Ningún nivel de CUSTOM lo incluye** (`PRECIOS.md:40`). Es el add-on *"Formulario + páginas legales · a presupuestar"*. En las cuatro demos el CTA real es **WhatsApp**; el formulario es la **demostración de cómo se vería ese extra**.

> **Un tooltip solo no vale.** Exige hover, y en móvil no hay hover — y el portfolio se mira en el teléfono. El aviso va en **tres sitios**:

| # | Dónde | Qué pone |
|---|---|---|
| 1 | **Badge visible** sobre el título | `EXTRA · a presupuestar` |
| 2 | **Texto visible dentro** | `Demostración. Este formulario no envía nada a ningún sitio.` |
| 3 | **Tooltip ℹ** (corto en `title=`, largo en popover) | el porqué y la oferta |

**Tooltip corto** (`title=`): *No viene incluido en tu nivel: el contacto es WhatsApp. Pídenoslo como extra.*

**Tooltip largo** (popover):

> **El formulario no va incluido en este nivel.**
> El contacto de esta landing es un botón de WhatsApp: te escriben y agendan ahí mismo, sin esperas. Un formulario te obligaría a redactar tu propia política de privacidad y la de cookies, y a mantenerlas al día cada vez que cambies algo.
> Si lo quieres, es un extra: tú nos das el texto legal redactado y nosotros lo montamos. Esto es una demo de cómo se vería.

**El formulario es interactivo, no bloqueado.** Un formulario bloqueado se lee como un extra a medio hacer, y un add-on a presupuestar no puede parecer a medio hacer. **La honestidad la pone el aviso, no el bloqueo.**

**Excepción — Casa Nora lleva el badge reforzado:** su contrato pide `personas` + `fecha` + `hora`, que aparenta un sistema de reservas con disponibilidad real en un nivel de 249 €. Además del badge, el estado success dice *"esto no comprueba disponibilidad: es una demo"*.

---

## 7. MISMO SISTEMA, CUATRO PROYECTOS

Previsto para que ningún desarrollo de un proyecto rompa a otro. Pautas:

- Los componentes del SISTEMA solo consumen `project.config.ts / theme.ts / content.ts / images.ts`.
- No duplicar estilos entre proyectos (evitar tentación de fork).
- Home/Index del portafolio (si aplica) lista los 4 proyectos sin datos inventados ("Proyecto conceptual · Demo CAT CODE").

### 7.1 El eje del portafolio es una escalera, no una lista

**Cada demo es un escalón de un nivel de CUSTOM, más el paquete.** Se añadieron el 2026-09-30 (antes eran 3, mapeadas por paquete).

| # | Demo | Nivel | Secciones | Setup | Mensual |
|---|---|---|---|---|---|
| 1 | **Taller Recambios** *(nuevo)* | CUSTOM Basic | **5** | 149 € | 19 €/mes |
| 2 | **Casa Nora** | CUSTOM Pro | **8** · ★ MÁS ELEGIDO | 249 € | 29 €/mes |
| 3 | **Ruta Norte** | CUSTOM Premium | **11** | 449 € | 49 €/mes |
| 4 | **Estudio Lumen** | FULL | 8 + calendario + rejilla IG | **incluido** | **199 €/mes** · RECOMENDADO |

Canónico: `UNIFICADO/09_PORTFOLIO/DEMOS/MAPEOS_Y_NIVELES.md`.

**El orden en la home no es el orden del catálogo, es el de la decisión:** empieza por Taller Recambios (el escalón de entrada, que responde "¿esto es caro?") y sube hasta FULL. **Un visitante nuevo no debe empezar por el proyecto más caro.**

**Cada demo lleva en el footer un panel de nivel** —qué es, qué incluye, qué no, y cuánto cuesta el siguiente escalón— **y un enlace al siguiente.** Convierte "falta" en "está explicado y con precio", y convierte el portafolio en un ascenso.

---

## 8. QA / CALIDAD

- Lighthouse objetivo: **90+** en Performance, Accessibility, Best Practices, SEO (desktop y mobile).
- Lighthouse y demás herramientas de auditoría: ver flujos QA del repo (test-agent/validation-engine).
- Checklist final (por proyecto):

  [ ] Design tokens aplicados y sin fugas entre proyectos
  [ ] Menú móvil, scroll suave y navegación completa (FULL)
  [ ] Cards/categorías clicables + página interna de detalle (Ruta Norte)
  [ ] FAQ desplegable funcional
  [ ] Formulario con los 4 estados, textos demo correctos y badge de extra
  [ ] Badge "proyecto conceptual" visible
  [ ] Panel de nivel en el footer + enlace al siguiente escalón
  [ ] Botón WhatsApp con mismo helper y estado demo
  [ ] Imágenes locales en WebP, lazy-load correcto
  [ ] 404 personalizada
  [ ] HTML semántico y foco accesible (WCAG-oriented, ver DEMO SYSTEM §18)
  [ ] Textos con tildes/emojis correctos (UTF-8)

---

## 9. FUERA DE ALCANCE (V1) — POSICIONAMIENTO

- No construir backend, emails, persistence, API Instagram (ver Brief Backend).
- No conectar números de WhatsApp reales.
- ~~**Urban Market (WEEKLY) fuera de alcance** — solo 3 proyectos; no crear estructura para él.~~ **SUPERADO el 2026-09-30.** Ese motivo era "solo 3 proyectos"; ahora hay 4 y **Estudio Lumen es la demo de FULL**, que incluye la capa WEEKLY. **El calendario editorial entra en alcance** como pieza de la demo de FULL: 5 semanas × 5 piezas, con fechas reales y copy escrito, alimentando la rejilla de Instagram. Ver `DEMO04_ESTUDIO_LUMEN_PROYECTO_COMPLETO.md` §44.

---

> **Este archivo es canónico** (decisión del CEO, 2026-09-30). Origen histórico con la misma referencia: `Proyectos/Portafolio/PORTFOLIO_BRIEF_FRONTEND.md` — **no editar ahí.**
