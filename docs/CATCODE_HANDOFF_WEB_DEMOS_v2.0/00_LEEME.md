# CAT CODE — PAQUETE DE DESARROLLO (WEB · DEMOS · IMÁGENES)

**Versión:** 2.0 · **Fecha:** 07 octubre 2026
**Destinatario:** equipo de desarrollo (web comercial + demos + assets)

---

## 1. Qué es este paquete

Documentación y assets necesarios para **actualizar la web comercial** https://cat-code-hdz.github.io/catcode/, **las demos del portfolio** y **las imágenes de marca**.

> ⚠️ **El repo de código es `Cat-CODE-Hdz/catcode` (GitHub).** Este paquete NO incluye código: es la fuente de verdad documental + los assets gráficos.

---

## 2. Fuente única de verdad

> **`01_MAESTRO/CAT CODE — MASTER SOURCE OF TRUTH v2.0.md`**
> Todo lo demás es material de apoyo. Si algo contradice al maestro, **manda el maestro**.
> Excepción: las **cifras de precio** las manda `03_COMERCIAL/PRECIOS.md`.

**Leer en este orden:**

1. `01_MAESTRO/…v2.0.md` (completo)
2. `00_LEEME.md` (este)
3. `03_COMERCIAL/PRECIOS.md` + `REGLAS_COMERCIALES.md`
4. El resto según la tarea

---

## 3. Contenido

| Carpeta | Contenido |
|---|---|
| `01_MAESTRO/` | Master Source of Truth v2.0 (maestro canónico, 63 secciones) |
| `02_WEB/` | `MASTER_WEB` (estructura homepage), `DISENO_WEB` (tokens), `COPY_WEB`, `PRECIOS_WEB` (spec de datos), `FAQ_WEB`, `CONTACTO_WEB`, `PORTFOLIO_WEB` |
| `03_COMERCIAL/` | `PRECIOS` (cifras v2 — manda), `OFERTA_SERVICIOS`, `REGLAS_COMERCIALES` + `02_SERVICIOS/` (CUSTOM, WEEKLY, SOCIAL, FULL) |
| `04_MARCA/` | `COLORES`, `TIPOGRAFIA`, `IDENTIDAD`, `LOGO`, `MENSAJES_MARCA`, `TONO_VOZ`, `MANUAL_MARCA_v3.html` |
| `05_DEMOS/` | Sistema de demos completo: backend, frontend (4 demos), social media, identidad visual de cada demo |
| `06_PRODUCCION/` | `SECCIONES_LANDING` (11 secciones), `FLUJO`, `APROBACION`, `PUBLICACION`, `ESTRUCTURA_CARPETA_SEMANAL` |
| `07_STACK/` | `STACK_TECNOLOGICO_v2` (Astro vs React), `CONTACTO_Y_DATOS_EN_LANDINGS` (sin formulario + add-on) |
| `08_LOGOS/` | 7 logos listos: `catcode_logo1.png` … `catcode_logo7.png` (originales en `Logo Cat Code\USAR\`) |
| `09_REFERENCIA_WEB_ACTUAL/` | 11 capturas de la web v1.0 = estado **ANTES** de este trabajo |

---

## 4. Estado actual: la web está entera en v1.0

La web publicada **no tiene ninguno de los cambios v2**. Las 17 brechas están listadas en el **§61 del maestro**. Resumen de lo más caro de tener mal:

| Brecha | Hoy en producción | Debe ser (v2) |
|---|---|---|
| Precios CUSTOM | €249/499/799 + 19/39/69 | **€149/249/449 + 19/29/49** |
| Nombres de plan | START / BUSINESS / PRO | **Basic / Pro / Premium** |
| WEEKLY | 79/129/199, todas "5 piezas" | **59/109/159 · 3/5/7 piezas** |
| SOCIAL | solo 2 niveles (99/149) | **3 niveles: 79/119/179 + Reel en Premium** |
| FULL | €229 | **€199 con setup incluido** |
| FAQ | "5 publicaciones en todos" | **3/5/7 según nivel** |
| Portfolio | 3 demos, badges viejos | **4 demos por precio** (falta Taller Recambios) |
| WhatsApp | `wa.me/?text=` **sin número** | chat real con CAT CODE |
| Footer | `#legal`, `#privacidad`, `#cookies` muertos | contenido real |
| Métricas | inventadas (-72 %, +15h/mes, 55/100) | **prohibido inventar métricas** |

---

## 5. Orden de trabajo (fases §57 del maestro)

```text
FASE 01 — Precios y nombres en src/data/pricing.ts + componentes + i18n (ES y EN)
FASE 02 — Copy contractual (FAQ, Qué incluye, plazos, Por qué CAT CODE)
FASE 03 — Portfolio: 4 demos ordenadas por precio, nivel, badge "proyecto conceptual"
FASE 04 — Contacto (Plan de interés) + WhatsApp con número centralizado
FASE 05 — Homepage: secciones faltantes + quitar claims inventados
FASE 06 — Legales: Legal / Privacidad / Cookies con contenido real
FASE 07 — SEO + Analytics (fix CORS PageSpeed)
FASE 08 — Accessibility + Performance
FASE 09 — QA completo (§48–52) + deploy por GitHub Actions
```

---

## 6. Stack verificado — NO cambiar

```text
React 19 + TypeScript + Vite 8 + Tailwind CSS 4 + react-i18next (ES/EN) + oxlint
GitHub Pages vía GitHub Actions · base '/catcode/' · SPA sin router (anclas)
```

⛔ **No introducir Next.js, Vercel, shadcn/ui, Framer Motion ni Lucide por inercia** *(regla de la **web propia**, que va en GitHub Pages)*.
(Landings de cliente: **Astro + Tailwind en Vercel** por defecto, React solo si es dinámica — `07_STACK/STACK_TECNOLOGICO_v2.md`.)

---

## 7. Reglas absolutas (del §00 del maestro)

- **No inventar** información comercial, métricas ni cifras.
- **No modificar precios. No eliminar productos. No cambiar nombres.**
- Productos: **CUSTOM · WEEKLY · SOCIAL · FULL** (siempre los 4, con niveles Basic/Pro/Premium).
- Las landings de cliente **no llevan formulario** (WhatsApp + teléfono + horario).
- **`npm run lint` y `npm run build` a 0 errores** antes de dar por terminada cualquier fase.
