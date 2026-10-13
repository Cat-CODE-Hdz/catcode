# DISEÑO WEB — SISTEMA Y TOKENS

**Aplica a la web crear con el stack Next.js. Basado en 04_MARCA.**

---

## Tokens de color (ver 04_MARCA/COLORES.md)

| Token | Hex | Uso |
|---|---|---|
| `--bg` | `#FFFFFF` | Fondo |
| `--bg-secondary` | `#F7F8FA` | Secciones alternas |
| `--dark` | `#0A0A0A` | Héroes/squares oscuros |
| `--text` | `#111111` | Texto |
| `--muted` | `#6B7280` | Metadatos |
| `--border` | `#E5E7EB` | Bordes |
| `--accent` | `#FFB800` (CAT Yellow) | CTAs, detalles |
| `--on-accent` | `#111111` | Texto sobre acento (NUNCA blanco) |

Regla: 90% neutros, 10% acento máximo.

## Tipografía (ver 04_MARCA/TIPOGRAFIA.md)

- Geist (principal) + Inter (fallback). Mono: Geist Mono.
- Escala fija (units): `xs 12 · sm 14 · base 16 · lg 20 · xl 24 · 2xl 32 · 3xl 40`.
- Headings 700, body 400–500.

## Radios / sombras / spacing

- Radio: `sm 8px · md 12px · lg 20px` (consistente en cards, botones, inputs).
- Sombras: suaves; sombreado fuerte en hover de cards.
- Spacing: escala de 4px (4/8/12/16/24/32/48/64).

## Motion (ver 04_MARCA)

- Duración 150–500ms.
- Reveal on scroll (Framer Motion), respetar `prefers-reduced-motion`.
- Botones: hover scale 1.02 + focus ring visible.

## Componentes clave

- **Button primario:** bg CAT Yellow, texto `#111111`, radius md, bold.
- **Badges:** "MÁS ELEGIDO" (outline) y "RECOMENDADO" (solid accent) en tabla de precios.
- **Card:** bg White, border `--border`, radius lg, sombra sutil, hover elevado.
- **Navbar:** sticky, fondo White/translúcida with blur, logo + links + CTA.
- **Formulario:** inputs con border `--border`, focus ring CAT Yellow.

## Accesibilidad

- Contraste ≥ 4.5:1 texto/background.
- Focus visible en todos los interactivos.
- `prefers-color-scheme` soportado (dark mode opcional con tokens).
- Test con semillas de teclado y lector (ver 08_PLANTILLAS/QA).