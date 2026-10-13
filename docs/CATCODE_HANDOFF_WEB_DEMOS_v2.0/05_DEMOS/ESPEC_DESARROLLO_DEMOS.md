# ESPEC DE DESARROLLO — LAS 4 DEMOS

**Versión:** v1 · **Fecha:** 2026-10-03 · **Estado:** BORRADOR (pendiente de aprobación del CEO)
**Alcance:** este documento es para **quien va a construir las demos**. Resume, enlaza y da el checklist. **No sustituye a los briefs**: si algo contradice a un brief o a `MAPEOS_Y_NIVELES.md`, manda el brief/MAPEOS y avisa.
**Resumen en una frase:** cuatro demos conceptuales —una por nivel de CUSTOM, más FULL— construidas en Next.js según sus briefs, con CTA de WhatsApp, sin prueba social inventada y con el formulario etiquetado como extra.

---

## 1. Decisiones técnicas (leer antes de tocar nada)

| # | Decisión | Detalle |
|---|---|---|
| 1 | **Stack: Next.js según los briefs** | Decisión del CEO, 2026-10-03: las demos se construyen en **Next.js, tal cual describen los briefs**. *(Consta que el estándar de landings de cliente es Astro + Tailwind en Vercel — decisión 2026-09-27 — pero las demos se siguen en Next.js por los briefs. Si eso cambia, esta línea cambia.)* |
| 2 | **CTA = WhatsApp** | El CTA real de las 4 demos es WhatsApp, **siempre** vía `createWhatsAppUrl()`. **Nunca** un enlace `wa.me` hardcodeado. Ambos roles usan la misma variable `WHATSAPP_DEMO_NUMBER`. |
| 3 | **Formulario = extra, no función de nivel** | Ningún nivel incluye formulario (`PRECIOS.md` §2 y §6.2). Donde aparezca, se etiqueta con el sistema de 3 avisos (§5.7). |
| 4 | **Estados del formulario** | `idle → loading → success/error`. **Nunca** simular envío real. El `success` dice que es una demostración. |
| 5 | **Demo Data Rule** | **Actualizada el 2026-10-05 — ahora en tres categorías.** **Se permite:** personaje ficticio con nombre y foto, cita, y ★★★★★ con nota, *siempre marcados como demo*. **Se prohíbe:** lo que afirma un resultado de negocio ("+5000 clientes", "98 % satisfacción", "+120 % consultas") y lo que cita una plataforma real ("★★★★★ en Google Reviews"). Las 4 demos son conceptuales y lo declaran con **marcas discretas colgadas de `DEMO_MODE`**. Detalle: `MAPEOS_Y_NIVELES.md` §3, §3-bis y §3-ter. |
| 6 | **Imágenes** | Social genera **sin texto, sin logo, sin marca de agua**. Los overlays los pone Frontend. Ruta de entrega: `/public/images/<proyecto>/`. |
| 7 | **🆕 2026-10-05 · Fotos solo IA** | Ni Pexels, ni Pixabay, ni Unsplash. Los packs de prompts de Social son la única fuente de imágenes del portfolio. Ver `IDENTIDAD_VISUAL_DE_CADA_DEMO.md`. |

### 1.1 · NO hacer (las formas de que una demo deje de ser demo)

> *Eran 4 y ahora son 5. La nueva es la marca escrita a mano (`:5`). La nº 4 se ha reescrito, no se ha quitado: sigue prohibido el bloque de testimonios sin marca.*

1. 🛑 **Ningún número de WhatsApp, cliente, reserva o cita real.** Todo conceptual. **Y por lo mismo: ni teléfono, ni email, ni URL, ni enlace externo, ni perfil de Google o pin de Maps de un negocio que exista** (`MAPEOS_Y_NIVELES.md` §3-ter). *Actualizado el 2026-10-05: la demo debe parecer una web real, pero si alguien puede llamar a un tercero, dejó de ser una demo.*
2. 🛑 **Nunca `wa.me` en duro.** Solo `createWhatsAppUrl()`.
3. 🛑 **Sin API de Instagram, sin envío de emails, sin base de datos.** La rejilla IG de Estudio Lumen es estática.
4. 🛑 **Sin prueba social sobre un negocio real.** ⚠️ **Cambiado el 2026-10-05:** ya **no** significa "sin testimonios" ni "sin estrellas". Significa **sin resultados de negocio y sin plataformas citadas**. Los personajes ficticios, las citas y las estrellas **están permitidos si van marcados** con el crédito discreto de `MAPEOS_Y_NIVELES.md` §3-bis. Un bloque de testimonios sin marca sigue estando prohibido.
5. 🛑 **Ninguna marca de demo escrita a mano en el HTML.** Todas cuelgan de `NEXT_PUBLIC_DEMO_MODE` (`01_BACKEND/PORTFOLIO_BRIEF_BACKEND.md` §2.1).

---

## 2. Mapa de fuentes (canónico: `UNIFICADO/09_PORTFOLIO/DEMOS/`)

> Convención de citas (`MAPEOS_Y_NIVELES.md` §12): **sección + línea** (`§4.2`, `:156-170`), nunca línea suelta — `archivo.md:NNN` caduca con cada edición.

| Qué necesitas | Dónde |
|---|---|
| **Manda este mapa de secciones** | `MAPEOS_Y_NIVELES.md` (v2) — qué sección va, cuál se quita, de dónde sale |
| Reglas globales + árbol | `00_LEEME_GLOBAL.md` |
| Briefs por demo (estructura, copy, bloques) | `02_FRONTEND/DEMO01_TALLER_RECAMBIOS_LANDING.md` · `DEMO02_CASA_NORA_LANDING.md` · `DEMO03_RUTA_NORTE_PROYECTO_COMPLETO.md` · `DEMO04_ESTUDIO_LUMEN_PROYECTO_COMPLETO.md` |
| Contratos de datos, payloads, `createWhatsAppUrl()` | `01_BACKEND/PORTFOLIO_BRIEF_BACKEND.md` (el de `02_FRONTEND/` es copia de conveniencia) |
| Reglas de composición Frontend | `02_FRONTEND/PORTFOLIO_BRIEF_FRONTEND.md` |
| Reglas de contenido Social | `03_SOCIAL_MEDIA/PORTFOLIO_BRIEF_SOCIAL.md` |
| Paleta, tipografía, wordmark, botones por demo | `02_FRONTEND/IDENTIDAD_VISUAL_DE_CADA_DEMO.md` (+ `03_SOCIAL_MEDIA/IDENTIDAD_VISUAL_DE_CADA_DEMO.md` para redes) |
| Prompts para generar las imágenes | `03_SOCIAL_MEDIA/DEMO0N_*_PROMPTS_IA.md` |
| Sistema de demos (versiones, plantillas) | `CAT_CODE_DEMO_SYSTEM_v1.0.md` (en `01_BACKEND/` y `02_FRONTEND/`) |
| Precios (fuente que manda) | `01_COMERCIAL/PRECIOS.md` **v2, 2026-09-29** |
| Niveles, add-on del formulario, footer de nivel | `MAPEOS_Y_NIVELES.md` §2, §8, §9 |

### 2.1 · Flujo entre roles

```text
01 Backend define contratos de datos
        ↓
02 Frontend consume contratos + construye demos
        ↓
03 Social genera imágenes (en paralelo con Frontend)
        ↓
Frontend integra imágenes de Social en la UI
```

---

## 3. La escalera — 4 demos, una por nivel

| # | Demo | Nivel | Secciones | Setup | Mensual | Badge |
|---|---|---|---|---|---|---|
| 1 | **TALLER RECAMBIOS** (taller de bicicletas, Sevilla) | Custom Basic | **5** | 149 € | 19 €/mes | — |
| 2 | **CASA NORA** (restaurante) | Custom Pro | **8** | 249 € | 29 €/mes | ★ **MÁS ELEGIDO** |
| 3 | **RUTA NORTE** (experiencias turísticas norte) | Custom Premium | **11** | 449 € | 49 €/mes | — |
| 4 | **ESTUDIO LUMEN** (estética) | FULL | **8 + calendario editorial + rejilla IG** | **incluido** | **199 €/mes** | **RECOMENDADO** |

**Por qué cuatro:** un nivel sin demo es un nivel que no se puede enseñar. **Ninguna demo se borró nunca** (`MAPEOS_Y_NIVELES.md` §1).

**Cromo (existe en todas y no cuenta como sección):** barra de anuncio · header · footer · botón de WhatsApp flotante.

### 3.1 · Qué es cada nivel (`PRECIOS.md` §2)

| Nivel | Secciones | Lista |
|---|---|---|
| **Basic** | **5** | Hero con CTA WhatsApp · Sobre nosotros · Servicios · Confianza · Ubicación |
| **Pro** | **8** | Basic + Sección ampliada · Galería · FAQ |
| **Premium** | **11** | Pro + Blog (3 entradas) · Casos de éxito · Footer con aviso legal |

---

## 4. Spec por demo

> Cada subsección lista **sección del nivel → de dónde sale en el brief**. El detalle (bloques, copy, líneas) está en el brief y en `MAPEOS_Y_NIVELES.md`: aquí solo se orienta.

### 4.1 · TALLER RECAMBIOS → Basic (5 secciones)

Taller de bicicletas en Sevilla. Oferta = **lista de reparaciones con precio publicado**; por eso cabe en 5 secciones.

| # | Sección | Contenido |
|---|---|---|
| 1 | **Hero** | Nombre, tagline, CTA **"Pide presupuesto por WhatsApp"** |
| 2 | **Sobre nosotros** | Quién trabaja ahí, desde cuándo, cómo trabaja |
| 3 | **Servicios** | 4-5 reparaciones **con precio publicado** (ej. *"Revisión completa · 35 €"*) |
| 4 | **Confianza** | **La garantía:** *"Si no queda bien, la vuelvo a hacer."* (sin estrellas: la garantía real del oficio) |
| 5 | **Ubicación** | Dirección, horario, teléfono, mapa |

- **Sin galería y sin FAQ a propósito** (Basic). No "faltan secciones": es el nivel.
- **Identidad:** §12 del brief — paleta grafito `#1B1F24` / acero `#F2F3F4` / naranja `#C2410C` / azul `#27548D`, tipografía **Archivo + Work Sans**, wordmark y favicon (ver `IDENTIDAD_VISUAL_DE_CADA_DEMO.md`).
- **Imágenes:** pack propio en `03_SOCIAL_MEDIA/DEMO01_TALLER_RECAMBIOS_PROMPTS_IA.md` — sin galería (Basic, 5 secciones).
- **Firma:** la demo más barata de construir y **candidata a plantilla** del sistema de demos.

### 4.2 · CASA NORA → Pro (8 secciones)

Restaurante. Brief con 15 bloques → 8 secciones de nivel (`MAPEOS_Y_NIVELES.md` §5).

| # | Sección del nivel | De dónde sale |
|---|---|---|
| 1 | **Hero** con CTA WhatsApp | `03 Hero` — el CTA *"ver la carta"* vive aquí |
| 2 | **Sobre nosotros** | `04 Introducción` + `05 Filosofía` **fusionadas** |
| 3 | **Servicios = la carta** | `06 Platos destacados` (4 cards) **+ `09 La carta` absorbida** |
| 4 | **Confianza** | `07 Experiencia` reescrita según §3 de MAPEOS |
| 5 | **Ubicación** | `11 Ubicación` |
| 6 | **Sección ampliada** | NUEVA — "De dónde viene lo que comemos": producto local, temporada, proveedores |
| 7 | **Galería** | `08 Galería` |
| 8 | **FAQ** | `12 FAQ` |

- **Cromo:** `02 Header` · `14 Footer` (sin aviso legal) · `15 WhatsApp Floating Button`.
- **Se quitan:** `01 Announcement Bar` · **`10 Reservas` → extra con badge** · `13 CTA Final` → al hero.
- **CTA aplicado (2026-09-30):** *"VER CARTA COMPLETA"* → **`PEDIR MESA POR WHATSAPP`** vía `createWhatsAppUrl()` con el mensaje predefinido del brief §20.
- **⚠️ Badge reforzado:** `ReservaCasaNora` pide personas/fecha/hora y aparenta sistema de reservas real en un nivel de 249 €. **Obligatorio:** badge de titular + aviso dentro + microcopy *"Esto no comprueba disponibilidad: es una demo."* (`MAPEOS_Y_NIVELES.md` §8).
- **Firma:** el restaurante de carta — demuestra que un Pro absorbe la carta entera sin coste extra.

### 4.3 · RUTA NORTE → Premium (11 secciones)

Experiencias turísticas (Asturias · Cantabria · País Vasco · Galicia). Brief con 14 bloques → 11 secciones (`MAPEOS_Y_NIVELES.md` §6).

| # | Sección del nivel | De dónde sale |
|---|---|---|
| 1 | **Hero** con CTA WhatsApp | `Hero` + `CTA WhatsApp` **fusionados** |
| 2 | **Sobre nosotros** | `Introducción` + `Sobre Ruta Norte` **fusionadas** |
| 3 | **Servicios** | `Experiencias` (los 5 tipos) |
| 4 | **Confianza** | **`Cómo funciona`** — el proceso reescrito según §3 |
| 5 | **Ubicación** | `Destinos` (Asturias · Cantabria · País Vasco · Galicia) |
| 6 | **Sección ampliada** | `Experiencia destacada` |
| 7 | **Galería** | NUEVA — de las imágenes de la demo |
| 8 | **FAQ** | `FAQ` |
| 9 | **Blog (3 entradas)** | `Inspiración / Journal` — **ya lo tenía** |
| 10 | **Casos de éxito** | NUEVA — según §3: proceso y garantía |
| 11 | **Footer con aviso legal** | `Footer` + **hueco** del aviso legal (lo rellena el cliente) |

- **Cromo:** `Announcement Bar` · `Header`.
- **Se quita:** `Instagram` → es la capa SOCIAL, va a la demo de FULL.
- **Aviso legal ≠ privacidad:** el aviso legal va en Premium porque lo exige toda web pública (Ley 34/2002), no por el formulario. **Lo pone el cliente, no CAT CODE** (`MAPEOS_Y_NIVELES.md` §2).
- **Firma:** la única que ya traía blog — enseña el nivel más caro con la sección más difícil de copiar.

### 4.4 · ESTUDIO LUMEN → FULL (8 + calendario + rejilla IG)

Estética. Brief con 14 bloques (`MAPEOS_Y_NIVELES.md` §7).

**La landing, en grado Pro (8):**

| # | Sección del nivel | De dónde sale |
|---|---|---|
| 1 | **Hero** | `3. Hero` — CTA *"Reserva tu cita por WhatsApp"* |
| 2 | **Sobre nosotros** | `4. Intro` + `10. About Studio` **fusionadas** |
| 3 | **Servicios** | `5. Services` — Cuidado facial · Pelo · Manicura · Cejas & Mirada |
| 4 | **Confianza** | `9. Experience` reescrita según §3 |
| 5 | **Ubicación** | NUEVA |
| 6 | **Sección ampliada** | `6. Featured Service` |
| 7 | **Galería** | `7. Results` + `11. Gallery` **fusionadas** |
| 8 | **FAQ** | `13. FAQ` |

**Las dos capas que la hacen FULL:**

| Capa | Qué es | Estado |
|---|---|---|
| **WEEKLY** | Calendario editorial: 5 piezas/semana | **No existe — es lo más caro que falta** (`05_DECISIONES_Y_PENDIENTES.md` #3, pendiente del CEO) |
| **SOCIAL** | Rejilla de Instagram | `8. Instagram Feed` ya está en el brief. **Estática: sin API** |

- **⚠️ Conflicto resuelto:** el backend (`PORTFOLIO_BRIEF_BACKEND.md` §4.2, payload `CitaEstudioLumen`) sigue con *"RESERVAR CITA"*. **Gana WhatsApp** (`MAPEOS_Y_NIVELES.md` §7.3). El payload pasa a ser la demostración del formulario del extra, en posición secundaria, con su badge.
- **Firma:** el único FULL — demuestra web + contenido + redes coordinados (199 € vs 257 € por separado).

---

## 5. Reglas transversales de construcción

1. **Badge de demo visible** en las 4: son demostraciones conceptuales. **Toda marca cuelga de `NEXT_PUBLIC_DEMO_MODE`** — ninguna se escribe a mano.
2. **Imágenes** en `/public/images/<proyecto>/`; overlays y texto los añade Frontend. **Solo IA** (decisión del CEO, 2026-10-05): ningún banco de imágenes.
3. **WhatsApp** solo con `createWhatsAppUrl()`; mensaje predefinido según el brief de cada demo.
4. **Formulario (si aparece):** sistema de 3 avisos — **badge** `EXTRA · a presupuestar` sobre el título · **texto visible** *"Demostración. Este formulario no envía nada a ningún sitio."* · **tooltip** con el porqué (texto largo en `MAPEOS_Y_NIVELES.md` §8).
5. **Se puede rellenar** y mantiene los estados demo; nunca se bloquea (bloqueado = "a medio hacer"). **Campos enmascarados** + botón "Rellenar con datos de ejemplo" (decisión del CEO, 2026-10-05): el formulario **no puede** recoger un dato real de nadie.
6. **Footer con panel de nivel** (`MAPEOS_Y_NIVELES.md` §9): qué nivel es, qué incluye, qué no, cuánto cuesta el siguiente escalón, y enlace a la demo siguiente (*"Este es tu nivel. El siguiente está aquí →"*).
7. **La confianza se demuestra con el proceso, no con números** (`MAPEOS_Y_NIVELES.md` §3): garantías con sus términos, proceso real, trabajo a la vista.
8. **🆕 2026-10-05 · Los personajes y las citas van marcados con crédito discreto** (`MAPEOS_Y_NIVELES.md` §3-bis): última línea del bloque, un punto menor, gris, tono informativo. **Formato de crédito, nunca de aviso.**

---

## 6. Checklist de aceptación (Definition of Done)

Por demo, todo en verde antes de darla por terminada:

- [ ] **Secciones exactas** del nivel (5 / 8 / 11 / 8+calendario+IG) — ni una más, ni una menos; el cromo no cuenta.
- [ ] **CTA principal = WhatsApp** vía `createWhatsAppUrl()` — cero `wa.me` en duro.
- [ ] **Badge de demo** visible en todas las vistas, **colgado de `NEXT_PUBLIC_DEMO_MODE`**.
- [ ] **🆕 Prueba social:** cualquier personaje, cita o ★★★★★ **lleva su crédito discreto de demo**. Cero resultados de negocio ("+5000 clientes", "98 % satisfacción", "+120 %") y cero plataformas citadas ("★★★★★ en Google Reviews"). Detalle: `MAPEOS_Y_NIVELES.md` §3.
- [ ] **Cero datos reales**: sin WhatsApp, clientes, reservas ni citas reales — **y sin teléfono, email, URL ni enlace externo** (`MAPEOS_Y_NIVELES.md` §3-ter).
- [ ] **Formulario** (donde aparezca): 3 avisos completos, estados `idle → loading → success/error`, `success` **dice que es demo** con el copy exacto de `MAPEOS_Y_NIVELES.md` §8, **campos enmascarados** y botón "Rellenar con datos de ejemplo". **Casa Nora: badge reforzado.**
- [ ] **Footer con panel de nivel** + enlace a la demo siguiente (las 4 enlazan entre sí en orden de precio).
- [ ] **Imágenes** desde `/public/images/<proyecto>/`, sin texto ni marca de agua en origen; overlays hechos. **Todas de IA.**
- [ ] **Responsive** en móvil (el portfolio se mira en el teléfono — sin hover como única vía).
- [ ] **Identidad correcta** según `IDENTIDAD_VISUAL_DE_CADA_DEMO.md` (paleta y tipografía de esa demo, no las de otra).
- [ ] **Sin API externas**: sin Instagram, sin email, sin base de datos.
- [ ] **Imágenes IA sin gente identificable como "cliente real"** y coherentes con el negocio.
- [ ] **🆕 Ninguna marca de demo escrita a mano en el HTML** — todo pasa por el flag (`01_BACKEND/PORTFOLIO_BRIEF_BACKEND.md` §2.1).

---

## 7. Precios y servicios (resumen)

> **Fuente única y canónica: `01_COMERCIAL/PRECIOS.md` (v2 · 2026-09-29 · CERRADO).** Si este resumen y el catálogo discrepan, **manda el catálogo**. Aquí solo se copia lo mínimo para que quien construye las demos entienda qué representa cada una. ✅ **Errata corregida el 2026-10-05 (orden del CEO):** la columna "Incluye" del Pro de `PRECIOS.md:36` sumaba 5+5=10 donde decía 8 — **mandaba `PRECIOS.md` §2.2** — y hoy lista **3 secciones nuevas: galería, testimonios, FAQ** (= 5+3=8).

### 7.1 · CUSTOM — Tu landing

| Nivel | Setup | Mensual | Secciones | Entrega |
|---|---|---|---|---|
| **Custom Basic** | **149 €** | **19 €/mes** | 5 | 48-72 h |
| **Custom Pro** ★ MÁS ELEGIDO | **249 €** | **29 €/mes** | 8 | 5-7 días |
| **Custom Premium** | **449 €** | **49 €/mes** | 11 | 7-10 días |

- **Sin formulario en ningún nivel** — el contacto es WhatsApp.
- **Stack de producción:** Astro + Tailwind en Vercel (las demos, por decisión del CEO, van en Next.js — §1).

### 7.2 · WEEKLY — Contenido (FB + IG)

| Nivel | Mensual | Piezas |
|---|---|---|
| Basic | **59 €** | 3/semana |
| Pro ★ | **109 €** | 5/semana |
| Premium | **159 €** | 7/semana |

### 7.3 · SOCIAL — Redes (FB + IG)

| Nivel | Mensual | Piezas |
|---|---|---|
| Basic | **79 €** | 3/semana |
| Pro ★ | **119 €** | 5/semana |
| Premium | **179 €** | 7/semana + 1 Reel/mes |

### 7.4 · FULL — Todo conectado

| | |
|---|---|
| **FULL** ★ RECOMENDADO | **199 €/mes**, setup incluido |
| Equivale a | Custom Pro + Weekly Pro + Social Pro |
| Por separado | 257 €/mes → **ahorro 58 €/mes (22,6 %)**; año 1: 2.388 € vs 3.333 € |

### 7.5 · Add-ons relevantes a las demos

| Extra | Precio |
|---|---|
| Cambio de fotos / retoque de textos | **Incluido** |
| Entrada de blog · sección nueva · idioma extra | 79 € · 129 € · 119 € |
| **Formulario + páginas legales** | **A presupuestar** (el extra de las 4 demos) |
| Rediseño / nueva dirección | A presupuestar |

### 7.6 · Cómo se usan estos precios EN las demos

- El **panel de nivel del footer** (§5.6) muestra el precio de **su** nivel y del siguiente escalón.
- El badge del formulario dice **"a presupuestar"**, nunca un número.
- **Las demos no fijan precios de clientes** (`MAPEOS_Y_NIVELES.md` §11): son ejemplos de portfolio.

---

## 8. Relacionado

`MAPEOS_Y_NIVELES.md` (manda) · `00_LEEME_GLOBAL.md` · `01_COMERCIAL/PRECIOS.md` (v2) · `01_BACKEND/PORTFOLIO_BRIEF_BACKEND.md` · `02_FRONTEND/PORTFOLIO_BRIEF_FRONTEND.md` · `03_SOCIAL_MEDIA/PORTFOLIO_BRIEF_SOCIAL.md` · `00_REGISTRO/CONTACTO_Y_DATOS_EN_LANDINGS.md` (§3 add-on) · `00_REGISTRO/STACK_TECNOLOGICO_v2.md` · `Cambios Listos para Actualizar/05_DECISIONES_Y_PENDIENTES.md` (#3 calendario WEEKLY) · **canónico: `UNIFICADO/09_PORTFOLIO/DEMOS/`**
