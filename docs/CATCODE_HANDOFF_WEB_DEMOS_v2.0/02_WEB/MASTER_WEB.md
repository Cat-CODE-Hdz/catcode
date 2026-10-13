# WEB CAT CODE — MASTER / ESTRUCTURA

**Versión:** 2026-09-10 · **Fuente: `CAT CODE — MASTER SOURCE OF TRUTH v1.0.md`** (archivado en OS v1 → 99_ARCHIVO/OBSOLETOS/2026-09-10). Este doc es el master canónico de la web.

---

## Stack técnico

> **Fuente canónica del stack desde el 2026-09-30: `00_REGISTRO/STACK_TECNOLOGICO_v2.md`.** Este master describe **la web propia**, que no es el producto que vendemos. La web propia es una **landing dinámica**, así que por esa decisión **le corresponde React** — la familia del stack queda confirmada.
> ⛔ **Lo que sigue sin confirmar, y por eso estas dos líneas se conservan tal cual y no se corrigen:** (1) ¿Next.js o Vite + React 19? El documento `04_STACK_ASTRO_Y_DEMO.md` del 2026-09-27 afirma Vite + React 19 + Tailwind 4 en GitHub Pages. (2) ¿Deploy en Docker o sigue en Vercel/GitHub Pages? Depende de si la web propia necesita backend. **Se resuelve mirando el repo `catcode`.** Escribir una de las dos como cierta aquí sería escribir una mentira en la fuente canónica — y la web propia es **el único producto que ya está en producción**.

- Next.js (+ App Router) · TypeScript · Tailwind CSS · shadcn/ui · Lucide · Framer Motion.
- Deploy: Vercel. Datos de planes en `data/plans.ts`.
- Tipografía: Geist + Inter fallback (ver 04_MARCA/TIPOGRAFIA.md).
- Sin dependencias no declaradas; todo controlado por CAT CODE.
- **CI/CD: GitHub Actions.** No hay despliegues manuales a producción.

## Homepage — 12 secciones

1. Navbar (logo + Qué hacemos / Cómo funciona / Precios / Ejemplos / FAQ)
2. Hero — H1 `Construimos tu presencia digital.` + sub `Landing + contenido + publicación. Sin complicaciones.` + CTA
3. Solución — **4 pasos:** Cuéntanos → Construimos → Revisa → Publicamos *(decisión del usuario; el MASTER dice 3)*
4. Servicios (CUSTOM / WEEKLY / SOCIAL / FULL)
5. Cómo funciona (proceso, ver 06_PRODUCCION/FLUJO.md)
6. Precios (ver PRECIOS_WEB.md, data/plans.ts)
7. Ejemplos/Portfolio (ver PORTFOLIO_WEB.md)
8. Sobre nosotros (ver 03_EQUIPO)
9. Testimonios
10. FAQ (ver FAQ_WEB.md)
11. CTA final — `Tu negocio ya existe. Ahora hagamos que se vea.`
12. Footer (contacto + links)

## Páginas

- `/` Homepage (12 secciones).
- `/contacto` — formulario "Cuéntanos qué necesita tu negocio." con Plan de interés.
- (Opcional) `/precios`, `/servicios`, `/ejemplos` como anclajes separados. Por defecto: anclajes en homepage.

## Voz y copy web

- Aplicar COPY_WEB.md (Hook→Contexto→Beneficio→Información→CTA) y frases canónicas de 04_MARCA.
- "Por qué CAT CODE" canónico: Simple / Todo conectado / Para negocios pequeños / Sin permanencias.

## Notas de implementación

- CTO/desarrollo: Fidel (Backend), Daniela (Frontend), David (Social & Content verifica piezas).
- Repos/setup GitHub: ver `GITHUB_OPERATING_SYSTEM_SUGERENCIAS.md` en `Cat Code System/00_ADMIN/Cat Code Documentation` (org `Cat-CODE-Hdz`).