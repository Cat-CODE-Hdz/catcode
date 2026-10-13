# CONTACTO Y DATOS EN LAS LANDINGS DE CLIENTE

**Versión:** v1 · **2026-09-30** · **Estado:** CERRADO (decisiones del CEO del 2026-09-30)
**Alcance:** cómo entra un contacto en una landing que entregamos a un cliente, y qué pasa cuando el cliente quiere formulario.
**No sustituye a:** la decisión del 2026-09-27 de no llevar formulario (`Cambios Listos para Actualizar/02_SIN_FORMULARIO_EN_LANDINGS.md`, ya aplicada), ni el catálogo de `01_COMERCIAL/PRECIOS.md`. Este documento **precisa** esas dos cosas donde estaban incompletas.

---

## 1 · Lo que sigue vigente y no se toca

Las landings de cliente **no llevan formulario de contacto**. El contacto es un **botón de WhatsApp** + teléfono + horario. Decisión del CEO del 2026-09-27, cerrada el 2026-09-28, aplicada el 2026-09-29.

| | Contacto | Quién es responsable del tratamiento |
|---|---|---|
| **Landing de cliente** | WhatsApp + teléfono + horario | **El cliente** |
| **Web propia de CAT CODE** | Formulario `/contacto` con "Plan de interés" | **CAT CODE** |

La asimetría es deliberada, no un descuido, y está en `02_SIN_FORMULARIO_EN_LANDINGS.md:91-107`. **No la "arregles".**

### ⚠️ Lo que la decisión del 2026-09-27 quitó, y lo que NO quitó

Esta confusión ya se ha producido y volverá a producirse, así que queda escrita:

| Documento | Qué es | Qué lo dispara |
|---|---|---|
| **Política de privacidad** | Cómo se tratan tus datos personales | **Un formulario** (y las cookies que vienen con él) |
| **Aviso legal** | Quién responde por el sitio: titular, NIF/CIF, domicilio y a veces el crédito de autoría | **Cualquier web pública.** Ley 34/2002 |

La decisión del 2026-09-27 quitó **la política de privacidad, la de cookies y el banner**. **No quitó el aviso legal**, que no depende de que haya formulario. Por eso `PRECIOS.md:37` puede vender *"footer con aviso legal"* en el nivel Premium **sin contradecir nada**.

> 🛑 **Y el aviso legal lo pone el cliente, no CAT CODE.** Mismo patrón que el add-on de la §3: CAT CODE prepara el hueco en el footer, el cliente mete sus datos legales. Si CAT CODE lo redacta, deja de ser responsabilidad del cliente y vuelve a ser compartida — y entonces el Premium no estaría vendiendo nada.
>
> **Un aviso legal es dato del cliente (NIF, domicilio registral), no copy de CAT CODE.** No se puede escribir sin que el cliente lo dé.

---

## 2 · Medición: atribución sí, contador no

**Decisión del CEO, 2026-09-30.**

### Qué se decide

Cada punto de entrada al WhatsApp lleva un **mensaje predefinido distinto**. Eso permite saber **de qué botón vino el mensaje**. Es atribución, no medición: no hay ni una línea de tracking, ni píxel, ni cookie.

| Punto de entrada | Mensaje predefinido |
|---|---|
| Barra flotante de móvil | `Hola, os escribo desde vuestra web.` |
| Botón del hero | `Hola, me gustaría información.` |
| Sección de servicios / carta | `Hola, me gustaría la carta.` *(adaptar por proyecto)* |
| Botón del footer | `Hola, os escribo desde vuestra web.` |

Los mensajes van **cortos y editables a mano**, como ya establecía `02:137`. El cliente los ve en WhatsApp Business y sabe por dónde entró cada conversación.

### Qué NO se decide, y por qué

**No hay contador de clics.** Contar clics exige una redirección o un script que registre algo. Eso es un dato personal almacenado, y con él vuelven el banner de cookies, la política de cookies y el consentimiento previo — es decir, **toda la carga que la decisión del 2026-09-27 eliminó**.

Atribución es gratis. Contar no lo es. **Se paga en cookies, y no está pagado.**

### La condición que hay que respetar

> ⚠️ **La afirmación "el enlace `wa.me` no necesita política de privacidad" solo es cierta mientras se cumplan las dos cosas:**
> 1. **El enlace no lleva parámetros de referencia** (`ref`, UTM ni equivalentes). Añadirlos pasa un identificador a Meta, y eso ya es cesión a un tercero.
> 2. **No hay contador de clics ni script de analítica** en la landing.
>
> **Si alguna vez se rompe una de las dos, la afirmación pasa a ser falsa** y hay que volver a la decisión del 2026-09-27 antes de publicar. No es una nota de estilo: las dos condiciones son la única razón por la que esta decisión es sostenible.

---

## 3 · El add-on: formulario + páginas legales

**Decisión del CEO, 2026-09-30. No reabre la decisión de la §1: es un extra.**

| Extra | Precio | Por qué |
|---|---|---|
| **Formulario + páginas legales** | **A presupuestar** | El coste no es el código, es la cláusula legal y mantenerla al día |

Se incorpora a la tabla de add-ons de `01_COMERCIAL/PRECIOS.md` §6.

### Cómo se demuestra en el portfolio

**Las 4 demos del portfolio llevan un formulario**, y ninguna lo incluye en su nivel. Se demuestra **como extra**, con badge visible `EXTRA · a presupuestar`, aviso dentro del propio formulario y un tooltip que explica el porqué. Un formulario bloqueado se leería como un extra a medio hacer; uno que se rellena y responde honestamente demuestra competencia.

Especificación completa (copy del tooltip, refuerzo de Casa Nora, qué se quita en cada demo) en `09_PORTFOLIO/DEMOS/MAPEOS_Y_NIVELES.md` §8.

> ⚠️ **Referencia corregida el 2026-10-05:** este documento decía `§7`, que es *Estudio Lumen → FULL*. El formulario está en la **`§8`**. Sin cambios en el contenido, solo en el número al que apuntaba.

> **El tooltip solo no basta:** exige hover, y en móvil no hay hover — que es donde se compara. Por eso el aviso va también como texto visible.

### 🆕 2026-10-05 · El formulario enmascarado de la demo no abre un hueco nuevo

Decisión del CEO sobre las demos: el `success` **declara que es una demostración** y los campos van **enmascarados** (`nombre@ejemplo.com`, `6XX XXX XXX`) + botón "Rellenar con datos de ejemplo".

**Lo que evita:** que alguien rellene la demo con **sus datos de verdad** por curiosidad y acabe siendo un lead real sin rastro, o un dato personal recogido sin base legal.

**Por qué no cuenta como formulario a efectos legales:** un campo enmascarado **no puede contener un dato personal real**. `nombre@ejemplo.com` no es una dirección de correo y `6XX XXX XXX` no es un teléfono — lo que entra en el navegador es un string de ejemplo y **nada sale**. No hay base legal que dar porque no hay dato que tratar, no hay aviso que redactar y no hay plazo de conservación que fijar.

> **Lo que esto NO exime:** el add-on de esta §3 sigue siendo un add-on, y el **formulario `/contacto` de la web propia** —que **sí** recoge datos reales— **sí** necesita registro de consentimiento y plazo de conservación. Sigue siendo el hueco abierto de la §6 de este documento.

Especificación del formulario de las demos: `09_PORTFOLIO/DEMOS/MAPEOS_Y_NIVELES.md` §8.

### Condiciones, y no son un detalle

1. **El cliente entrega su base legal ya redactada.** CAT CODE **no la escribe, no la revisa y no la valida**: se publica tal cual, con el nombre del cliente.
2. **Si CAT CODE revisa la cláusula, deja de ser responsabilidad del cliente y vuelve a ser compartida** — y entonces no se ha ganado nada. Escrito aquí para que no se olvide en seis meses.
3. **El espacio se entrega preparado pero inerte.** El enlace en el footer y el hueco del checkbox existen en el código; no hay formulario activo hasta que alguien lo paga.
4. **Añade también las cookies.** Un formulario arrastra banner y política de cookies, y con ellos el consentimiento previo. No es "el formulario y ya".
5. **Aviso por escrito al cliente:** la mayoría de los negocios de barrio nunca ha tenido política de privacidad. Si la pide, lo normal es que no sepa darla.

### Por qué "a presupuestar" y no un número

Porque el coste real no está en construir el formulario (es una tarde) sino en tres cosas que varían por cliente: la cláusula legal, mantenerla al día cuando el cliente cambia de proveedor o de finalidad, y las cookies. Fijar un número cerrado sería inventar un precio sin saber el coste — el mismo error que la landing en React sin precio (`PRECIOS.md` §7.2).

---

## 4 · El requisito que faltaba: registro del consentimiento

**Añadido el 2026-09-30. No estaba escrito en ningún sitio.**

Un checkbox **no demuestra** el consentimiento. Para poder acreditarlo hay que guardar **qué texto se aceptó, en qué versión, y cuándo**. Guardar el consentimiento es, en sí mismo, guardar dato personal.

Vale para las dos situaciones, y en la propia **con más fuerza**:

| Dónde | Quién es el responsable | Mínimo técnico | Dónde está escrito |
|---|---|---|---|
| Landing con el add-on de formulario | **El cliente** | Registrar qué texto se aceptó, en qué versión y con qué fecha | Este documento §3 |
| **Formulario `/contacto` de la web propia** | **CAT CODE** | Igual, y además **plazo de conservación** | ⚠️ **No está escrito — ver §6** |

> **Quién guarda el registro en la landing con add-on no está cerrado, y es pregunta para el fiscal.** El responsable de demostrar el consentimiento es el cliente; pero quien aloja el formulario es CAT CODE. Si el registro vive solo en el servidor de CAT CODE, el cliente no puede acreditarlo sin pedírselo a CAT CODE, y entonces la responsabilidad se reparte — que es justo lo que el add-on pretende evitar. **El mínimo técnico de la tabla es lo que hay que construir sí o sí**; quién lo custodia por escrito, pendiente del fiscal.

---

## 5 · Material descartado, y por qué

El 2026-09-30 se recibió un análisis externo sobre "formulario vs. botón de WhatsApp" en contexto español. **No se incorpora a ninguna parte del vault. Se deja constancia de por qué**, porque el criterio que lo descarta es el que protege las demos y el catálogo:

**Motivo del descarte — las cifras no tienen fuente:**

| Cifra que daba | Problema |
|---|---|
| 88,9 % usa WhatsApp Business como canal principal | Sin fuente ni metodología; el decimal da falsa precisión |
| 98 % de tasa de apertura | No hay estudio público que lo mida |
| 60 % de pymes con ROI del 180 % con IA conversacional | Ninguna pyme mide su ROI así |
| Conversión 8 % → 46 %, contratación de 5 a 2 min | Caso de **recruiting**, extrapolado a un negocio local |

Ya hay antecedente: el **70 % de tráfico móvil** se quitó el 2026-09-29 por no tener fuente (`02:145`). La regla escrita: *"Si hace falta una cifra para vender, hay que medirla con el analytics de la web propia y citarla con fecha."*

**Segundo motivo — la conclusión contradecía una decisión cerrada:** recomendaba *"mantener un formulario web muy sencillo como vía secundaria"*, que es exactamente lo que se descartó el 2026-09-28, con el motivo por escrito.

**Tercer motivo — entraba por la puerta de atrás lo que la Demo Data Rule prohíbe.** Un texto que sirve para justificar un botón con cifras inventadas es el mismo formato que la regla 5 de `09_PORTFOLIO/DEMOS/00_LEEME_GLOBAL.md:108` prohíbe para las demos: *"No inventar prueba social (★★★★★, +5000 clientes, 98 % satisfacción)."*

**Lo que sí se aprovecha de ese material** ya estaba todo escrito en `02:111-149`: el mensaje predefinido, la barra fija en móvil, y el número de teléfono visible como alternativa para quien no tenga WhatsApp Business. Lo único genuinamente nuevo era el **registro del consentimiento** (§4), y queda incorporado.

---

## 6 · Pendiente: el hueco del formulario propio

**No resuelto. El CEO lo dejó pendiente el 2026-09-30.**

`UNIFICADO/07_WEB/CONTACTO_WEB.md:49-53` dice:

```
- Consentimiento GDPR implícito: checkbox `Acepto recibir información sobre mi plan.` (opt-in, no pre-marcado).
- Datos solo para contacto interno CAT CODE; no se comparten con terceros.
```

El checkbox está bien puesto. **Falta:**

1. **Registro del consentimiento**: qué texto, qué versión, qué fecha (§4).
2. **Plazo de conservación**: la página promete *"Te respondemos en menos de 24h"* (`:14`) y no dice qué pasa con esos datos después.
3. **Revisar la etiqueta "implícito"**: hay checkbox opt-in, así que el consentimiento es **explícito**. La palabra "implícito" contradice lo que hace la propia línea siguiente.
4. **"No se comparten con terceros"** es una afirmación que hay que poder sostener: revisar dónde acaba realmente el envío (`:53` menciona un backend que hay que confirmar).

**Este es el único formulario donde CAT CODE no puede delegar nada**, porque es el responsable del tratamiento. Queda pendiente junto a la llamada al fiscal.

---

## 7 · Lo que este documento NO decide

- **Quién factura.** Bloquea publicar el catálogo entero. Va **antes** de todo lo demás (`PRECIOS.md` §7.1).
- **El detalle legal exacto de la cláusula.** Es pregunta para el fiscal, no para este documento. Lo que aquí se decide es la **arquitectura**, que reduce exposición sea cual sea la respuesta.
- **Si se mide el tráfico con analítica.** Requeriría el mismo consentimiento de cookies que se acaba de evitar. Hoy no está decidido en ninguna parte.

---

## Relacionado

`01_COMERCIAL/PRECIOS.md` §2 y §6 · `09_PORTFOLIO/DEMOS/MAPEOS_Y_NIVELES.md` §7 · `Cambios Listos para Actualizar/02_SIN_FORMULARIO_EN_LANDINGS.md` · `00_REGISTRO/STACK_TECNOLOGICO_v2.md` · `07_WEB/CONTACTO_WEB.md` · `WIKI/conceptos/precios.md` · `WIKI/conceptos/stack.md`
