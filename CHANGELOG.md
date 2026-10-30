# Changelog

Todas las notables cambios en este proyecto seguirán el formato [Keep a Changelog](https://keepachangelog.com/).

## [1.1.0] - 2026-10-13

### Added
- Nuevas secciones Sobre Nosotros, Contacto y Legal (carga perezosa)
- Skip link "Saltar al contenido principal" y `scroll-margin-top` para las anclas de secciones bajo el header fijo
- `lib/whatsapp` para centralizar los enlaces de WhatsApp y `lib/analytics` con GA4 sin cookies (Consent Mode v2 denegado por defecto)
- Variables de entorno `VITE_WHATSAPP_NUMBER` y `VITE_GA_MEASUREMENT_ID` en el workflow de despliegue
- Docs: handoff web demos `docs/CATCODE_HANDOFF_WEB_DEMOS_v2.0`

### Fixed
- **Roto en producción con el dominio personalizado:** `base: '/catcode/'` en `vite.config.ts` hacía que el HTML pidiera los assets en `/catcode/assets/*`, pero GitHub Pages sirve el sitio desde la raíz al usar dominio propio → todos los JS/CSS/favicon daban 404 en `https://catcode.es/`. Cambiado a `base: '/'`
- Rutas hardcodeadas `/catcode/catcode-icon.png` en Header, Footer, Hero y Portfolio
- URLs canónica, Open Graph, Twitter Card y JSON-LD apuntaban al dominio antiguo `cat-code-hdz.github.io/catcode/` → ahora `https://catcode.es/`
- `robots.txt` y `sitemap.xml` actualizados a `catcode.es`
- `SITE_URL` de PageSpeed metrics (workflow y fallback del script) apunta ahora a `catcode.es`
- Texto del aviso legal (es/en) y README actualizados al nuevo dominio

### Changed
- Renovación de planes y precios (CUSTOM/WEEKLY/SOCIAL con tiers Basic/Pro/Premium) y copy ES/EN alineado a la oferta v2
- Métricas: ya no se muestran valores inventados; se conserva el último dato real de PageSpeed o "unavailable"
- README y `.env.example` actualizados; stack mostrado como "VITE · REACT" y despliegue en GitHub Pages
- Estilos v2: `amber-pulse`, `btn-amber-glow`, `metric-glow` y logo de marca en Header/Footer
- Los botones "Ver demo" de las cards de Portfolio enlazan a las demos reales en GitHub Pages y se abren en pestaña nueva
- `demoPath` renombrado a `demoUrl` en `es.json` y `en.json`

### Fixed
- Los botones de Portfolio ya no apuntan a `#contacto` en lugar de a la demo
- Las rutas internas `/casa-nora`, `/estudio-lumen` y `/ruta-norte` nunca resolvieron con `base: '/catcode/'`

## [1.0.0] - 2026-09-05

### Fixed
- Workflow `deploy.yml` reescrito para Vite (antes estaba configurado para Next.js)
- `vite.config.ts` con `base: '/catcode/'` para GitHub Pages

### Added
- Changelog
- Versión dinámica cargada desde `package.json` en el TopBar

### Changed
- README actualizado con documentación real del proyecto
- Actions del workflow actualizadas a v4/v5
