# Changelog

Todas las notables cambios en este proyecto seguirán el formato [Keep a Changelog](https://keepachangelog.com/).

## [Unreleased]

### Changed
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
