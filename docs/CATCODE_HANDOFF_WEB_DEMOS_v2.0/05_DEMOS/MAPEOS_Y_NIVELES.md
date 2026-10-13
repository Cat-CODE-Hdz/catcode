# MAPEO DE LAS 4 DEMOS A LOS NIVELES

**Versión:** v2 · **2026-09-30** · **Estado:** CERRADO (decisiones del CEO del 2026-09-30)
**Sustituye a:** v1 (3 demos) y la tabla "Demos a construir" de `00_LEEME_GLOBAL.md:73-77`, que mapeaba por **paquete** (CUSTOM / SOCIAL / FULL). Esa tabla **no se borra**: queda como registro. **Este documento manda.**
**Alcance:** qué nivel demuestra cada demo, qué secciones lleva cada una, cómo se presenta el formulario del add-on y qué se toca en los briefs.

---

## 1 · La escalera completa

Cuatro demos: **una por nivel de CUSTOM, más el paquete.**

| # | Demo | Nivel | Secciones | Setup | Mensual | Badge |
|---|---|---|---|---|---|---|
| 1 | **TALLER RECAMBIOS** *(nuevo)* | **Custom Basic** | **5** | 149 € | 19 €/mes | — |
| 2 | **CASA NORA** | **Custom Pro** | **8** | 249 € | 29 €/mes | ★ **MÁS ELEGIDO** |
| 3 | **RUTA NORTE** | **Custom Premium** | **11** | 449 € | 49 €/mes | — |
| 4 | **ESTUDIO LUMEN** | **FULL** | 8 + calendario editorial + rejilla IG | **incluido** | **199 €/mes** | **RECOMENDADO** |

**FULL = CUSTOM Pro + WEEKLY Pro + SOCIAL Pro** (`PRECIOS.md` §5). Por eso Estudio Lumen lleva una landing **en grado Pro** más las dos capas de contenido.

### Por qué cuatro y no tres

Porque un nivel sin demo es un nivel que no se puede enseñar. El eje de tres demos que hubo antes (Basic / Pro / Premium) dejaba a **Estudio Lumen** sin sitio propio: lo convertía en "un Pro más" y perdía la demostración de **FULL**, que es lo que el catálogo recomienda. Con cuatro, cada línea del catálogo tiene su caso y **no se borra ninguna demo existente**.

### Por qué el taller y no reutilizar Estudio Lumen para el Basic

Se evaluó poner Estudio Lumen en Basic y subir Casa Nora a Pro. **Se descartó por un motivo concreto:** Estudio Lumen es un negocio cuyo argumento de venta es **el escaparate** (resultados, galería). En Basic **no hay galería** — es de Pro — y un centro de belleza sin resultados no tiene argumento. **Casa Nora sí encaja en 5 secciones porque su oferta es una lista, no un escaparate.** Un taller también. Esa es la razón real de que el Basic sea un negocio nuevo y no uno de los tres.

---

## 2 · Qué es exactamente cada nivel

Fuente: `01_COMERCIAL/PRECIOS.md` §2 y §2.2.

| Nivel | Secciones | Lista |
|---|---|---|
| **Basic** | **5** | Hero con CTA de WhatsApp · Sobre nosotros · Servicios · Confianza · Ubicación |
| **Pro** | **8** | Todo lo de Basic + **Sección ampliada · Galería · FAQ** |
| **Premium** | **11** | Todo lo de Pro + **Blog (3 entradas) · Casos de éxito · Footer con aviso legal** |

**Cromo — existe en todos los niveles y no se cuenta:** barra de anuncio, header, footer, botón de WhatsApp flotante.

### ⚠️ "Footer con aviso legal" NO contradice la decisión del 2026-09-27

Esta confusión se ha producido ya y volverá a producirse, así que queda escrita:

| | Qué es | Qué lo dispara |
|---|---|---|
| **Política de privacidad** | Cómo se tratan tus datos personales | **Un formulario** (y las cookies) |
| **Aviso legal** | Quién responde por el sitio: titular, NIF/CIF, domicilio, y a veces el crédito de autoría | **Cualquier web pública.** Ley 34/2002 |

La decisión del 2026-09-27 quitó **la política de privacidad, la de cookies y el banner**. **No quitó el aviso legal**, que no depende de que haya formulario. Por eso `PRECIOS.md:37` puede venderlo en Premium sin contradecir nada.

> **Y un detalle que importa: el aviso legal lo pone el cliente, no CAT CODE.** Mismo patrón que el add-on del formulario (§3) — CAT CODE prepara el hueco en el footer, el cliente mete sus datos legales. Si CAT CODE lo redacta, deja de ser responsabilidad del cliente.

### ✅ Bug aritmético en `PRECIOS.md:36` — corregido el 2026-10-05

La columna "Incluye" del Pro listaba **cinco** añadidos sobre los 5 de Basic → **5 + 5 = 10, no 8**. Y `§2.2:52` describe el mismo salto con **tres**, que sí cuadra. Además **"testimonios" duplicaba "confianza"**, que Basic ya trae.

**El que manda es `§2.2`**, porque es el que justifica el salto de precio. **Resuelto el 2026-10-05 (orden del CEO):** la fila Pro pasó a *"3 secciones nuevas: galería, testimonios y FAQ"* (5+3=8), con "sección ampliada" y "beneficios" como extras sin contar. La duplicación aparente con "confianza" no existe: `02_SERVICIOS/CUSTOM.md:23` dice que Basic **no incluye** galería, testimonios ni FAQ.

---

## 3 · La confianza se demuestra con el proceso, no con los números

> **Decisión del CEO, 2026-10-05.** Esta sección se reescribió a **tres columnas** para admitir un caso que antes estaba prohibido sin matices: **la demo debe parecer una web real.** Antes la columna intermedia no existía y todo testimonial caía en "prohibido". Ahora existe, **con la condición de que la marca viaje con el contenido** (§3-bis) y de que nada apunte a algo real (§3-ter).

**El catálogo vende "Confianza" en Basic, "Testimonios" en Pro y "Casos de éxito" en Premium. Las cuatro demos son conceptuales y lo declaran.**

### Cómo se resuelve

| En lugar de | Se enseña |
|---|---|
| ★★★★★ · "4,9 sobre Google" | **Ahora sí: ★★★★★ y nota, dentro de un bloque marcado** (§3-bis) |
| "+5000 clientes" | **El proceso real**: cómo se trabaja, qué se entrega, en qué plazo |
| Testimonios con nombre y foto | **Personajes ficticios con nombre y foto, marcados** (§3-bis) |
| "98 % satisfacción" | La garantía por escrito, con sus términos y quién responde |

**No es un apaño, sigue siendo mejor venta.** Un negocio de barrio no puede citar 5.000 clientes. Lo que puede enseñar es *cómo trabaja quien le va a hacer la web*, que es lo único comparable entre proveedores. Y ahora además **puede enseñar cómo se ve una web de verdad**, con su bloque de testimonios, porque el bloque va marcado.

### La línea que separa lo permitido de lo prohibido

**Tres categorías, no dos:**

| Permitido | **Permitido SOLO si va marcado (§3-bis)** | Prohibido |
|---|---|---|
| Nombre, dirección, ~~teléfono~~ *(⚠️ el teléfono no: ver §3-ter)*, horario | **Personaje ficticio con nombre y foto** — sección de equipo | ~~"450 clientes atendidos"~~ |
| Precios de carta y de servicios | **Cita de un personaje ficticio**, atribuida | ~~"+120 % consultas"~~ · ~~"98 % satisfacción"~~ |
| Años de actividad (*"en el barrio desde 2019"*) | **Valoración con estrellas y nota** (★★★★★ · 4,9 de media) | ~~"en Google Reviews"~~ · ~~"según Trustpilot"~~ |
| Garantías con sus términos | | ~~Testimonios atribuidos a un cliente real~~ |

**Las tres diferencias entre la segunda y la tercera columna, que son las que importan:**

| | Permitido si va marcado | Prohibido |
|---|---|---|
| **El sujeto** | Un **personaje inventado**: Conchi, la peluquera | Un **negocio**: Peluquería Ana como empresa atendida |
| **Lo que afirma** | Que **alguien dijo** algo, y **su nota** | Que **el negocio consiguió** un resultado medible |
| **La fuente** | Ninguna, y se dice | Una fuente real: Google, Trustpilot, Facebook |

> ⚠️ **Las estrellas sí; la plataforma citada no.** ★★★★★ y "4,9 de media" son verosímiles y se marcan. **"★★★★★ en Google Reviews"** afirma que existe una reseña real que cualquiera puede ir a comprobar — y eso no es realismo de maqueta, es una afirmación sobre algo que existe en el mundo. Se pone la nota, **no la plataforma**.

> 📌 **Esta tabla es solo para las demos.** En la web de un **cliente real**, la prueba social con nombre y foto **solo cabe con permiso escrito**, y sin permiso no se publica. Aquí no hay cliente real: hay un personaje inventado, y por eso puede aparecer. La diferencia no es el formato de la marca — es que **uno de los dos existe y el otro no**. Regla de la web real: `05_COPY/COPY_PRUEBA_SOCIAL.md`.

### 3-bis · La marca viaja con el contenido, no con la página

> **Decisión del CEO, 2026-10-05.** Requisito explícito: **la demo debe parecer una web real, y la marca de demo no puede romper el diseño.** De ahí las dos reglas.

**Un badge en el hero protege la página. No protege un bloque de testimonio que alguien recorta y manda por WhatsApp.** Si la marca vive solo en el chrome de la página, un recorte de la sección de testimonios es un testimonio falso sin marca. Por eso **la marca va dentro del bloque**.

#### Se escribe con formato de crédito, no con formato de aviso

| | Cómo se ve | Veredicto |
|---|---|---|
| ❌ **Aviso** | Cintillo de color, `⚠️ ATENCIÓN: esta demo no es real` | Grita, delata que es maqueta, **rompe el diseño** |
| ✅ **Crédito** | Última línea del bloque, tipografía un punto menor, gris | Se lee como pie de foto. **No parece un aviso y sigue estando** |

```text
★★★★★                                              ← valoración, diseño normal
"Nos cambió el negocio entero. En semanas."
Conchi · Peluquería Ana · Sevilla                     ← atribución, diseño normal
Personaje de una demo de portafolio de CAT CODE       ← LA MARCA: como pie de foto
```

**Normas de forma del crédito:**

| # | Regla | Por qué |
|---|---|---|
| 1 | **Última línea del bloque**, nunca arriba | Arriba interrumpe la lectura del testimonial; abajo se lee como firma |
| 2 | **Un punto menor y un gris más claro** que la atribución | Jerarquía: el testimonio manda, la marca acompaña |
| 3 | **Sin icono de alerta, sin color de alarma, sin fondo** | Un icono rojo convierte el crédito en aviso |
| 4 | **Tono informativo, nunca disculpa** | *"Personaje de una demo"*, no *"esto es inventado"* ni *"ficticio"* |
| 5 | **Texto fijo en las cuatro demos** | Que el visitor aprenda a leerlo una vez y sepa lo que significa |

#### Una sola fuente de verdad: `NEXT_PUBLIC_DEMO_MODE`

`01_BACKEND/PORTFOLIO_BRIEF_BACKEND.md` §2 ya define `NEXT_PUBLIC_DEMO_MODE=true`, que activa **de forma discreta** el badge "PROYECTO DEMO" *(«debe respetar la estética del proyecto»)*.

**Ese es el principio que ya estaba escrito y el que se aplica a todo lo de esta página.** Reglas:

- **Ninguna marca de demo se escribe en el HTML directamente.** Todas cuelgan del flag. Una sola fuente, un solo sitio donde apagarlo.
- Si una demo deja de ser demo (se convierte en proyecto de cliente), **se apaga en un sitio** y desaparecen todas las marcas.
- Especificación de las marcas discretas que cuelgan del flag: `01_BACKEND/PORTFOLIO_BRIEF_BACKEND.md` §2.

### 3-ter · Realista ≠ que apunte a algo real

> **Decisión del CEO, 2026-10-05.** La consigna es que la demo parezca lo más real posible. El riesgo que eso abre no es la estética: es que **una demo puede recibir una llamada de verdad.**

| ✅ Puede ser real — es contenido de la demo | ⛔ Nunca puede ser real — recibe tráfico |
|---|---|
| La cara, el nombre y el oficio del personaje | El **teléfono** (tlf fijo o móvil) |
| ★★★★★, la nota, la cita, la atribución | El **WhatsApp** → siempre vía `createWhatsAppUrl()` (`PORTFOLIO_BRIEF_BACKEND.md` §3) |
| Dirección: calle y ciudad reales | El **email** |
| Precios de carta, horarios, "desde 2019" | Cualquier **URL o enlace externo** |
| El diseño, los textos, el mapa de la zona | El **perfil de Google / pin de Maps** de un negocio que exista |
| La nota "★★★★★ · 4,9 de media" | La **cita de una plataforma**: "en Google Reviews" (§3) |

**El motivo, en concreto:** si aparece un teléfono real, alguien llama y es el dueño de un taller de verdad recibiendo llamadas de una web que no existe. **La regla 1 de `00_LEEME_GLOBAL.md` (`:100`) ya lo cubre para el WhatsApp; esto la generaliza a todo lo que puede recibir una llamada, un correo o una visita.**

> **Truco que no se hace:** usar el nombre y la dirección de un negocio **real** de la ciudad para dar verosimilitud. Se descarta. El daño posible (llamadas a un tercero, reseñas falsas sobre un tercero) no compensa ninguna ganancia de credibilidad.

---

## 4 · Taller Recambios → Basic (5) · NUEVO

Taller de bicicletas. **Sevilla.** Demo nueva, no existía brief.

| # | Sección | Contenido |
|---|---|---|
| 1 | **Hero** | Nombre, tagline, CTA **"Pide presupuesto por WhatsApp"** |
| 2 | **Sobre nosotros** | Quién trabaja ahí, desde cuándo, cómo trabaja |
| 3 | **Servicios** | Las 4-5 reparaciones **con precio publicado** (*"Revisión completa · 35 €"*) |
| 4 | **Confianza** | **La garantía: *"Si no queda bien, la vuelvo a hacer."*** |
| 5 | **Ubicación** | Dirección, horario, teléfono, mapa |

**Las dos decisiones que lo hacen funcionar:**

**Los precios publicados.** Un taller los enseña, y eso llena la sección con contenido real y verificable. Nada inventado.

**La garantía como Confianza.** Es lo que pide §3 sin inventar una sola cifra: en lugar de ★★★★★, **la garantía real del oficio**, que en un taller es exactamente eso. Un taller de barrio no necesita cinco estrellas para ser fiable; necesita que sepas qué pasa si te deja la bici mal.

**Además hace doble trabajo:** es la demo más barata de construir y sirve de **plantilla del demo en Astro**, que sigue pendiente en `STACK_TECNOLOGICO_v2.md §7.5`.

---

## 5 · Casa Nora → Pro (8)

Estructura actual: 15 bloques (`DEMO02_CASA_NORA_LANDING.md:221-244`).

| # | Sección del nivel | De dónde sale |
|---|---|---|
| 1 | **Hero** con CTA de WhatsApp | `03 Hero` — el CTA *"ver la carta"* vive aquí |
| 2 | **Sobre nosotros** | `04 Introducción` + `05 Filosofía` **fusionadas** |
| 3 | **Servicios = la carta** | `06 Platos destacados` (los 4 cards) **+ `09 La carta` absorbida** |
| 4 | **Confianza** | `07 Experiencia` reescrita según §3 |
| 5 | **Ubicación** | `11 Ubicación` |
| 6 | **Sección ampliada** | **NUEVA** — "De dónde viene lo que comemos": producto local, temporada, proveedores |
| 7 | **Galería** | `08 Galería` |
| 8 | **FAQ** | `12 FAQ` |

**Cromo:** `02 Header` · `14 Footer` (sin aviso legal) · `15 WhatsApp Floating Button`.
**Se quitan:** `01 Announcement Bar` · **`10 Reservas`** → pasa a **extra** con badge · `13 CTA Final` → al hero.

### La carta no se pierde: nunca fue una sección

En el brief original la carta **ya era un enlace**:

| Línea | Elemento |
|---|---|
| `:302` | `CONSULTA LA CARTA` ← **item del menú de navegación** |
| `:426` | `VER LA CARTA` ← CTA del hero |
| `:683` | `VER CARTA COMPLETA` ← CTA al final de la lista |

Y los platos son **4 cards** (`CARD 01`–`CARD 04`, `:577`–`:635`). El bloque `09. La carta` **era el destino de esos CTA**, no contenido desplegado. Por eso entra entera dentro de "Servicios" sin coste.

**Adónde apunta el CTA `VER CARTA COMPLETA`:** a **WhatsApp**, que es lo que hace un restaurante de verdad y refuerza la decisión del 2026-09-27. **Aplicado el 2026-09-30 en el brief:** el CTA es ahora `PEDIR MESA POR WHATSAPP`, vía `createWhatsAppUrl()` con el mensaje predefinido del §20 del brief.

---

## 6 · Ruta Norte → Premium (11)

Estructura actual: 14 bloques (`RUTA NORTE:168-187`).

| # | Sección del nivel | De dónde sale |
|---|---|---|
| 1 | **Hero** con CTA de WhatsApp | `Hero` + `CTA WhatsApp` fusionados |
| 2 | **Sobre nosotros** | `Introducción` + `Sobre Ruta Norte` **fusionadas** |
| 3 | **Servicios** | `Experiencias` (los 5 tipos) |
| 4 | **Confianza** | **`Cómo funciona`** — reescrita según §3: es el proceso, que es justo lo que se vende |
| 5 | **Ubicación** | `Destinos` (Asturias · Cantabria · País Vasco · Galicia) |
| 6 | **Sección ampliada** | `Experiencia destacada` |
| 7 | **Galería** | **NUEVA** — de las imágenes de la demo |
| 8 | **FAQ** | `FAQ` |
| 9 | **Blog (3 entradas)** | `Inspiración / Journal` — **ya lo tenía** |
| 10 | **Casos de éxito** | **NUEVA** — según §3, proceso y garantía |
| 11 | **Footer con aviso legal** | `Footer` + hueco del aviso legal del cliente |

**Cromo:** `Announcement Bar` · `Header`.
**Se quitan:** `Instagram` → es la capa SOCIAL, **no una sección de landing**. Se mueve a la demo de FULL.

**Ruta Norte es la que menos surgery necesita:** ya traía el Journal, que es lo más difícil de conseguir de otra forma.

---

## 7 · Estudio Lumen → FULL

Estructura actual: 14 bloques (`ESTUDIO LUMEN:1157-1174`).

### 7.1 · La landing, en grado Pro (8)

| # | Sección del nivel | De dónde sale |
|---|---|---|
| 1 | **Hero** | `3. Hero` — CTA *"Reserva tu cita por WhatsApp"* (`:143`) |
| 2 | **Sobre nosotros** | `4. Intro` + `10. About Studio` **fusionadas** |
| 3 | **Servicios** | `5. Services` — Cuidado facial · Pelo · Manicura · Cejas & Mirada |
| 4 | **Confianza** | `9. Experience` reescrita según §3 |
| 5 | **Ubicación** | **NUEVA** |
| 6 | **Sección ampliada** | `6. Featured Service` |
| 7 | **Galería** | `7. Results` + `11. Gallery` **fusionadas** |
| 8 | **FAQ** | `13. FAQ` |

### 7.2 · Las dos capas de contenido que hacen que sea FULL

| Capa | Qué es | Estado |
|---|---|---|
| **WEEKLY** | Calendario editorial: 5 piezas/semana | **No existe.** Es lo más caro de construir de las cuatro demos |
| **SOCIAL** | Rejilla de Instagram gestionada | `8. Instagram Feed` ya está en el brief. Se mueve aquí |

### 7.3 · ⚠️ Conflicto entre dos briefs que hay que resolver

El proyecto ya resolvió su CTA a WhatsApp (`ESTUDIO LUMEN:143` *"RESERVA TU CITA POR WHATSAPP"*, y `:161 / :192 / :209`), pero `01_BACKEND/PORTFOLIO_BRIEF_BACKEND.md` **§4.2** sigue definiendo el payload `CitaEstudioLumen` con origen *"RESERVAR CITA del hero/CTA"*. *(Referencia re-anclada el 2026-10-05: el documento decía `:156-170` y la inserción del §2.1 desplazó el bloque a `:192-207`. Citar por §4.2 evita que vuelva a caducar.)*

**Gana WhatsApp.** El CTA es un botón de WhatsApp. El payload pasa a ser **la demostración del formulario del extra**, en posición secundaria, con su badge.

---

## 8 · El formulario: el extra, igual en las cuatro

**Ningún nivel incluye formulario** (`PRECIOS.md:40`). Solo existe como **add-on a presupuestar** (`PRECIOS.md` §6.2 · `00_REGISTRO/CONTACTO_Y_DATOS_EN_LANDINGS.md` §3).

Los formularios ya están definidos en `PORTFOLIO_BRIEF_BACKEND.md §4` "sin envío real", y `00_LEEME_GLOBAL.md:105` (regla 4) obliga a los estados `idle → loading → success/error`. Faltaba **etiquetarlos**.

### El aviso va en tres sitios

> Un tooltip solo es la mitad: **exige hover, y en móvil no hay hover** — y el portfolio se mira en el teléfono. Un disclaimer invisible no vende nada.

| # | Dónde | Qué pone |
|---|---|---|
| 1 | **Badge visible** sobre el título | `EXTRA · a presupuestar` |
| 2 | **Texto visible dentro** | `Demostración. Este formulario no envía nada a ningún sitio.` |
| 3 | **Tooltip ℹ** | el bloque largo de abajo |

**Tooltip corto** (`title=`): *No viene incluido en tu nivel: el contacto es WhatsApp. Pídenoslo como extra.*

**Tooltip largo** (popover):

> **El formulario no va incluido en este nivel.**
> El contacto de esta landing es un botón de WhatsApp: te escriben y reservas ahí mismo, sin esperas. Un formulario te obligaría a redactar tu propia política de privacidad y la de cookies, y a mantenerlas al día cada vez que cambies algo.
> Si lo quieres, es un extra: tú nos das el texto legal redactado y nosotros lo montamos. Esto es una demo de cómo se vería.

**El último párrafo es el que importa: no es una disculpa, es la oferta.**

### Comportamiento: interactivo

Los cuatro formularios **se pueden rellenar** y mantienen los estados demo. Al enviar, el estado `success` **dice que es una demostración**.

**Por qué no se bloquean:** un formulario bloqueado se lee como *"está a medio hacer"*, y un extra a presupuestar no puede parecer a medio hacer.

#### 🆕 2026-10-05 · El formulario no puede aceptar datos reales

Decisión del CEO. Antes esta página solo decía que el `success` declarara la demo. Faltaba la otra mitad, y es la que importa: **una demo puede recibir un email real.** Quien rellene el formulario por curiosidad pone sus datos de verdad, no datos inventados. Y si le decimos *"mensaje enviado"*, hemos perdido un lead sin rastro y le hemos mentido en la cara.

| | |
|---|---|
| ❌ **Lo que se descartó** | `success` → *"Gracias, hemos recibido tu mensaje"* + campos libres. Miente sobre el envío, y recoge datos personales que CAT CODE no puede tratar: sin base legal, sin aviso y sin plazo de conservación |
| ✅ **Lo que se hace** | `success` **declarando la demo** + **campos que no pueden producir un contacto real** |

**Los dos mecanismos:**

| # | Mecanismo | Cómo |
|---|---|---|
| 1 | **Campos enmascarados** | El campo de email muestra y valida `nombre@ejemplo.com`; el de teléfono acepta solo el patrón `6XX XXX XXX`. **Se rellena, se valida y se ve la transición de estados — y no puede llegar a nadie** |
| 2 | **Botón "Rellenar con datos de ejemplo"** | Rellena todo con un juego de datos ficticio del proyecto. El visitante ve el formulario completo funcionando sin escribir nada suyo |

**Copy exacto del `success`** (idéntico en las cuatro demos, por §3-bis regla 5):

> **Esto es una demostración.**
> Así se vería la confirmación si el formulario estuviera activo. **No hemos recibido nada.**

**Por qué esto no abre un hueco legal nuevo:** un campo enmascarado **no puede contener un dato personal real** — `nombre@ejemplo.com` no es una dirección de correo y `6XX XXX XXX` no es un teléfono. Lo que entra en el navegador es un string de ejemplo, y nada sale. El add-on real (`CONTACTO_Y_DATOS_EN_LANDINGS.md` §3) es otro camino, con su cláusula legal y su registro de consentimiento.

> **No confundir:** esto **no** exime al formulario `/contacto` de la web propia, que **sí** recoge datos reales y por tanto **sí** necesita registro de consentimiento y plazo de conservación. Sigue siendo el hueco abierto de `CONTACTO_Y_DATOS_EN_LANDINGS.md` §6.

### 🛑 Casa Nora lleva el badge reforzado

`ReservaCasaNora` pide **`personas` · `fecha` · `hora`**: aparenta un sistema de reservas con disponibilidad, cuando es el nivel de **249 €**. Es el caso más engañoso de los cuatro.

**Refuerzo:** badge con tamaño de titular + aviso dentro + microcopy extra: *"Esto no comprueba disponibilidad: es una demo."*

---

## 9 · Cómo se presenta el formulario en el footer de cada demo

Cada demo lleva en el **footer** (que es cromo y no cuenta como sección) un **panel de nivel**: qué nivel es, qué incluye, qué no, y cuánto cuesta el siguiente escalón.

**Convierte "falta" en "está explicado y con precio".** Sin esto, una landing de 5 secciones se lee como incompleta.

> Ejemplo, Taller Recambios:
> `CUSTOM Basic · 149 € + 19 €/mes` — Incluye: 5 secciones, hero con WhatsApp, sobre nosotros, servicios, confianza, ubicación.
> **No incluye:** galería y FAQ → **Custom Pro, +100 €** · formulario → **extra, a presupuestar** · blog → **Premium**

Además, **cada demo enlaza a la siguiente**: *"Este es tu nivel. El siguiente está aquí →"*. El portfolio deja de ser cuatro escaparates y pasa a ser **un ascenso**.

---

## 10 · Conflictos que quedan documentados

| # | Conflicto | Dónde | Resolución |
|---|---|---|---|
| 1 | Estudio Lumen: el proyecto ya lo resolvió a WhatsApp, el backend sigue con payload de formulario | `ESTUDIO LUMEN:143` vs `01_BACKEND/PORTFOLIO_BRIEF_BACKEND.md` §4.2 | **Gana WhatsApp** (§7.3) |
| 2 | `ReservaCasaNora` aparenta un sistema de reservas en un nivel de 249 € | `01_BACKEND/PORTFOLIO_BRIEF_BACKEND.md` §4.1 | Badge reforzado (§8) |
| 3 | La columna "Incluye" del Pro sumaba 5+5=10 donde decía 8, y "duplicaba" "testimonios" sobre "confianza" | `PRECIOS.md:36` | Manda `§2.2`. **Resuelto el 2026-10-05:** fila Pro = 3 secciones nuevas (galería, testimonios, FAQ) = 5+3=8 |
| 4 | Las cards de la web piden "Resultado (1 frase, medible, con permiso)" y las demos no tienen resultado | `PORTFOLIO_WEB.md:38` | Formato de card para demos conceptuales: **"Qué demuestra" + nivel + precio** |
| 5 | **🆕 2026-10-05 · Los "no hacer" de los briefs contradicen la nueva §3.** Prohíben testimonios con nombre y foto, que ahora están permitidos **si van marcados** | `DEMO02:8` · `DEMO02:2051` · `DEMO01:171` · `DEMO01:243` | **⚠️ SIN RESOLVER — no se han tocado los briefs.** §3-bis manda sobre ellos (decisión del CEO del 2026-10-05), pero quien construya lee las dos cosas. **Residuo: 4 puntos.** Los briefs son el **segundo lote** y el primero que hay que abrir |
| 6 | **🆕 2026-10-05 · Al insertar el §2.1 en `01_BACKEND/PORTFOLIO_BRIEF_BACKEND.md` se desplazaron 38 líneas** y quedaron caducadas sus citas por línea | Los 4 briefs + `PORTFOLIO_WEB.md` | ✅ **Resuelto por completo el 2026-10-07.** Primero las citas de `MAPEOS_Y_NIVELES.md` re-ancladas **por sección** (§4.2, §4.1) en vez de por línea; después, **una a una contra el texto real**, las 8 del segundo lote: `00_LEEME_GLOBAL.md:105` → **`:108`** en `DEMO01:171`, `DEMO02:3057`, `DEMO03:1686`, `DEMO04:1758` (×2 cada uno: canónico y espejo) y `PORTFOLIO_WEB.md:43`; `PORTFOLIO_BRIEF_BACKEND.md:250` → **`:42`** (la fila de Integración con Instagram API dentro de §1.2) en `DEMO04:1713` (×2); y `PORTFOLIO_BRIEF_BACKEND.md:156-170` → **`:190-204`** (§4.2) en `DEMO04:1191` y `:1720` (×2). También `:103` → `:105` (regla 4) en `MAPEOS:281`, `CONTACTO_Y_DATOS_EN_LANDINGS.md:150` y `COPY_PRUEBA_SOCIAL.md:54`. **Verificado:** cada destino comprobado contra su texto antes de aceptarlo |

> ⚠️ **Sobre el conflicto 5, escrito para que nadie lo tome por un descuido:** no se han corregido los briefs porque **este lote aprobado era solo reglas + copy + trazabilidad**, y reescribir un "no hacer" de un brief es exactamente el tipo de cambio que debe aprobar el CEO. La decisión ya está tomada y registrada; lo que falta es aplicarla a los 4 ficheros.

---

## 11 · Lo que este documento NO hace

- **No toca el catálogo salvo la errata ya cerrada:** `PRECIOS.md:36` se corrigió el 2026-10-05 por orden del CEO (edición en línea, sin mover líneas); el resto de `PRECIOS.md` sigue intacto y el bug queda señalado en §2.
- **No toca el stack.** El estándar es Astro; los briefs son Next.js. **El demo en Astro sigue pendiente.**
- **No inventa prueba social.** §3 la explica en **tres categorías**: qué se permite, qué se permite **marcado**, y qué no se permite nunca (resultados de negocio y plataformas citadas). **No inventa testimonios de clientes reales** — los personajes de §3-bis son inventados y lo declaran en la misma línea.
- **No fija el precio de las demos.** Son ejemplos de portfolio, no peticiones.

---

## 12 · Cómo citar dentro de este vault (convención de referencias)

Esta sección existe por un fallo real de la revisión del 2026-09-30, no por gusto.

### El problema

Todo el vault cita las fuentes así: `` `archivo.md:NNN` ``. Es cómodo y es preciso **hasta que se edita el archivo destino**. En cuanto se inserta contenido por delante del ancla, **todas las líneas de debajo se desplazan y la referencia sigue apuntando a algo, pero a otra cosa**. No da error: da una cita falsa, que es peor que no citar.

El 2026-09-30 se encontraron **56 referencias caducadas repartidas en 13 documentos**, todas ellas fallan del mismo tipo. Ejemplos reales:

| Referencia caducada | A qué apuntaba en realidad | Referencia buena |
|---|---|---|
| `` `00_LEEME_GLOBAL.md:81` `` (regla 5) | Una línea de la tabla por paquete, ya superada | **`:105`** (dentro del bloque de reglas infranqueables `:98-106`) |
| `` `DEMO02_CASA_NORA_LANDING.md:275` `` | Una línea en blanco del brief | **`:302`** (`CONSULTA LA CARTA` del menú) |
| `` `RUTA NORTE:796` `` | Una línea de la paleta de colores | **`:813`** (el bloque `ESTRUCTURA DE IMÁGENES`) |

### La regla que queda aplicada

1. **Citar sección y línea, nunca línea suelta.** Se escribe `` `01_BACKEND/PORTFOLIO_BRIEF_BACKEND.md` §4.2 ``, no `` `:170` ``. El nombre de la sección es lo que sobrevive a la edición; el número solo acota. *(Ejemplo real: el 2026-10-05 este mismo documento-citaba `` `BRIEF BACKEND.md:156-170` `` para §4.2, y al insertar el §2.1 el bloque se desplazó 38 líneas. La cita seguía "sirviendo" y ya apuntaba al contrato equivocado — que es peor que no citar. Por eso ahora se cita la **sección**.)*
2. **Re-verificar contra el texto real antes de dar por buena una referencia.** Abrir la línea y leerla. Una referencia que no se abre no es una referencia: el 2026-09-30 había tres sitios afirmando que las líneas `:161`, `:192` y `:209` de Estudio Lumen eran *"los CTA ya resueltos a WhatsApp"*, y decían `RESERVAR CITA` a secas. El número apuntaba a algo; la afirmación era falsa.
3. **Cuando el destino es un espejo reducido, decirlo.** ~~Los espejos de `CASA NORA` (−81 líneas), `ESTUDIO LUMEN` (−156) y `RUTA NORTE` (−92) tienen otra numeración. En esos dos casos se añadió una nota explícita de que las líneas citadas pertenecen a la copia canónica de `Proyectos/Portafolio/`.~~ ✅ **Resuelto el 2026-10-02:** ya no hay espejos reducidos — los 11 espejos de `09_PORTFOLIO/DEMOS/` son ahora las copias **completas** y **la numeración canónica es la de `UNIFICADO/09_PORTFOLIO/DEMOS/`** (decisión del CEO del 2026-09-30); `Proyectos/Portafolio/` es el origen histórico con su nota de canonicidad. La regla se conserva por si algún día vuelve a existir una copia reducida.
4. **Un cambio de contenido obliga a reauditar las referencias que lo apuntan.** Insertar una tabla al principio de un documento invalida todo lo que había debajo. Es lo que pasó con `00_LEEME_GLOBAL.md`.

### Cómo se comprueba

Hay un script de auditoría que recorre el árbol y devuelve cuatro cosas: referencias fuera de rango, caracteres CJK o cirílicos sueltos, BOM UTF-8 y caracteres de texto roto (U+FFFD). Estado tras la corrección: **0 / 0 / 0 / 0**.

> **El log (`WIKI/log.md`) queda deliberadamente fuera de las correcciones.** Sus referencias se escribieron apuntando a un estado concreto de los archivos en ese momento; reescribirlas falsearía la bitácora. La bitácora dice lo que se dijo, no lo que hoy es cierto.

### Nota sobre lo que esto **no** arregla

Nada de esto evita que un archivo se quede **truncado sin aviso** — que es el fallo más grave que encontró esta revisión, en `03_SOCIAL_MEDIA/IDENTIDAD_VISUAL_DE_CADA_DEMO.md`, y que ninguna cita puede detectar porque una referencia a la línea 400 de un archivo que acaba en la 392 simplemente no existe. Para eso está la comparación de espejos: **si un archivo tiene copia en dos sitios, hay que comparar los dos.**

---

---

## Relacionado

`00_LEEME_GLOBAL.md` (Demo Data Rule `:62-63`, reglas infranqueables `:98-106`, tabla antigua `:73-77`) · `02_FRONTEND/00_LEEME_PRIMERO.md` · `01_COMERCIAL/PRECIOS.md` §2 y §6 · `00_REGISTRO/CONTACTO_Y_DATOS_EN_LANDINGS.md` · `07_WEB/PORTFOLIO_WEB.md` · `WIKI/entidades/portfolio.md` · **canónico: esta carpeta (`UNIFICADO/09_PORTFOLIO/DEMOS/`)** — `Proyectos/Portafolio/` queda como origen histórico, no editar ahí (decisión del CEO, 2026-09-30)