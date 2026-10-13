# STACK TECNOLÓGICO — CAT CODE (v2)

**Versión:** v2 · **Fecha:** 2026-09-30 · **Estado:** ACTIVO · **Ámbito:** stack de producto, backend, automatizaciones, despliegue y CI/CD

> **Sustituye a:** el `DOCUMENTO 17 STACK v1` del OS v1 (archivado en `99_ARCHIVO/OBSOLETOS/2026-09-10/`, solo consulta histórica) y a la sección de stack de `WIKI/conceptos/stack.md`.

---

## 1. PRINCIPIO

> **El stack se elige por el coste operativo que genera, no por lo que se ve en el portfolio.**

Una landing para una peluquería no necesita un framework de aplicaciones. Cuando un negocio pide interactividad real, ahí entra React. Cuando pide un backend, se elige uno y se sostiene. **El valor que vendemos es "tu negocio ya existe, haz que se vea"; el stack existe para que eso se pueda mantener sin nosotros.**

---

## 2. LA DECISIÓN

| Capa | Tecnología | Cuándo se usa |
|---|---|---|
| **Frontend · landing estática** | **Astro** + Tailwind CSS | **Por defecto.** El caso normal: un negocio local que necesita existir y ser encontrado. Casi cero JavaScript al cliente, casi cero mantenimiento y casi cero cambios |
| **Frontend · landing dinámica** | **React** | Cuando la landing necesita interactividad, estado, datos en vivo, login, carrito o contenido generado desde un backend |
| **Backend** | **NestJS** o **Spring Boot** | Según complejidad y requisitos del cliente. **Uno por cliente, elegido una vez y no cambiado después** |
| **Automatizaciones** | **n8n** | Onboarding de clientes, publicación programada, avisos, generación de contenido, reports |
| **Despliegue** | **Docker** | Todo lo que necesita runtime persistente. Lo estático puede seguir construyéndose desde Git |
| **CI/CD** | **GitHub Actions** | Build, tests, despliegue y reversión desde el propio repositorio |

### 2.1 Por qué Astro es la primera opción

- **Casi cero JavaScript al cliente.** Una landing no necesita un framework de aplicaciones.
- **Casi cero mantenimiento.** Es lo que sostiene comercialmente la promesa de "sin cambios" de los planes Basic y Pro.
- **Hosting a coste 0.** Encaja con la decisión de infraestructura del 2026-09-26 ([[UNIFICADO/00_REGISTRO/INFRAESTRUCTURA_Y_CUENTAS_v1.md|INFRAESTRUCTURA_Y_CUENTAS_v1]] §9).
- **Sin dependencias de interfaz.** Sin `shadcn/ui`, sin Framer Motion, sin Lucide como dependencia.
- **Sin formulario de contacto** (decisión 2026-09-27): el contacto es WhatsApp, teléfono y horario. Sin datos personales, sin aviso de privacidad, sin banner de cookies.

### 2.2 Por qué React es la excepción y no la regla

React entra **cuando hay que**. Su coste —dependencias, estado, actualizaciones de seguridad, más superficie que puede romperse— solo se justifica si el cliente lo necesita. **Una landing dinámica es más barata de construir y más cara de mantener, y ese sobrecoste tiene que estar en el precio.**

### 2.3 Cómo se elige el backend

- **NestJS** — cuando el cliente ya es Node/JS, cuando el frontend es React y el backend comparte tipos, o cuando el equipo disponible es JS.
- **Spring Boot** — cuando el cliente es Java/enterprise, cuando hay requisitos de integración corporativa o cuando hace falta un ecosistema de librerías maduro.

> ⚠️ **Dos backends para un equipo de 4 personas es un coste real.** La mitigación es la regla del §2: **un backend por cliente, decidido al presupuestar y no cambiado después.** No es "el que toque en cada proyecto". Cuando alguien no pueda mantener el que chose, es deuda, no una decisión nueva.

---

## 3. ⛔ ESTADO REAL A 2026-09-30 (leído antes que la decisión)

> **Una decisión de stack no es una implementación.** Verificado sobre el árbol completo del vault el 2026-09-30:

| Elemento | Existe en el vault a 2026-09-30 |
|---|---|
| `Dockerfile` / `docker-compose*` | **0** |
| Workflows de CI (`.github/workflows`) | **0** |
| Instancia de n8n | **0** |
| Backend NestJS o Spring Boot | **0** |
| **Landings de cliente en producción** | **0** |

**Todo lo del §2 es arquitectura objetivo.** El único stack realmente desplegado hoy es `CAT CODE OS` ([[CAT CODE OS/README.md|README]]): TypeScript · Vite · Vitest · Drizzle · better-sqlite3, offline-first con SQLite local.

### 3.1 Lo que este documento NO cambia

- **`CAT CODE OS` sigue con su stack.** Es un proyecto independiente del producto que vendemos. Offline-first hasta Fase 3 (ver `CAT CODE OS/AGENTS.md`). Docker y CI/CD **no** le aplican hoy.
- **La web propia de CAT CODE no se migra.** Sigue donde está. Ver §5.
- **No se ha construido nada.** Este documento no autoriza por sí mismo a tocar la web, el repo `catcode` ni `CAT CODE OS`. Solo describe el stack.

---

## 4. ⚠️ CONTRADICCIONES QUE ESTA DECISIÓN ABRE

Estas cuatro no se resuelven aquí. Se documentan porque están **escritas** en el sistema canónico y alguien las va a encontrar.

### 4.1 Docker vs. la decisión de alojamiento del 2026-09-26

`INFRAESTRUCTURA_Y_CUENTAS_v1.md` §9 decidió **NO comprar un VPS: alojamiento gestionado en Vercel, coste 0**. Esa decisión tenía 3 triggers para revisarla, y **esta decisión dispara uno de ellos**:

| Trigger (§9.2) | Estado |
|---|---|
| 10-15 clientes con sitio activo | No alcanzado |
| **n8n autoalojado** | ⚠️ **DISPARADO por esta decisión** — n8n pasa a ser parte del stack, y n8n autoalojado necesita runtime persistente |
| La web de CAT CODE pasa de estática a backend propio | No alcanzado |
| CAT CODE OS pasa a multiusuario | No alcanzado |

**Lo que NO se hace aquí:** no se cambia la decisión de alojamiento. Su propio §9.2 exige *"decisión con documento y número delante"* (coste actual de hosting, margen por plan, número de clientes). **Esa cifra no existe todavía porque hay 0 clientes.**

**Cómo se resuelve el conflicto de forma compatible mientras tanto:**

| Pieza | Alojamiento | Por qué |
|---|---|---|
| Landing estática (Astro) | **Vercel** — se construye desde el repo, **sin contenedor** | Sigue siendo un PaaS. Un contenedor para un fichero estático es sobreingeniería |
| Landing dinámica (React) | **Docker** | Necesita runtime |
| Backend (NestJS / Spring Boot) | **Docker** | Necesita runtime |
| n8n | **Docker** | Necesita runtime persistente |

Es decir: **Docker no reemplaza a Vercel, se suma donde hay runtime.** Las dos decisiones se sostienen a la vez hasta que se dispare el trigger del VPS con números delante.

### 4.2 ElArgumento "una sola cadena de herramientas" ya no vale

El documento `04_STACK_ASTRO_Y_DEMO.md` (2026-09-27) justificaba Astro con *"una sola dependencia de herramientas para el cliente"*. Con React, n8n y Docker en el stack, **ese argumento es falso y no debe repetirse delante de un prospecto.** Lo que sigue siendo cierto:

- Para **una landing de cliente normal** (el 90 % de los casos) hay **una sola cadena: Astro + Tailwind**.
- Las demás piezas del §2 **solo se tocan cuando el cliente las pide**. Un negocio local que quiere existir y ser encontrado no ve nunca React, ni NestJS, ni Docker.

**Eso hay que decirlo así.** "Tenemos un stack estándar" es una promesa más fuerte que "tenemos un stack sencillo para el caso normal, y uno más potente cuando hace falta". La segunda es la verdad.

### 4.3 Dos backends para un backend developer

Ver §2.3. Registrado aquí porque el coste es real y no se ve en el presupuesto: **la capacidad de mantener NestJS y Spring Boot a la vez es un cuello de botella para un equipo de 4.** Si llega un proyecto Java y nadie lo puede sostener, hay que contratar o declinar, no improvisar.

### 4.4 🛑 Hueco comercial: React no está en el catálogo

**Las landings dinámicas no tienen precio.** [[UNIFICADO/01_COMERCIAL/PRECIOS.md|PRECIOS]] v2 (2026-09-29) define CUSTOM en 3 setups (149 / 249 / 449 €) sobre landings de 5 / 8 / 11 secciones. **Ninguno de esos tres setups está descrito en React, y ninguno tiene en cuenta que React cuesta más de mantener.**

Esto es un problema, no una contradicción de stack: el argumento comercial de Astro es *"casi sin mantenimiento ni cambios"*, y React rompe exactamente ese argumento. **Mientras no haya línea de precio para una landing dinámica, el catálogo vende algo que no se puede entregar con margen.**

> **Pendiente de decisión del CEO.** No se ha inventado ningún precio aquí. Ver también §7 (quién factura), que bloquea la publicación del catálogo entero.

---

## 5. La web propia de CAT CODE

Es una **landing dinámica**, así que por el §2 le corresponde **React**. Eso resuelve la familia del stack y **deja una pregunta abierta dentro de ella**:

| Pregunta | Estado |
|---|---|
| ¿React? | ✅ **Resuelto.** Es una landing dinámica |
| ¿**Next.js** o **Vite + React**? | ⛔ **Sin confirmar.** `07_WEB/MASTER_WEB.md` dice Next.js + Vercel; el documento `04` del 2026-09-27 dice Vite + React 19 + Tailwind 4 en GitHub Pages. **Resolver mirando el repo `catcode`** |
| ¿Despliegue en Docker o sigue en GitHub Pages? | ⛔ **Sin confirmar.** Depende de si la web propia necesita backend (trigger §9.2 nº3) |

**No se ha tocado `MASTER_WEB.md` más allá de señalar este documento.** Escribir una de las dos opciones como cierta sin mirar el repo sería escribir una mentira en la fuente canónica. La web propia es **el único producto que ya está en producción**: cualquier cambio aquí es el único con riesgo de caída real.

---

## 6. Reglas de aplicación

1. **Astro por defecto.** Ante la duda, Astro. React se justifica, no se presume.
2. **Un backend por cliente**, decidido al presupuestar. Sin cambios posteriores.
3. **Nada de Docker para lo estático.** Un contenedor que sirve ficheros estáticos es coste y superficie de fallo sin retorno.
4. **Todo despliegue pasa por GitHub Actions.** No hay despliegues manuales a producción: si no está en CI, no está en producción.
5. **La primera automatización de n8n sigue la puerta de los 5 clientes**, no esta decisión. `PLAN_FASES_0_A_10.md` lo dice: *"el onboarding manual es el que te enseña qué automatizar"*. **Declarar n8n en el stack no es desplegarlo en Fase 0.** Con 0 clientes, automatizar es automatizar el dolor que se anticipa, no el que se siente.
6. **Ninguna tecnología entra sin cliente que la pida o carga que la justifique.** Regla heredada del OS v1 §66, archivado.

---

## 7. Bloqueadores y pendientes

| # | Asunto | Quién decide |
|---|---|---|
| 1 | **Precio de la landing dinámica en React** (§4.4) | CEO |
| 2 | **Quién factura** — bloquea la publicación del catálogo entero | CEO + fiscal |
| 3 | **VPS o no VPS**, con números delante (§4.1) | CEO, en el trigger de §9.2 |
| 4 | **Next.js vs Vite + React** en la web propia (§5) — mirar el repo `catcode` | Backend + CEO |
| 5 | **Demo nuevo en Astro** antes del primer cliente — el paso 2 del documento `04`, sigue pendiente | Frontend |
| 6 | Reconciliar las dos listas de secciones de landing, cuando exista el demo | Frontend |

---

## 8. Trazabilidad

| Documento | Relación |
|---|---|
| `99_ARCHIVO/OBSOLETOS/2026-09-10/.../DOCUMENTO 17 STACK v1` | **Sustituido** (histórico) |
| `WIKI/conceptos/stack.md` | Resumen en la capa wiki; apunta aquí |
| `UNIFICADO/00_REGISTRO/INFRAESTRUCTURA_Y_CUENTAS_v1.md` §9 | Alojamiento y triggers del VPS |
| `UNIFICADO/00_REGISTRO/PLAN_FASES_0_A_10.md` | Puertas de salida y prohibiciones de Fase 0 |
| `UNIFICADO/01_COMERCIAL/PRECIOS.md` | Catálogo v2 — sin línea para React (§4.4) |
| `UNIFICADO/06_PRODUCCION/SECCIONES_LANDING.md` | 11 secciones de la **web propia**, no de la landing de cliente |
| `UNIFICADO/07_WEB/MASTER_WEB.md` | Master de la web propia; stack sin confirmar (§5) |
| `Cambios Listos para Actualizar/04_STACK_ASTRO_Y_DEMO.md` | Decisión del 2026-09-27 que **esta amplía** (Astro deja de ser el único estándar) |
| `CAT CODE OS/AGENTS.md` | Proyecto independiente, no afectado (§3.1) |

---

Relacionado: [[WIKI/conceptos/stack.md|stack]] · [[WIKI/conceptos/infraestructura.md|infraestructura]] · [[WIKI/conceptos/precios.md|precios]]
