# FRONTEND — LEEME PRIMERO

> **⚠️ Stack histórico (Next.js/React).** El estándar actual de las landings de cliente es **Astro + Tailwind CSS en Vercel** (decisión del 2026-09-27, `Cambios Listos para Actualizar/04_STACK_ASTRO_Y_DEMO.md`). Este documento se conserva como registro del stack con el que se concibió el demo: **no se reescribe todavía**. El demo nuevo en Astro se construirá aparte.

**Rol**: construir las 4 demos funcionales con un sistema compartido de diseño y componentes.

---

## Archivos en esta carpeta

| Archivo | Para qué sirve |
|---------|---------------|
| `PORTFOLIO_BRIEF_FRONTEND.md` | Tu brief completo: stack, sistema vs proyectos, configuración, entregables |
| `PORTFOLIO_BRIEF_BACKEND.md` | Contrato de integración: `createWhatsAppUrl()`, form states, config types |
| `CAT_CODE_DEMO_SYSTEM_v1.0.md` | Reglas canónicas: §17 SEO, §18 Accessibility, §19 Responsive, §20 Animation, §21 Form System, §22 Demo Data Rule |
| `IDENTIDAD_VISUAL_DE_CADA_DEMO.md` | Paleta, tipografía, identidad visual por proyecto + checklist de producción |
| `DEMO02_CASA_NORA_LANDING.md` | Contenido completo: secciones, textos, dishes, carta, FAQ, diseño, SEO · **CUSTOM Pro ★ MÁS ELEGIDO** |
| `DEMO04_ESTUDIO_LUMEN_PROYECTO_COMPLETO.md` | Contenido completo: servicios, Instagram, feed, identidad visual · **FULL** |
| `DEMO03_RUTA_NORTE_PROYECTO_COMPLETO.md` | Contenido completo: experiencias, destinos, journal, SEO, rutas · **CUSTOM Premium** |
| `DEMO01_TALLER_RECAMBIOS_LANDING.md` | Contenido completo del escalón de entrada: 5 secciones, precios publicados, garantía + §12 identidad visual (paleta y tipografía) · **CUSTOM Basic** (añadido 2026-09-30) |

> **Una demo por nivel.** El reparto vigente y qué secciones se quitan o se añaden en cada salto está en `UNIFICADO/09_PORTFOLIO/DEMOS/MAPEOS_Y_NIVELES.md` — **ese documento manda** sobre cualquier lista de demos de este vault.

---

## Orden de lectura (desde el min 0)

1. **Brief Frontend** — entiende arquitectura `sistema/` vs `proyectos/`, configuración, componentes reutilizables
2. **Brief Backend §3** — entiende qué espera de ti (WhatsApp, form states, config)
3. **Identidad visual** — paleta y tipografía por proyecto (secciones 1-5)
4. **DEMO SYSTEM §4** — stack: Next.js, TypeScript, Tailwind, Framer Motion, Lucide
5. **DEMO SYSTEM §17-§22** — SEO, A11y, Responsive, Animation, Forms, Demo Data Rule
6. **TALLER RECAMBIOS** → **CASA NORA** → **RUTA NORTE** → **ESTUDIO LUMEN** — contenido de cada demo, **de menor a mayor precio** (Basic → Pro → Premium → FULL)

---

## Qué construyes

### `sistema/` (reutilizable, sin marca de contenido)
- Layout, Header, Footer, Navigation
- Hero, Cards, CTA, FAQ, Gallery, Social Feed
- WhatsApp CTA, Form System, Image System
- Design tokens (colores, tipografía, espaciado)
- Componentes: `WhatsAppButton`, `ReservationForm`, `SocialGrid`, `FAQAccordion`

### `proyectos/` (contenido por demo)
- Cada proyecto tiene: `project.config.ts` (slug, nombre, tipo, tagline, whatsapp)
- `taller-recambios/` → **CUSTOM Basic · 5 secciones**: hero con WhatsApp, sobre nosotros, servicios, confianza, ubicación. Es el **escalón de entrada** y el más barato de construir.
- `casa-nora/` → **CUSTOM Pro · 8 secciones ★ MÁS ELEGIDO**: lo del Basic + sección ampliada, beneficios, galería, testimonios (demostrados con proceso y garantía, sin cifras), FAQ
- `ruta-norte/` → **CUSTOM Premium · 11 secciones**: lo del Pro + blog de 3 entradas, casos de éxito y footer con aviso legal
- `estudio-lumen/` → **FULL**: landing Pro + calendario editorial WEEKLY + capa SOCIAL. Es la única con suscripción.

---

## Qué NO haces

- ~~Backend server~~
- ~~Instagram API~~
- ~~WhatsApp real~~
- ~~Datos inventados de prueba social~~
- ~~Imágenes en texto~~ (las imágenes vienen de Social Media)

---

## Reglas demo

- WhatsApp: solo `createWhatsAppUrl()` — nunca links directos a wa.me
- Formularios: `idle → loading → success/error` — mostrar "Demo — formulario de ejemplo"
- Datos: marcar todo "Proyecto conceptual"
- Badge demo visible
- Imágenes: usar placeholders hasta que Social Media entregue las generadas
- Las 4 demos deben parecer un mismo sistema (mismos componentes base, diferente contenido)

---

## Coordinación

- **Imágenes de Social Media**: se reciben en `/public/images/<proyecto>/` como WebP. Mientras tanto usa placeholders.
- **Contrato de Backend**: consume `createWhatsAppUrl()` de `sistema/integrations/`. No hardcodear wa.me.
