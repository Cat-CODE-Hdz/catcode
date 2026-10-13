# BACKEND — LEEME PRIMERO

> **⚠️ Stack histórico (Next.js/React).** El estándar actual de las landings de cliente es **Astro + Tailwind CSS en Vercel** (decisión del 2026-09-27, `Cambios Listos para Actualizar/04_STACK_ASTRO_Y_DEMO.md`). Este documento se conserva como registro del stack con el que se concibió el demo: **no se reescribe todavía**. El demo nuevo en Astro se construirá aparte.

**Rol**: construir la capa de integración compartida (config, WhatsApp, form states, demo data).

---

## Archivos en esta carpeta

| Archivo | Para qué sirve |
|---------|---------------|
| `PORTFOLIO_BRIEF_BACKEND.md` | Contrato de qué construir, entregables, checklist |
| `CAT_CODE_DEMO_SYSTEM_v1.0.md` | Reglas canónicas: stack, estructura, WhatsApp system, form system, demo data rule |

---

## Orden de lectura (desde el min 0)

1. **Brief Backend** — entiende el alcance completo (§1 Scope, §2 Qué construir, §3 Qué NO construir)
2. **DEMO SYSTEM §5** — estructura del repositorio (`sistema/` vs `proyectos/`)
3. **DEMO SYSTEM §4** — stack V1: Next.js + TypeScript + Tailwind
4. **DEMO SYSTEM §16** — WhatsApp System: crear `createWhatsAppUrl()` como utilidad única
5. **DEMO SYSTEM §21** — Form System: estados `idle → loading → success/error`
6. **DEMO SYSTEM §22** — Demo Data Rule: nunca inventar prueba social, marcar "Proyecto conceptual"
7. **Brief Backend §4** — contratos de datos por proyecto (config files, whatsapp config, contact fields)

---

## Qué construyes

- `sistema/integrations/createWhatsAppUrl()` — utilidad compartida
- `sistema/config/` — `.env.example` con `WHATSAPP_DEMO_NUMBER`, contratos de datos
- `proyectos/<proyecto>/project.config.ts` — por cada demo (Taller Recambios, Casa Nora, Ruta Norte, Estudio Lumen)
- `/admin-demo` para Ruta Norte — mock admin panel (sin backend real, datos hardcodeados)

---

## Qué NO haces

- ~~Servidor Node/Express~~
- ~~Envío de emails~~
- ~~Base de datos~~
- ~~API de Instagram~~
- ~~Números de WhatsApp reales~~
- ~~Urban Market~~ (fuera de alcance V1)

---

## Reglas demo

- WhatsApp: solo `createWhatsAppUrl()` — nunca links directos a wa.me
- Formularios: estados `idle / loading / success / error` — nunca simular envío real
- Datos: marcar todo "Proyecto conceptual"
- Badge demo visible en todas las demos
- Sin clientes, reservas ni reseñas reales
