# TALLER RECAMBIOS — LANDING PAGE

**Demo nueva · PROYECTO DEMO COMPLETO v1.0**
Especificación maestra para construir con OpenCode + IA.

> **⚠️ Stack histórico (Next.js/React).** El estándar actual de las landings de cliente es **Astro + Tailwind CSS en Vercel** (decisión del 2026-09-27). Este brief se conserva como registro del stack con el que se concibió la demo: **no se reescribe todavía**. El demo nuevo en Astro se construirá aparte, y **este es el candidato natural para ser esa plantilla** — es el más pequeño de los cuatro.

> **Nivel comercial: CUSTOM Basic · 5 secciones · 149 € + 19 €/mes.**
> Estructura y secciones según `UNIFICADO/09_PORTFOLIO/DEMOS/MAPEOS_Y_NIVELES.md` §4.
> **No lleva formulario de contacto:** el CTA es un botón de WhatsApp. El formulario que aparece es la **demostración del extra**, y va marcado como tal (§8).

---

# 1. SOURCE OF TRUTH

| Campo | Valor |
|---|---|
| Nombre del proyecto | **TALLER RECAMBIOS** |
| Tipo | Taller de reparación de bicicletas |
| Ubicación conceptual | Sevilla |
| Nivel | **CUSTOM Basic — 5 secciones** |
| Precio del nivel | 149 € setup + 19 €/mes |
| Badge de demo | **Obligatorio, visible: "Proyecto conceptual"** |
| Contacto | **Botón de WhatsApp + teléfono + horario.** Sin formulario propio |

---

# 2. OBJETIVO DE LA LANDING

1. Demo para el portafolio de Cat Code.
2. **Ejemplo del nivel BASIC del catálogo** — es el escalón de entrada.
3. Plantilla reutilizable para talleres, panaderías y negocios con oferta corta.
4. Demostrar que 149 € da una landing completa y no "una sección".
5. **Plantilla del demo en Astro** cuando se construya (`STACK_TECNOLOGICO_v2.md §7.5`).

**Lo que esta landing tiene que demostrar por encima de todo:** que un negocio cuya oferta cabe en cinco líneas **no necesita una web grande para vender**, y que una web pequeña puede estar bien hecha.

---

# 3. CONCEPTO DE MARCA

## Tagline

> **Tu bici, como nueva.**
> *(o: "Reparamos lo que importa. Desde 2019 en el barrio.")*

## Descripción

> Taller Recambios es un taller de bicicletas conceptual de Sevilla. Reparamos y mantenemos bicicletas de ciudad, montaña y carretera, con trabajo a mano, recambios de calidad y una garantía clara: si no queda bien, la vuelvo a hacer.

---

# 4. AUDIENCIA

## El cliente real

No viene a mirar una web. Viene porque:

- La bici se le ha roto y **necesita saber si la pueden arreglar**.
- Va al taller de siempre y quiere **volver a ir al que lo tratan bien**.
- Ha visto un precio en Instagram y quiere confirmar.

**Lo que necesita del sitio, en orden:** poder escribir y que le contesten. **WhatsApp es el canal de producción, no una alternativa.** En un taller el cliente vuelve el mismo, con la misma bici. El botón de WhatsApp es la función principal de la página, no un añadido.

---

# 5. PROPUESTA DE VALOR

```text
Reparamos bien.
Si no queda bien, la volvemos a hacer.
```

Texto:

> Un taller de barrio se juega la reputación cada día. Por eso aquí no hay sorpresas: te decimos qué cuesta antes de empezar, y si el trabajo no te convence, lo volvemos a hacer sin discutir.

---

# 6. ESTRUCTURA — CUSTOM BASIC, 5 SECCIONES

```text
01. Announcement Bar      ← cromo
02. Header                ← cromo
03. Hero                            § 1
04. Sobre nosotros                  § 2
05. Servicios                       § 3
06. Confianza                       § 4
07. Ubicación                       § 5
08. Footer                          ← cromo
09. WhatsApp Floating Button        ← cromo
```

**Cuentan 5 secciones de contenido: Hero, Sobre nosotros, Servicios, Confianza, Ubicación.**
Barra de anuncio, header, footer y botón flotante son cromo y existen en todos los niveles.

**Lo que NO lleva, y por qué — esto es lo que hace que sea BASIC:**

| No lleva | Por qué | En qué nivel está |
|---|---|---|
| **Galería** | Es de Pro. En un taller de barrio las fotos de trabajos reparados no son lo que vende. | Pro |
| **FAQ** | Es de Pro. | Pro |
| **Formulario** | Ningún nivel lo incluye. | **Extra** |
| **Blog** | Es de Premium. | Premium |
| **Aviso legal en el footer** | Es de Premium, y además lo pone el cliente. | Premium |

---

# 7. CONTENIDO DE CADA SECCIÓN

## § 1 · HERO

```text
TALLER RECAMBIOS

Tu bici, como nueva.

Reparamos y mantenemos bicicletas de ciudad, montaña y carretera.
Trabajo a mano y recambios de calidad. Si no queda bien, la vuelvo a hacer.

[ PEDIR PRESUPUESTO POR WHATSAPP ]
```

CTA principal: **"Pedir presupuesto por WhatsApp"** — es el del catálogo (Hero con CTA de WhatsApp).
CTA secundario, opcional: "Ver servicios y precios" (ancla a § 3).

**El CTA va siempre por `createWhatsAppUrl()`. Nunca un enlace `wa.me` hardcodeado.**

Mensaje predefinido: `Hola, quiero presupuesto para mi bici.`

## § 2 · SOBRE NOSOTROS

Título:

> **Quién está detrás de las llaves**

Texto:

> Llevamos desde 2019 en el mismo barrio, con el mismo criterio: si una reparación no está justificada, te lo decimos. No cambiamos piezas por vender recambios.

Datos que puede llevar (sin inventar prueba social):

- Año de apertura · `2019`
- Barrio / dirección abreviada
- Horario

## § 3 · SERVICIOS — con precio publicado

Título:

> **Lo que hacemos, y lo que cuesta**

**Punto clave de esta demo:** los precios **publicados**. Un taller de barrio los enseña, y eso llena la sección con contenido real y verificable. Es contenido honesto, no prueba social.

| Servicio | Precio | Nota |
|---|---|---|
| Revisión completa | 35 € | Frenos, transmisión, ruedas, luces |
| Cambio de cámara y cubierta | 40 € | Material incluido en el precio |
| Parche de pinchazo | 25 € | En caliente, si la cámara es de caucho |
| Cambio de cable y maneta | 30 € | Mountain y carretera |
| Ajuste de frenos de disco | 35 € | Incluye bleed |
| Montaje de bici completa | 60 € | A partir de componentes existentes |

**Formato de cada item:** nombre · precio · una línea de qué incluye.
**Precio visible en móvil. Nada de "consultar".**

> ⚠️ **Estos precios son contenido inventado del proyecto conceptual.** Es correcto: son el contenido de una demo. Lo que no se permite es inventar prueba social — reseñas, número de clientes, satisfacción (§9).

## § 4 · CONFIANZA — la garantía

**Esta sección sustituye a las reseñas, y es deliberado.** La Demo Data Rule prohíbe inventar prueba social (`00_LEEME_GLOBAL.md:108` (regla 5 — ahora tres categorías)). En un taller, la confianza real no son cinco estrellas: es **qué pasa si salen mal las cosas**.

Título:

> **La garantía, escrita**

Texto:

> Si una reparación no te convence, **la volvemos a hacer sin discutir**. Si el problema vuelve a aparecer por nuestra parte, no te cobramos la segunda vez.
>
> El precio que te damos antes de empezar es el precio que pagas. Sin sorpresas al recoger.

Los tres puntos de confianza del oficio, que son verificables y no inventados:

| En lugar de ★★★★★ | Se enseña |
|---|---|
| Reseñas de Google | **Garantía por escrito** con sus condiciones |
| "+500 clientes" | **Precio cerrado antes de empezar** |
| "20 años de experiencia" | **Desde 2019 en el mismo barrio** — un dato, no una promesa |

## § 5 · UBICACIÓN

Contenido:

- Dirección
- Horario
- Teléfono **visible** (alternativa para quien no use WhatsApp)
- Cómo llegar
- Enlace a mapa

> El teléfono visible **no es opcional.** Es la alternativa a WhatsApp para quien no lo tenga, y el catálogo lo pide en los tres niveles (`PRECIOS.md:40`).

---

# 8. EL FORMULARIO — demostración del EXTRA

**Ningún nivel de CUSTOM lleva formulario.** El formulario de esta demo es la **demostración del add-on "Formulario + páginas legales · a presupuestar"**, y va marcado como tal.

| Campo | Tipo | Requerido |
|---|---|---|
| Nombre | text | ✅ |
| Tipo de bici | select: Ciudad · Montaña · Carretera · Eléctrica | ✅ |
| Qué necesita | textarea | ✅ |
| Teléfono | tel | opcional |

**Estados:** `idle → loading → success`, **nunca envío real** (`BRIEF BACKEND.md:189`).

### Las tres capas del aviso

| # | Dónde | Qué pone |
|---|---|---|
| 1 | **Badge visible** sobre el título del formulario | `EXTRA · a presupuestar` |
| 2 | **Texto visible dentro del formulario** | `Demostración. Este formulario no envía nada a ningún sitio.` |
| 3 | **Tooltip ℹ** | ver abajo |

**Tooltip corto** (`title=` del icono):

> No viene incluido en tu nivel: el contacto es WhatsApp. Pídenoslo como extra.

**Tooltip largo** (popover):

> **El formulario no va incluido en este nivel.**
> El contacto de esta landing es un botón de WhatsApp: te escriben y presupuesto ahí mismo, sin esperas. Un formulario te obligaría a redactar tu propia política de privacidad y la de cookies, y a mantenerlas al día cada vez que cambies algo.
> Si lo quieres, es un extra: tú nos das el texto legal redactado y nosotros lo montamos. Esto es una demo de cómo se vería.

**El formulario es interactivo**, no bloqueado: un formulario bloqueado se leería como un extra a medio hacer, y un add-on a presupuestar no puede parecer a medio hacer. La honestidad la pone el aviso, no el bloqueo.

---

# 9. REGLAS INFRANQUEABLES

1. **Badge visible de "Proyecto conceptual"** en las cuatro demos, incluida esta.
2. **Demo Data Rule.** Nada de ★★★★★, ni "+500 clientes", ni "98 % satisfacción", ni reseñas inventadas. Ver §4.
3. **Sin formulario activo.** El CTA es WhatsApp. El formulario es demo del extra, con su badge.
4. **Sin envío real.** Los estados son demo.
5. **WhatsApp siempre vía `createWhatsAppUrl()`.** Nunca `wa.me` hardcodeado. Número `WHATSAPP_DEMO_NUMBER` compartido.
6. **Sin números de WhatsApp reales**, sin clientes reales, sin reservas reales.
7. **Teléfono visible siempre**, como alternativa a WhatsApp.
8. **Imágenes sin texto, sin logo, sin marca de agua** — los overlays los agrega Frontend.

---

# 10. FOOTER — panel de nivel

El footer es cromo y no cuenta como sección. Lleva el **panel de nivel**, que convierte "falta" en "está explicado y con precio":

```text
CUSTOM Basic · 149 € + 19 €/mes

Incluye: 5 secciones · hero con WhatsApp · sobre nosotros ·
servicios · confianza · ubicación · hosting · responsive · SEO básico ·
1 ronda de cambios

No incluye: galería y FAQ → Custom Pro (+100 €)
            formulario → extra, a presupuestar
            blog y aviso legal → Premium

¿Ver el siguiente nivel? → Casa Nora
```

**El footer NO lleva aviso legal en Basic.** Eso es lo que añade Premium (`PRECIOS.md:37`), y además lo pone el cliente, no CAT CODE.

---

# 11. CHECKLIST

- [ ] Badge "Proyecto conceptual" visible
- [ ] 5 secciones, ni una más
- [ ] Precios publicados en Servicios, visibles en móvil
- [ ] Confianza = garantía, **cero prueba social**
- [ ] CTA de WhatsApp por `createWhatsAppUrl()`
- [ ] Teléfono visible en Ubicación
- [ ] Formulario con badge + aviso visible + tooltip, estados demo
- [ ] Panel de nivel en el footer
- [ ] Enlace al siguiente nivel
- [ ] Sin envío real, sin datos reales, sin reseñas

---

# 12. IDENTIDAD VISUAL — PALETA Y TIPOGRAFÍA

> **Añadido el 2026-10-02** (decisión del CEO del 2026-09-30). Las otras tres demos tenían este bloque y esta no. Sin identidad, el frontend de la 4.ª demo queda con placeholders. Es conceptual: los colores y las fuentes son contenido de la demo, igual que los precios de §3.

## Paleta

```text
#F2F3F4   fondo — gris acero claro
#1B1F24   texto y superficies oscuras — grafito
#C2410C   acento primario — naranja taller
#27548D   acento secundario — azul acero
#FFFFFF   superficies claras
#D7DBDF   bordes y suavizados
```

**Por qué esta paleta:** un taller se lee con materiales, no con decoración. El grafito y el gris acero son el metal de la bici y el banco de trabajo; el naranja es el color de las herramientas del oficio y marca los CTA; el azul acero da el contraste frío que evita que el conjunto parezca un restaurante. Cero tonos pastel: eso es de Pro hacia arriba, y aquí no procede.

## Tipografía

## Heading

```text
Archivo
```

o:

```text
Barlow Condensed
```

---

## Body

```text
Work Sans
```

o:

```text
Inter
```

---

Mi recomendación:

# Archivo

## Body

# Work Sans

**Por qué:** Archivo tiene el peso de un rótulo industrial sin ser una fuente de display agresiva, y en los seis precios de §3 necesita leerse de un vistazo en el móvil. Work Sans es la pareja natural: misma anchura de trazo, más calor para el texto corrido.

## Logo / wordmark

- Concepto: `TALLER RECAMBIOS` en Archivo Expanded o semibold, sin icono — un taller de barrio no necesita un logotipo dibujado, necesita un rótulo limpio.
- Versión de una línea para el header; nada de isotipos hasta que el cliente pida uno real.

## Favicon

- Inicial `T` sobre el naranja `#C2410C`, o una llave inglesa estilizada en SVG propio. Nada de emojis como favicon.

## Botones

- Primario: fondo `#C2410C`, texto `#FFFFFF`, radio pequeño (4–6 px) — los CTA de un taller son utilitarios, no redondeados.
- Secundario: borde `#1B1F24` sobre `#FFFFFF`, texto `#1B1F24`.
- Estados hover/focus/active definidos desde el inicio (el sistema de estados lo exige el `CAT_CODE_DEMO_SYSTEM_v1.0.md` §21).

## Iconografía

- Set de línea de un solo trazo (teléfono, mapa, reloj, llave, rueda). El mismo set en toda la demo: un icono distinto por sección rompe la identidad.

## Tratamiento de imágenes

- Las imágenes las genera el pack de prompts (`03_SOCIAL_MEDIA/DEMO01_TALLER_RECAMBIOS_PROMPTS_IA.md`); los overlays de texto y logo los agrega Frontend (regla 9 de §9).
- Formato WebP, relación 16:9 para el hero de escritorio y 4:5 para el de móvil.

---

> **Este archivo es canónico** (decisión del CEO, 2026-09-30). Origen histórico con la misma referencia: `Proyectos/Portafolio/DEMO01_TALLER_RECAMBIOS_LANDING.md` — **no editar ahí.**

Relacionado: `UNIFICADO/09_PORTFOLIO/DEMOS/MAPEOS_Y_NIVELES.md` §4 · `UNIFICADO/09_PORTFOLIO/DEMOS/00_LEEME_GLOBAL.md` · `UNIFICADO/01_COMERCIAL/PRECIOS.md` §2 · `UNIFICADO/00_REGISTRO/CONTACTO_Y_DATOS_EN_LANDINGS.md` · `PORTFOLIO_BRIEF_BACKEND.md` §4 (contrato `PresupuestoRecambios`) · `PORTFOLIO_BRIEF_FRONTEND.md`