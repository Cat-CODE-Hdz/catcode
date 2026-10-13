# COLORES — PALETA DE MARCA

**Fuente:** MANUAL_MARCA_v3.html · **Versión:** 2026-09-10

---

## Paleta principal

| Token | Hex | Uso |
|---|---|---|
| White | `#FFFFFF` | Fondo principal |
| Secondary | `#F7F8FA` | Fondos alternos, secciones claras |
| Dark | `#0A0A0A` | Fondo oscuro / secciones hero/dark |
| Text | `#111111` | Texto principal sobre claro |
| Muted | `#6B7280` | Texto secundario, metadatos |
| Border | `#E5E7EB` | Bordes, divisores, inputs |
| **CAT Yellow** | `#FFB800` | **Único color de acento** — CTAs, detalles |

## Reglas de uso del acento

- **CAT Yellow es el único color de acento.** Prohibido añadir otros colores de acento.
- Se usa con moderación: CTAs primarios, elementos destacados, hovers, highlights.
- Ratio de uso general: 90% neutros + 10% acento como máximo.
- Texto sobre CAT Yellow: siempre oscuro (`#111111`), NUNCA blanco (contraste insuficiente).
- Acentos nunca para texto de párrafo (solo para elementos accionables/destacados).

## Role tokens (uso por componente)

| Componente | Color |
|---|---|
| Fondo página | White / Secondary |
| Hero / dark sections | Dark (#0A0A0A) + texto claro |
| Botón primario (light) | CAT Yellow bg + #111111 texto |
| Botón primario (dark) | White bg + #111111 texto (el amarillo solo como detalle) |
| Error | Rojo accesible estándar (uso solo en errores) |
| Éxito | Verde accesible estándar (uso solo en confirmación) |

## Accesibilidad (contraste)

- Texto principal sobre White/Secondary: `#111111` (≥ 4.5:1).
- Texto sobre Dark: blanco `#FFF` (≥ 4.5:1).
- Texto con `Muted` solo para metadatos grandes, nunca para contenido esencial.

## Dark / Light

- La marca soporta modo claro y oscuro.
- Light: White/Secondary base. Dark: Dark base.
- El acento CAT Yellow funciona en ambos modos.
- `prefers-color-scheme` respetado en web (ver 07_WEB).