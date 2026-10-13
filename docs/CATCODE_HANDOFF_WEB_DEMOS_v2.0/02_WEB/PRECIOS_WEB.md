# PRECIOS WEB — FUENTE DE VERDAD PARA LA WEB

**Datos para `data/plans.ts` y la tabla de precios de la web propia de CAT CODE.**
**Coincide con [[UNIFICADO/01_COMERCIAL/PRECIOS.md|PRECIOS.md]] (v2, 2026-09-29).** Si divergen, manda `01_COMERCIAL/PRECIOS.md`.

> ✅ **Regenerado a v2 el 2026-10-04** (catálogo del 2026-09-29). El bloque `plans.ts` de abajo trae los valores vigentes; cada fila conserva en el comentario `// v1:` lo que valía antes, para que la diferencia siga visible sin que se copie lo viejo.

---

## Planes (data/plans.ts) — v2 (vigente)

```ts
// plans.ts — datos de planes (catcode web)
// Valores vigentes: catálogo v2 (2026-09-29). En cada fila, "// v1:" indica lo que valía el 2026-09-10.
// Los valores vigentes están en UNIFICADO/01_COMERCIAL/PRECIOS.md §2-§6.
export const plans = [
  // CUSTOM — landing a medida
  { id: "custom-basic",    name: "CUSTOM BASIC",    type: "custom", price: 149, monthly: 19,  popular: false },  // v1: 249 / 19
  { id: "custom-pro",      name: "CUSTOM PRO",      type: "custom", price: 249, monthly: 29,  popular: true  },  // v1: 499 / 39
  { id: "custom-premium",  name: "CUSTOM PREMIUM",  type: "custom", price: 449, monthly: 49,  popular: false },  // v1: 799 / 69

  // WEEKLY — contenido semanal
  { id: "weekly-basic",    name: "WEEKLY BASIC",    type: "weekly", price: null, monthly: 59,  popular: false },  // v1: 79
  { id: "weekly-pro",      name: "WEEKLY PRO",      type: "weekly", price: null, monthly: 109, popular: true  },  // v1: 129
  { id: "weekly-premium",  name: "WEEKLY PREMIUM",  type: "weekly", price: null, monthly: 159, popular: false },  // v1: 179

  // SOCIAL — publicación gestionada
  { id: "social-basic",    name: "SOCIAL BASIC",    type: "social", price: null, monthly: 79,  popular: false },  // v1: 99
  { id: "social-pro",      name: "SOCIAL PRO",      type: "social", price: null, monthly: 119, popular: true  },  // v1: 149
  { id: "social-premium",  name: "SOCIAL PREMIUM",  type: "social", price: null, monthly: 179, popular: false },  // v1: 199

  // FULL — todo en uno
  { id: "full",            name: "FULL",            type: "full",   price: null, monthly: 199, popular: true  },  // v1: 229 · setup incluido
];
```

## Valores vigentes (v2 · 2026-09-29)

| id | Nombre | Setup | Mensual | Piezas/semana | Secciones |
|---|---|---|---|---|---|
| `custom-basic` | CUSTOM BASIC | 149 € | 19 €/mes | — | 5 |
| `custom-pro` | CUSTOM PRO ★ | 249 € | 29 €/mes | — | 8 |
| `custom-premium` | CUSTOM PREMIUM | 449 € | 49 €/mes | — | 11 |
| `weekly-basic` | WEEKLY BASIC | — | 59 €/mes | 3 | — |
| `weekly-pro` | WEEKLY PRO ★ | — | 109 €/mes | 5 | — |
| `weekly-premium` | WEEKLY PREMIUM | — | 159 €/mes | 7 | — |
| `social-basic` | SOCIAL BASIC | — | 79 €/mes | 3 | — |
| `social-pro` | SOCIAL PRO ★ | — | 119 €/mes | 5 | — |
| `social-premium` | SOCIAL PREMIUM | — | 179 €/mes | 7 | — |
| `full` | FULL ★ | **incluido** | 199 €/mes | — | — |

★ = badge **MÁS ELEGIDO** en la web (el PRO de cada servicio). FULL = **RECOMENDADO**.

## Reglas de precio

- **CUSTOM = setup + mensualidad.** WEEKLY / SOCIAL = solo mensualidad. **FULL = solo mensualidad, con el setup incluido** (decisión v2).
- **Orden coherente (v2):** WEEKLY PREMIUM 159 € < SOCIAL PREMIUM 179 € < FULL 199 €.
- **Ningún nivel de CUSTOM lleva formulario de contacto.** El contacto es un botón de WhatsApp + teléfono + horario. El formulario `/contacto` de la web propia sí se mantiene.
- **FULL:** 199 €/mes contra 257 €/mes de los componentes por separado → 22,6 % de ahorro mensual; año 1 (2.388 € vs 3.333 €) → 28,4 %.
- Sin permanencias. Cambios de nivel: baja = siguiente ciclo, subida = prorrateado.
- "No incluye" de SOCIAL (visible en web, FAQ): Ads, DM, respuesta a comentarios, fotografía profesional, community management avanzado.
- **Congelar el precio el día del cliente nº 3**, no hoy.

## Cómo mostrar en la web

- Tabla por tipo con columnas: Plan | Precio | Mensualidad | Antes | CTA.
- Badge `MÁS ELEGIDO` (PRO de cada tipo) y `RECOMENDADO` (FULL).
- Texto bajo tabla: `Sin permanencias. Cambia o cancela cuando quieras.`

---

Relacionado: [[UNIFICADO/01_COMERCIAL/PRECIOS.md|PRECIOS.md]] (canónico) · [[WIKI/conceptos/precios.md|precios]] · [[UNIFICADO/07_WEB/MASTER_WEB.md|MASTER_WEB.md]]
