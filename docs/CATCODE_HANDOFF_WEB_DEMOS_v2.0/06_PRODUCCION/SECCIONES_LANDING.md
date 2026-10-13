# SECCIONES DE LANDING — CUSTOM (REFERENCIA)

**Versión:** 2026-09-29 · **La web propia de CAT CODE tiene 11 secciones canónicas** (acordado con el usuario, 2026-09-10). Se adaptan a cada cliente.

> ⚠️ **Este documento describe la WEB PROPIA, no la landing que entregamos a un cliente.** Las 11 secciones incluyen Precios, Cómo funciona y Portfolio propio, que una landing de cliente no tiene. La estructura de una landing de cliente es la de `CAMBIOS/PLANTILLAS_DE_LANDING.md` (5 / 8 / 11 secciones según nivel) y su stack es Astro + Tailwind en Vercel. Reconciliar ambas listas **no está hecho**: queda para cuando exista el demo en Astro. Ver `05_DECISIONES_Y_PENDIENTES.md`.

---

## Las 11 secciones

| # | Sección | Contenido |
|---|---|---|
| 1 | **Navbar** | Logo + menú (Qué hacemos / Cómo funciona / Precios / Ejemplos / FAQ) |
| 2 | **Hero** | H1 + sub + CTA primario. Copy CAT CODE (ver 04_MARCA) |
| 3 | **Solución** | 4 pasos: Cuéntanos → Construimos → Revisa → Publicamos |
| 4 | **Servicios** | CUSTOM / WEEKLY / SOCIAL / FULL (breve, con precios) |
| 5 | **Cómo funciona** | Pasos del proceso (para el cliente) |
| 6 | **Precios** | Tabla de planes (ver 07_WEB/PRECIOS_WEB.md) |
| 7 | **Ejemplos / Portfolio** | Taller Recambios · Casa Nora · Ruta Norte · Estudio Lumen (ver 07_WEB/PORTFOLIO_WEB.md) |
| 8 | **Sobre nosotros** | Equipo, historia, el gato técnico (ver 03_EQUIPO) |
| 9 | **Testimonios** | Prueba social real (con permiso) o placeholder aprobado |
| 10 | **FAQ** | Preguntas frecuentes (ver 07_WEB/FAQ_WEB.md) |
| 11 | **CTA final + Footer** | CTA fuerte + contacto + legal mínimo |

## Notas de contenido

- Copy anti-genérico: aplicar COPY_ESTRUCTURA.md (Hook→Contexto→Beneficio→Información→CTA) en cada sección.
- Portfolio: referencias reales o los cuatro conceptos de ejemplo, **en orden de precio ascendente** (Taller Recambios → Casa Nora → Ruta Norte → Estudio Lumen). Ver `09_PORTFOLIO/DEMOS/MAPEOS_Y_NIVELES.md`.
- El formulario de `/contacto` de la **web propia** debe incluir el campo "Plan de interés". **Las landings de cliente NO llevan formulario** (decisión 2026-09-27): el contacto es WhatsApp, teléfono y horario. La asimetría es deliberada — no un descuido.

## Especificaciones técnicas web

- **Stack oficial de las landings de cliente (2026-09-30):** **Astro + Tailwind CSS en Vercel** para el caso normal (estático, casi sin mantenimiento ni cambios). **React** solo cuando la landing es dinámica. Sin shadcn/ui, sin Framer Motion, sin Lucide como dependencia en el caso estático. → `00_REGISTRO/STACK_TECNOLOGICO_v2.md` (canónico; el `04_STACK_ASTRO_Y_DEMO.md` del 2026-09-27 es la decisión previa que amplió).
- Stack de la **web propia** (que es lo que describe este documento): **React** (familia confirmada) / Next.js / TypeScript / Tailwind / shadcn/ui / Lucide / Framer Motion (ver 07_WEB/MASTER_WEB.md). ⛔ Sin confirmar **dentro** de React: Next.js vs Vite + React 19, y Docker vs GitHub Pages. Se resuelve mirando el repo `catcode` → `00_REGISTRO/STACK_TECNOLOGICO_v2.md` §5.
- Tipografía: Geist + Inter fallback.
- Colores según 04_MARCA/COLORES.md (90% neutros + acento CAT Yellow).
- Sin permanencias: todos los planes. Mencionar en FAQ.