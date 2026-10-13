# PORTFOLIO — PAQUETES POR ROL

> **⚠️ Stack histórico (Next.js/React).** El estándar actual de las landings de cliente es **Astro + Tailwind CSS en Vercel** (decisión del 2026-09-27, `Cambios Listos para Actualizar/04_STACK_ASTRO_Y_DEMO.md`). Este documento se conserva como registro del stack con el que se concibió el demo: **no se reescribe todavía**. El demo nuevo en Astro se construirá aparte.

Archivo maestro que indica qué hay en cada carpeta y cómo se relacionan.

---

## Estructura

```text
UNIFICADO/09_PORTFOLIO/DEMOS/
│
├── 00_LEEME_GLOBAL.md          ← este archivo
│
├── 01_BACKEND/
│   ├── 00_LEEME_PRIMERO.md              ← leer primero
│   ├── PORTFOLIO_BRIEF_BACKEND.md       ← CANÓNICO
│   └── CAT_CODE_DEMO_SYSTEM_v1.0.md     ← CANÓNICO (sistema base)
│
├── 02_FRONTEND/
│   ├── 00_LEEME_PRIMERO.md
│   ├── DEMO01_TALLER_RECAMBIOS_LANDING.md
│   ├── DEMO02_CASA_NORA_LANDING.md
│   ├── DEMO03_RUTA_NORTE_PROYECTO_COMPLETO.md
│   ├── DEMO04_ESTUDIO_LUMEN_PROYECTO_COMPLETO.md
│   ├── PORTFOLIO_BRIEF_FRONTEND.md
│   ├── PORTFOLIO_BRIEF_BACKEND.md         (referencia de contrato — NO editar)
│   ├── IDENTIDAD_VISUAL_DE_CADA_DEMO.md
│   └── CAT_CODE_DEMO_SYSTEM_v1.0.md       (copia byte a byte de 01_BACKEND — NO editar)
│
├── 03_SOCIAL_MEDIA/
│   ├── 00_LEEME_PRIMERO.md
│   ├── DEMO01_TALLER_RECAMBIOS_PROMPTS_IA.md
│   ├── DEMO02_CASA_NORA_PROMPTS_IA.md
│   ├── DEMO03_RUTA_NORTE_PROMPTS_IA.md
│   ├── DEMO04_ESTUDIO_LUMEN_PROMPTS_IA.md
│   ├── PORTFOLIO_BRIEF_SOCIAL.md
│   └── IDENTIDAD_VISUAL_DE_CADA_DEMO.md
│
└── (canónico: esta propia carpeta. `Proyectos/Portafolio/` queda como origen histórico, no editar ahí — decisión del CEO, 2026-09-30)
```

---

## Flujo de trabajo entre roles

```text
01 Backend define contratos de datos
        ↓
02 Frontend consume contratos + construye demos
        ↓
03 Social genera imágenes (en paralelo con Frontend)
        ↓
Frontend integra imágenes de Social en la UI
```

### Coordinación clave

- **Imágenes**: Social genera el contenido visual (sin texto, sin logo, sin watermark). Frontend las recibe en `/public/images/<proyecto>/` y agrega overlays/texto si corresponde.
- **WhatsApp**: Backend crea `createWhatsAppUrl()`. Frontend la consume. Ambos usan la misma variable `WHATSAPP_DEMO_NUMBER`.
- **Demo Data Rule**: Nadie inventa métricas, reseñas ni prueba social **sobre un negocio real**. Todo se marca "Proyecto conceptual". **Actualizada el 2026-10-05:** la regla pasa a **tres categorías** porque la demo debe parecer una web real — se permite **personaje ficticio con nombre y foto, cita, y ★★★★★ con nota, siempre marcados**, y se prohíbe lo que afirma un resultado o cita una plataforma real. Detalle y copy exacto: `MAPEOS_Y_NIVELES.md` §3, §3-bis y §3-ter.
- **Demo Badge**: Las 4 demos incluyen badge visible de que son demostración conceptual. **Todas las marcas de demo cuelgan de `NEXT_PUBLIC_DEMO_MODE`** (`PORTFOLIO_BRIEF_BACKEND.md` §2): ninguna se escribe en el HTML.

---

## Demos a construir

> ⚠️ **Tabla superada el 2026-09-30.** Mapeaba por **paquete** (CUSTOM / SOCIAL / FULL). La primera corrección la convirtió en escalera de CUSTOM con 3 demos (Casa Nora = Basic · Estudio Lumen = Pro ★ · Ruta Norte = Premium), y a su vez quedó superada: **ahora son 4 demos** (se añadió Taller Recambios, y Estudio Lumen pasó a FULL). El eje por paquete obligaba a que FULL (=Custom Pro) enseñara el Journal, que es Premium.
> **Esta tabla no se borra** — queda como registro de cómo se concibieron las demos.
> **Manda → [[UNIFICADO/09_PORTFOLIO/DEMOS/MAPEOS_Y_NIVELES.md|MAPEOS_Y_NIVELES]]** (qué secciones se quitan, cómo se presenta el formulario del add-on, y los conflictos con los briefs).

| # | Proyecto | Tipo | Rol principal |
|---|----------|------|---------------|
| 1 | CASA NORA | CUSTOM (landing) | Frontend + Social |
| 2 | ESTUDIO LUMEN | SOCIAL | Frontend + Social |
| 3 | RUTA NORTE | FULL (web completa) | Frontend + Backend + Social |

### Demos vigentes — la escalera completa (2026-09-30)

**Una demo por nivel de CUSTOM, más la del paquete.**

| # | Proyecto | Nivel | Secciones | Rol principal |
|---|----------|-------|-----------|---------------|
| 1 | **TALLER RECAMBIOS** *(nuevo)* | CUSTOM Basic | **5** | Frontend |
| 2 | **CASA NORA** | CUSTOM Pro | **8** · ★ MÁS ELEGIDO | Frontend + Social |
| 3 | **RUTA NORTE** | CUSTOM Premium | **11** | Frontend + Social |
| 4 | **ESTUDIO LUMEN** | FULL | 8 + calendario + rejilla IG | Frontend + Social |

**Por qué cuatro y no tres:** un nivel sin demo es un nivel que no se puede enseñar. Con cuatro, cada línea del catálogo tiene su caso. **Ninguna demo se borró.**

**Por qué el taller es nuevo y no uno de los tres:** su oferta es **una lista de reparaciones con precio publicado**, no un escaparate, y eso cabe en 5 secciones. Estudio Lumen no encajaba en Basic porque su argumento de venta es el escaparate, y en Basic no hay galería. De paso, el taller es el más barato de construir y es el **candidato natural a plantilla del demo en Astro** (`STACK_TECNOLOGICO_v2.md` §7.5).

**El formulario es el mismo extra en las cuatro:** add-on *"Formulario + páginas legales · a presupuestar"*, con badge visible + aviso visible + tooltip. El CTA real de las cuatro es WhatsApp. Canónico: `00_REGISTRO/CONTACTO_Y_DATOS_EN_LANDINGS.md` §3.

---

## Reglas infranqueables (compartidas)

> **Actualizadas el 2026-10-05** por decisión del CEO. La 1 se amplía, la 4 exige campos enmascarados, la 5 pasa de prohibir en bloque a distinguir tres categorías, y la 7 es nueva.

1. **Sin clientes reales, sin reservas reales, sin números de WhatsApp reales.** Y, por lo mismo: **sin teléfono, email, URL ni enlace externo reales.** Nada que pueda recibir tráfico. La demo puede *parecer* real en todo lo demás — si parece real hasta el punto de que alguien llame a un tercero, se pasó. Tabla completa en `MAPEOS_Y_NIVELES.md` §3-ter.
2. **Sin API de Instagram, sin envío de emails, sin base de datos en V1.**
3. **WhatsApp solo mediante `createWhatsAppUrl()` — nunca enlace directo a wa.me hardcodeado.**
4. **Estados del formulario: `idle → loading → success/error` — nunca simular envío real.**
   - 🛑 **Y el formulario es un extra, no una función del nivel** (`PRECIOS.md:40`). Se entrega con **badge visible** `EXTRA · a presupuestar` + aviso visible dentro + tooltip con el porqué. **El CTA real de las 4 demos es WhatsApp.** Ver `MAPEOS_Y_NIVELES.md` §8.
   - 🆕 **2026-10-05 · el `success` declara la demo Y los campos no aceptan datos reales.** Es la diferencia entre un formulario que miente y un formulario que demuestra. Copy exacto en `MAPEOS_Y_NIVELES.md` §8: `success` → *"Esto es una demostración. Así se vería la confirmación. No hemos recibido nada."* · Campos **enmascarados** (`nombre@ejemplo.com`, `6XX XXX XXX`) + botón **"Rellenar con datos de ejemplo"**.
5. **No inventar prueba social sobre un negocio real** (★★★★★ *en Google Reviews*, "+5000 clientes", "98% satisfacción", "+120 % consultas"). **Actualizada el 2026-10-05:** ahora hay **tres categorías**. Se permite **personaje ficticio con nombre y foto, cita, y ★★★★★ con nota**, *siempre marcados como demo* (§3-bis). Se prohíbe lo que **afirma un resultado de negocio** o **cita una plataforma real**. Antes esta regla lo prohibía todo y las demos se quedaban sin bloque de testimonios, que es justo lo que hace que una demo parezca una maqueta.
6. **Imágenes sin texto, sin logo, sin marca de agua** - overlays los agrega Frontend.
7. **🆕 2026-10-05 · Fotos solo de IA.** Ni Pexels, ni Pixabay, ni Unsplash, ni ningún banco de imágenes. Razón: control de la identidad del personaje entre secciones y cero licencias que revisar. Ver `IDENTIDAD_VISUAL_DE_CADA_DEMO.md`.

---

## Cierre de los pendientes (decisión del CEO, 2026-09-30 — ejecutado 2026-10-02)

1. **`UNIFICADO/09_PORTFOLIO/DEMOS/` es canónico.** Se unificaron aquí las versiones completas de los cuatro briefs, los tres briefs de rol, el DEMO SYSTEM y la Identidad visual; `Proyectos/Portafolio/` queda como origen histórico (**no editar ahí** — cada archivo lleva al final su nota de canonicidad).
2. **Casa Nora `:683`: aplicado.** El CTA final pasó de `VER CARTA COMPLETA` a `PEDIR MESA POR WHATSAPP` (WhatsApp vía `createWhatsAppUrl()`).
3. **Falta el pack de prompts de Taller Recambios: creado** en `03_SOCIAL_MEDIA/DEMO01_TALLER_RECAMBIOS_PROMPTS_IA.md` (sin galería — es CUSTOM Basic, 5 secciones).
4. **Falta la identidad de Taller Recambios: creada** — `DEMO01_TALLER_RECAMBIOS_LANDING.md` §12 (paleta 6 colores, tipografía Archivo + Work Sans, wordmark, favicon, botones, iconografía e imágenes).
5. **BRIEF BACKEND duplicado dentro de UNIFICADO:** canónico `01_BACKEND/`; el de `02_FRONTEND/` es copia de conveniencia con comentario de cabecera.
6. **Abierto:** calendario semanal de las demos (`05_DECISIONES_Y_PENDIENTES.md` #3).

---

## Relacionado

- **`ESPEC_DESARROLLO_DEMOS.md`** — spec para quien construye las demos: decisiones técnicas y "no hacer", mapa de fuentes, spec por demo, checklist de aceptación y resumen de precios (añadido 2026-10-03; el enlace va al final del archivo a propósito: una línea nueva en el árbol desplaza las anclas `:NNN` de §12 y rompe la verificación).
