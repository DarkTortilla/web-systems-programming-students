# Planeación de clases restantes

Periodo: **12 de octubre al 27 de noviembre de 2026**. La planeación contempla
una clase diaria de lunes a viernes y un solo tema por sesión. Está dirigida
al docente y utiliza los proyectos de los grupos como base para las prácticas.

## Distribución y calendario

En el periodo hay 35 días de lunes a viernes: **25 clases de contenido,
8 días de revisión de sprint y 2 días sin clase**. Las revisiones ocupan ambos
días completos; el 2 y el 16 de noviembre se excluyen por acuerdo de esta
planeación.

Para terminar en la fecha indicada, se ajustan las duraciones inicialmente
propuestas. Paginación y servidores tienen sesiones propias y React ocupa
8 clases. Ninguna sesión suma dos bloques temáticos.

| Bloque | Clases | Fechas |
| --- | ---: | --- |
| Pruebas unitarias y de integración | 2 | 14 y 15 de octubre |
| JWT, adaptadores y autorización | 3 | 16, 19 y 20 de octubre |
| Manejo de errores y limitación de solicitudes | 2 | 21 y 22 de octubre |
| Paginación | 2 | 28 de octubre y 26 de noviembre |
| Frontend vanilla | 3 | 29 y 30 de octubre; 3 de noviembre |
| Frontend React | 8 | 11, 12, 13, 17, 18, 19, 20 y 25 de noviembre |
| Pruebas E2E | 2 | 4 y 27 de noviembre |
| Configuración de servidores | 3 | 23 de octubre; 5 y 6 de noviembre |
| **Total de clases de contenido** | **25** | |

Todas las fechas del siguiente calendario corresponden a 2026. La columna
indica el día de la semana y el intervalo indica las fechas de cada fila.

| Semana | Lunes | Martes | Miércoles | Jueves | Viernes |
| --- | --- | --- | --- | --- | --- |
| 12–16 oct. | Revisión sprint 1: A | Revisión sprint 1: B | Pruebas unitarias | Pruebas de integración | Autenticación con JWT |
| 19–23 oct. | Patrón adaptador e inyección de dependencias | Autorización con middlewares | Manejo de errores | Limitación de solicitudes | Configuración de servidores 1 |
| 26–30 oct. | Revisión sprint 2: A | Revisión sprint 2: B | Paginación 1 | Frontend vanilla 1 | Frontend vanilla 2 |
| 2–6 nov. | Sin clase | Frontend vanilla 3 | Pruebas E2E 1 | Configuración de servidores 2 | Configuración de servidores 3 |
| 9–13 nov. | Revisión sprint 3: A | Revisión sprint 3: B | Frontend React 1 | Frontend React 2 | Frontend React 3 |
| 16–20 nov. | Sin clase | Frontend React 4 | Frontend React 5 | Frontend React 6 | Frontend React 7 |
| 23–27 nov. | Revisión sprint 4: A | Revisión sprint 4: B | Frontend React 8 | Paginación 2 | Pruebas E2E 2 |

Las fechas y las evidencias de revisión se rigen por [project.md](project.md).
Este documento organiza la enseñanza y no modifica sus rúbricas.

## Preparación general

- Utilizar npm, TypeScript, módulos ESM y Express 5, conforme a los ejemplos
  actuales del repositorio. Mantener MySQL2 o Sequelize según el proyecto.
- Contar con Node.js LTS compatible con Vite y Vitest, Git, VS Code, navegador,
  servidor SQL y acceso al repositorio en GitHub. Consultar los requisitos
  vigentes de [Vite](https://vite.dev/guide/) y
  [Vitest](https://vitest.dev/guide/); como base común, usar Node.js LTS 24
  o una LTS posterior compatible.
- Preparar una API CRUD, datos de demostración y usuarios con roles distintos.
  Usar una base de datos independiente para las pruebas y un archivo
  `.env.example` sin secretos.
- El docente prepara un entorno Linux de práctica con acceso SSH, Node.js LTS,
  BD accesible y permisos para configurar servicios. Para la sesión de HTTPS,
  disponer de un servidor accesible y un dominio de práctica con DNS resuelto.
  Las compras de infraestructura quedan fuera de esta planeación.
- Conservar `package-lock.json` para reproducir instalaciones con `npm ci`.
  Usar `npm install` para incorporar nuevas dependencias. Vitest y su paquete
  de cobertura deben tener versiones compatibles de la misma versión.
- Antes de las clases vanilla, preparar el servicio de archivos estáticos del
  frontend bajo el mismo origen que la API. En React, usar el proxy de Vite
  para `/api` durante el desarrollo. Las prácticas de frontend utilizan esa
  configuración ya preparada.

Comprobar las herramientas base en la terminal local:

```sh
node --version
npm --version
git --version
```

Las extensiones apoyan el trabajo en el editor; no sustituyen los paquetes npm.
Se pueden instalar desde VS Code o mediante `code --install-extension ID` si
el comando `code` está disponible en la terminal.

| Extensión o herramienta | ID de VS Code / enlace | Sesiones |
| --- | --- | --- |
| Vitest | [vitest.explorer](https://marketplace.visualstudio.com/items?itemName=vitest.explorer) | Pruebas unitarias y de integración |
| Thunder Client | [rangav.vscode-thunder-client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) | API, JWT, errores y paginación; Postman es alternativa |
| Live Server | [ritwickdey.LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) | Vanilla 1; usar el origen preparado al consumir la API |
| Playwright | [ms-playwright.playwright](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) | E2E 1 y 2 |
| ESLint | [dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) | React |
| Tailwind CSS IntelliSense | [bradlc.vscode-tailwindcss](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) | React 7 y 8 |
| Remote SSH | [ms-vscode-remote.remote-ssh](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh) | Servidores |
| React DevTools | [Guía de instalación](https://react.dev/learn/react-developer-tools) | Extensión del navegador para React |

Consultar también [REQUIRED_SOFTWARE.md](REQUIRED_SOFTWARE.md) para las
herramientas generales del curso.

## Desarrollo de las clases

Las prácticas se realizan sobre el mismo proyecto para construir evidencias
progresivas. Los comandos de instalación se ejecutan en la carpeta indicada;
`npm install -D` corresponde a dependencias de desarrollo. Cuando una sesión
no agrega paquetes, se indica expresamente.

### 14 de octubre — Pruebas unitarias

- **Objetivo:** comprobar una unidad de comportamiento de forma aislada.
- **Preparación previa:** identificar validaciones y lógica de negocio que
  puedan ejecutarse sin abrir el servidor ni conectarse a la BD.
- **Contenido:** estructura de una prueba, assertions, casos positivos y
  negativos, dobles de prueba y funciones asíncronas.
- **Práctica:** probar una validación y un servicio, sustituyendo su dependencia
  de persistencia por un doble.
- **Evidencia:** pruebas reproducibles que detecten una regresión deliberada.
- **Instalación:** en el backend, `npm install -D vitest @vitest/coverage-v8`;
  extensión Vitest. Configurar los scripts `test` como `vitest run`,
  `test:watch` como `vitest` y `test:coverage` como `vitest run --coverage`.
  Referencias: [Vitest](https://vitest.dev/guide/) y
  [cobertura](https://vitest.dev/guide/coverage.html).

### 15 de octubre — Pruebas de integración

- **Objetivo:** verificar el funcionamiento conjunto de rutas, middlewares,
  controladores y persistencia.
- **Preparación previa:** disponer de la BD de pruebas y separar la creación
  de la aplicación Express del arranque con `listen` y de la sincronización
  automática de la BD. Importar la aplicación no debe iniciar el servidor.
- **Contenido:** solicitudes HTTP automatizadas, preparación y limpieza de
  datos, códigos de estado y lectura del reporte de cobertura.
- **Práctica:** probar un CRUD contra la BD de pruebas, incluyendo entradas
  inválidas y recursos inexistentes; cerrar conexiones al finalizar.
- **Evidencia:** suite ejecutable con `npm test` y reporte con
  `npm run test:coverage`; explicar qué código cubre y qué casos faltan.
- **Instalación:** en el backend,
  `npm install -D supertest @types/supertest`; reutilizar Vitest y el driver SQL.
  Referencia: [Supertest](https://github.com/forwardemail/supertest).

### 16 de octubre — Autenticación con JWT

- **Objetivo:** identificar al usuario mediante credenciales y un token firmado.
- **Preparación previa:** usuarios de prueba, variables de entorno para firma
  y expiración, y endpoint de login.
- **Contenido:** hashing de contraseñas, claims, firma, verificación,
  expiración y encabezado `Authorization: Bearer`. Decodificar no equivale
  a verificar la firma.
- **Práctica:** implementar login con `jsonwebtoken`, verificar tokens y
  rechazar credenciales incorrectas o tokens vencidos.
- **Evidencia:** login funcional y pruebas de token válido, alterado y expirado;
  respuestas sin contraseñas ni secretos.
- **Instalación:** en el backend, `npm install jsonwebtoken bcryptjs` y
  `npm install -D @types/jsonwebtoken`; Thunder Client o Postman.
  Referencias: [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) y
  [bcryptjs](https://github.com/dcodeIO/bcrypt.js).

### 19 de octubre — Patrón adaptador e inyección de dependencias

- **Objetivo:** cambiar la implementación JWT sin modificar los consumidores.
- **Preparación previa:** login de la clase anterior y pruebas de autenticación.
- **Contenido:** contrato asíncrono para firmar y verificar, adaptadores
  `jsonwebtoken` y `jose`, e inyección por constructor o función fábrica.
- **Práctica:** encapsular `jsonwebtoken`, crear el adaptador de `jose` con
  `SignJWT` y `jwtVerify`, y seleccionar la dependencia en el arranque.
  Ambos adaptadores aplican los mismos claims, algoritmo y expiración.
- **Evidencia:** ejecutar los mismos casos de prueba contra los dos adaptadores;
  servicios y middlewares dependen del contrato, no de las librerías concretas.
- **Instalación:** en el backend, `npm install jose`; reutilizar los paquetes
  anteriores. No se requiere un contenedor de inyección adicional.
  Referencia: [jose](https://github.com/panva/jose).

### 20 de octubre — Autorización con middlewares

- **Objetivo:** permitir operaciones según la identidad, el rol y el recurso.
- **Preparación previa:** adaptador JWT inyectable y usuarios con roles distintos.
- **Contenido:** autenticación frente a autorización, encadenamiento de
  middlewares, identidad en la petición y respuestas 401 y 403.
- **Práctica:** proteger rutas y verificar el rol o la propiedad del recurso
  desde el servidor, sin confiar en el usuario indicado por el cliente.
- **Evidencia:** pruebas de acceso permitido, token ausente o inválido,
  rol insuficiente e intento de acceso a datos ajenos.
- **Instalación:** sin nuevos paquetes; reutilizar Express, el adaptador JWT,
  Vitest, Supertest y la herramienta HTTP.

### 21 de octubre — Manejo de errores

- **Objetivo:** responder de manera consistente ante errores de la API.
- **Preparación previa:** rutas con errores de validación, consulta y permisos.
- **Contenido:** middleware `(err, req, res, next)` al final del pipeline,
  errores controlados, fallos inesperados y propagación asíncrona en Express 5.
- **Práctica:** centralizar respuestas de error, mapear códigos HTTP y registrar
  detalles internos sin enviarlos al cliente.
- **Evidencia:** pruebas de errores síncronos y asíncronos; respuestas uniformes
  sin stack traces ni información sensible.
- **Instalación:** sin nuevos paquetes; Express 5 ya maneja rechazos de promesas
  retornadas por handlers. Referencia:
  [manejo de errores de Express](https://expressjs.com/en/guide/error-handling/).

### 22 de octubre — Limitación de solicitudes

- **Objetivo:** reducir el abuso de endpoints mediante límites de solicitudes.
- **Preparación previa:** API y login funcionales; usar límites bajos en pruebas.
- **Contenido:** ventana y máximo de solicitudes, límites generales y de login,
  respuesta 429, cabeceras y efecto de un proxy sobre la identificación del cliente.
- **Práctica:** configurar `express-rate-limit` y comprobar que el límite se
  activa sin bloquear solicitudes permitidas. Explicar que limita tráfico en
  la aplicación y no garantiza protección frente a un DDoS volumétrico.
- **Evidencia:** prueba del umbral y respuesta 429; documentar la configuración
  prevista de `trust proxy` según la infraestructura real.
- **Instalación:** en el backend, `npm install express-rate-limit`;
  reutilizar Vitest y Supertest. Referencia:
  [express-rate-limit](https://express-rate-limit.mintlify.app/quickstart/usage).

### 23 de octubre — Configuración de servidores 1

- **Objetivo:** ejecutar el backend como servicio en un entorno Linux.
- **Preparación previa:** entorno asignado por el docente, acceso SSH,
  Node.js LTS y BD disponibles, repositorio y configuración de ejemplo.
- **Contenido:** acceso por llave SSH, usuario de servicio, variables de entorno,
  compilación TypeScript, systemd y consulta de logs.
- **Práctica:** instalar dependencias, compilar y configurar una unidad de
  systemd que ejecute el archivo compilado, por ejemplo `dist/app.js`.
  Verificar que el script de producción apunte a la salida real de `tsc`.
- **Evidencia:** API accesible en el servidor, servicio que reinicia correctamente
  y pasos de configuración sin credenciales en el repositorio.
- **Instalación:** extensión Remote SSH en el equipo local. En Ubuntu, si falta
  el servicio SSH, `sudo apt install openssh-server`; en el backend del servidor,
  `npm ci` y `npm run build`. Configurar systemd y verificar con
  `systemctl status nombre-del-servicio` y `journalctl -u nombre-del-servicio`.
  Referencias: [OpenSSH en Ubuntu](https://ubuntu.com/server/docs/how-to/security/openssh-server/)
  y [Node.js](https://nodejs.org/en/download).

### 28 de octubre — Paginación 1

- **Objetivo:** entregar consultas paginadas desde el backend.
- **Preparación previa:** listado funcional y suficientes registros para formar
  varias páginas.
- **Contenido:** `page`, `limit`, tamaño máximo, `LIMIT/OFFSET`, orden estable y
  metadatos de total y páginas.
- **Práctica:** paginar un listado con consultas parametrizadas y validación
  de parámetros, conservando los filtros y controles de acceso existentes.
- **Evidencia:** primera y última página, resultado vacío, página fuera de rango
  y parámetros inválidos; documentar el contrato de la respuesta.
- **Instalación:** sin nuevos paquetes; reutilizar `mysql2` o Sequelize y
  Thunder Client o Postman.

### 29 de octubre — Frontend vanilla 1

- **Objetivo:** construir una interfaz dinámica con JavaScript nativo.
- **Preparación previa:** HTML y CSS del proyecto y datos locales de ejemplo.
- **Contenido:** módulos, selección de elementos del DOM, eventos y renderizado.
- **Práctica:** mostrar un listado y actualizar la interfaz a partir de eventos.
  Utilizar `textContent` para representar datos de usuario.
- **Evidencia:** interfaz que responde a acciones del usuario sin recargar la página.
- **Instalación:** ningún paquete npm; extensión Live Server y DevTools del navegador.
  Referencia: [DOM en MDN](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model).

### 30 de octubre — Frontend vanilla 2

- **Objetivo:** consumir la API desde el navegador.
- **Preparación previa:** interfaz del día anterior y frontend servido bajo el
  mismo origen que la API, preparado por el docente.
- **Contenido:** Fetch, JSON, `async/await`, códigos HTTP y estados de carga,
  vacío y error; envío del token cuando la ruta lo requiere.
- **Práctica:** sustituir los datos locales por una consulta a la API y gestionar
  respuestas no exitosas comprobando `response.ok`.
- **Evidencia:** listado obtenido del servidor y mensajes ante fallos de red
  o rechazo de acceso. Mantener el token en memoria para la práctica.
- **Instalación:** sin paquetes adicionales; Fetch y DevTools son nativos.
  Referencia: [Fetch en MDN](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch).

### 3 de noviembre — Frontend vanilla 3

- **Objetivo:** completar un flujo CRUD mediante formularios.
- **Preparación previa:** consumo de la API y endpoints de escritura protegidos.
- **Contenido:** captura de datos, validación en cliente, envío de formularios,
  mensajes del servidor y prevención de envíos duplicados.
- **Práctica:** crear o editar un recurso y actualizar el listado; conservar
  la validación del servidor como autoridad.
- **Evidencia:** flujo de escritura completo, errores visibles y recuperación
  de la interfaz después de una operación fallida.
- **Instalación:** sin nuevos paquetes; reutilizar el frontend y DevTools.

### 4 de noviembre — Pruebas E2E 1

- **Objetivo:** automatizar un flujo completo del frontend vanilla.
- **Preparación previa:** frontend, backend y BD de pruebas funcionando;
  preparar datos y credenciales reproducibles.
- **Contenido:** navegador automatizado, localizadores por rol o etiqueta,
  assertions, fixtures y aislamiento de datos.
- **Práctica:** automatizar login, creación de un recurso y comprobación del
  resultado en pantalla, usando el backend y la persistencia reales.
- **Evidencia:** prueba exitosa y reproducible disponible antes del sprint 3.
- **Instalación:** en el paquete del frontend vanilla que alojará la suite,
  ejecutar `npm init -y` si aún no existe `package.json`,
  `npm install -D @playwright/test` y `npx playwright install chromium`.
  Instalar la extensión Playwright, configurar un proyecto Chromium y `baseURL`,
  y ejecutar `npx playwright test`.
  Referencia: [Playwright](https://playwright.dev/docs/intro).

### 5 de noviembre — Configuración de servidores 2

- **Objetivo:** publicar la aplicación mediante un proxy y HTTPS.
- **Preparación previa:** servicio del backend operativo, frontend vanilla,
  dominio de práctica y DNS preparados por el docente.
- **Contenido:** Nginx, proxy para `/api`, archivos estáticos, puertos públicos,
  certificados y renovación. Ajustar la confianza en el proxy a esta topología.
- **Práctica:** servir el frontend y la API bajo el mismo origen, validar
  la configuración de Nginx y habilitar HTTPS.
- **Evidencia:** URL HTTPS funcional y comprobación de acceso y límites de
  solicitudes detrás del proxy.
- **Instalación:** en Ubuntu, `sudo apt update` y
  `sudo apt install nginx certbot python3-certbot-nginx`; validar con
  `sudo nginx -t`. Con el dominio ya configurado, ejecutar
  `sudo certbot --nginx -d dominio-del-curso` y
  `sudo certbot renew --dry-run`. Sustituir el dominio de ejemplo.
  Referencias: [Nginx en Ubuntu](https://ubuntu.com/server/docs/how-to/web-services/install-nginx/)
  y [Certbot](https://certbot.eff.org/).

### 6 de noviembre — Configuración de servidores 3

- **Objetivo:** reproducir el despliegue mediante un pipeline de CI/CD.
- **Preparación previa:** despliegue manual comprobado, suite de integración y
  E2E inicial, acceso al repositorio y secretos configurados en GitHub.
- **Contenido:** instalación reproducible, pruebas, compilación, artefactos,
  despliegue del backend y frontend vanilla, y verificación posterior.
- **Práctica:** construir un workflow que valide cambios y despliegue una
  versión aprobada, reinicie el servicio y compruebe la URL.
  CI y E2E utilizan una BD de pruebas, separada de la aplicación publicada.
- **Evidencia:** pipeline satisfactorio, URL desplegada y documentación de los
  pasos; incluir estos resultados en el sprint 3.
- **Instalación:** no agregar dependencias de producción. Reutilizar GitHub
  Actions y, en cada paquete, `npm ci`; en el backend,
  `npm test` y `npm run build`; en el paquete E2E del runner Linux,
  `npx playwright install --with-deps chromium` y `npx playwright test`.
  Referencia: [Node.js en GitHub Actions](https://docs.github.com/en/actions/tutorials/build-and-test-code/nodejs).

### 11 de noviembre — Frontend React 1

- **Objetivo:** construir la base del frontend con componentes React.
- **Preparación previa:** API existente y flujo vanilla como referencia.
- **Contenido:** Vite, TypeScript, JSX, componentes, props y organización inicial.
- **Práctica:** crear un frontend independiente del vanilla y representar un
  listado mediante componentes. Preparar el proxy de Vite para `/api`.
- **Evidencia:** aplicación que inicia y compila, con componentes reutilizables.
- **Instalación:** desde la carpeta del proyecto, crear un directorio nuevo:

  ```sh
  npm create vite@latest frontend-react -- --template react-ts
  cd frontend-react
  npm install
  npm run dev
  ```

  React, React DOM y las dependencias de desarrollo se incluyen en la plantilla.
  Instalar la extensión ESLint y React DevTools.
  Referencias: [Vite](https://vite.dev/guide/) y
  [React](https://react.dev/learn).

### 12 de noviembre — Frontend React 2

- **Objetivo:** gestionar el estado y los efectos de los componentes.
- **Preparación previa:** aplicación creada y componentes del listado.
- **Contenido:** `useState`, eventos, formularios controlados y `useEffect`,
  incluyendo dependencias y limpieza cuando corresponda.
- **Práctica:** agregar interacciones y estados de carga, vacío y error usando
  datos de ejemplo.
- **Evidencia:** cambios de estado previsibles, sin modificar directamente
  los datos del componente ni provocar ciclos de efectos.
- **Instalación:** sin nuevos paquetes; reutilizar React y sus herramientas.

### 13 de noviembre — Frontend React 3

- **Objetivo:** consumir la API mediante Axios.
- **Preparación previa:** componentes con estado y proxy de desarrollo preparado.
- **Contenido:** instancia HTTP, URL base, métodos, errores, cancelación e
  interceptores para enviar el token y manejar rechazos de autenticación.
- **Práctica:** integrar consultas y una operación de escritura con la API;
  gestionar carga y errores desde el frontend.
- **Evidencia:** datos del backend visibles y tratamiento de fallos HTTP,
  incluido el cierre de sesión ante un token inválido.
- **Instalación:** en `frontend-react`, `npm install axios`.
  Referencia: [Axios](https://axios-http.com/docs/intro).

### 17 de noviembre — Frontend React 4

- **Objetivo:** compartir estado entre componentes con Zustand.
- **Preparación previa:** consumo de la API y necesidades de estado compartido.
- **Contenido:** stores, acciones, selectores y distinción entre estado local
  y global.
- **Práctica:** centralizar identidad y token de sesión en memoria, con acciones
  de login y logout, y conectar el estado al cliente HTTP.
- **Evidencia:** componentes sincronizados y limpieza del estado al cerrar sesión.
  La autorización efectiva continúa en el backend.
- **Instalación:** en `frontend-react`, `npm install zustand`.
  Referencia: [Zustand](https://github.com/pmndrs/zustand).

### 18 de noviembre — Frontend React 5

- **Objetivo:** separar la lógica de aplicación de la presentación.
- **Preparación previa:** componentes que consumen API y utilizan estado.
- **Contenido:** containers pattern, responsabilidades, props y reutilización
  de componentes de presentación.
- **Práctica:** refactorizar un flujo CRUD para que el container gestione datos
  y acciones, y los componentes de presentación reciban props.
- **Evidencia:** comportamiento conservado y componentes de presentación que
  no dependen directamente del cliente HTTP ni del store.
- **Instalación:** sin nuevos paquetes; el patrón se implementa con React.

### 19 de noviembre — Frontend React 6

- **Objetivo:** gestionar formularios y validación con FormKit.
- **Preparación previa:** container del formulario y contrato del endpoint.
- **Contenido:** proveedor de FormKit, campos, reglas, mensajes y envío.
- **Práctica:** reemplazar un formulario por FormKit y mostrar tanto los errores
  del cliente como los del servidor, evitando envíos duplicados.
- **Evidencia:** formulario funcional con datos válidos, inválidos y rechazo
  del backend.
- **Instalación:** en `frontend-react`,
  `npm install @formkit/react @formkit/core @formkit/inputs`.
  Envolver la aplicación con el proveedor de la integración oficial:

  ```tsx
  import { FormKitProvider, defaultConfig } from '@formkit/react'

  <FormKitProvider config={defaultConfig()}>
    <App />
  </FormKitProvider>
  ```

  Utilizar los campos gratuitos de FormKit.
  Referencia: [instalación de FormKit para React](https://formkit.com/getting-started/installation).

### 20 de noviembre — Frontend React 7

- **Objetivo:** aplicar estilos responsivos mediante Tailwind CSS.
- **Preparación previa:** componentes y formulario de las sesiones anteriores.
- **Contenido:** utilidades, distribución, breakpoints, foco, estados y estilos
  de componentes, incluidos los campos del formulario.
- **Práctica:** dar estilo al listado y al formulario para móvil y escritorio,
  conservando etiquetas y navegación por teclado.
- **Evidencia:** interfaz responsiva con estados de carga, error y acciones
  claramente visibles para la revisión del sprint 4.
- **Instalación:** en `frontend-react`,
  `npm install -D tailwindcss @tailwindcss/vite`; instalar Tailwind CSS IntelliSense.
  Agregar `tailwindcss()` de `@tailwindcss/vite` a los plugins de Vite,
  conservando el plugin React, y escribir `@import "tailwindcss";`
  en la hoja CSS importada por la aplicación. Usar clases propias para FormKit,
  sin requerir un tema adicional.
  Referencia: [Tailwind con Vite](https://tailwindcss.com/docs/installation/using-vite).

### 25 de noviembre — Frontend React 8

- **Objetivo:** consolidar el frontend React del proyecto.
- **Preparación previa:** API, cliente Axios, stores, containers, formularios
  y estilos funcionando.
- **Contenido:** integración de pantallas, estados de sesión y errores,
  revisión de responsabilidades y build de producción.
- **Práctica:** completar y revisar un flujo de usuario; publicar el build
  de React usando el mecanismo de despliegue ya configurado.
- **Evidencia:** frontend integrado con la API y build publicado; registrar
  pendientes de la revisión del sprint 4.
- **Instalación:** sin nuevos paquetes; en `frontend-react`, ejecutar
  `npm run lint` y `npm run build`. El resultado `dist/` contiene los archivos
  estáticos para Nginx; las variables `VITE_*` no deben contener secretos.

### 26 de noviembre — Paginación 2

- **Objetivo:** navegar un listado paginado desde React.
- **Preparación previa:** contrato del backend del 28 de octubre y frontend
  React integrado.
- **Contenido:** página actual, tamaño, total, controles anterior/siguiente,
  filtros y estados de carga o resultado vacío.
- **Práctica:** conectar controles a la API; reiniciar la página al cambiar
  filtros y evitar navegación fuera de los límites.
- **Evidencia:** listado paginado funcional, incluida la última página, un
  filtro sin resultados y un fallo de consulta.
- **Instalación:** sin nuevos paquetes; reutilizar React, Axios y el endpoint
  paginado. El container gestiona los datos y la presentación muestra controles.

### 27 de noviembre — Pruebas E2E 2

- **Objetivo:** ampliar la suite E2E sobre el frontend React.
- **Preparación previa:** frontend integrado, paginación y BD de pruebas con
  datos aislados; adaptar la suite inicial al nuevo frontend.
- **Contenido:** escenarios de permisos, datos inválidos, paginación, trazas,
  reporte HTML y ejecución en CI.
- **Práctica:** automatizar los flujos relevantes con backend real y agregar
  la suite de React al pipeline existente.
- **Evidencia:** suite reproducible, reporte y trazas de fallos; registrar los
  pendientes para la entrega final. La cobertura del código se revisa aparte
  con las suites unitarias y de integración.
- **Instalación:** en `frontend-react`, `npm install -D @playwright/test`
  y `npx playwright install chromium`; configurar un proyecto Chromium,
  `baseURL` y la preparación de datos. Ejecutar
  `npx playwright test --reporter=html` y `npx playwright show-report`;
  reutilizar la extensión Playwright. Referencias:
  [trazas](https://playwright.dev/docs/trace-viewer-intro) y
  [CI](https://playwright.dev/docs/ci).

## Seguimiento de los sprints y cierre

Las revisiones se realizan en las fechas de [project.md](project.md). En los
dos días de cada revisión se reservan las sesiones completas, sin contenido
nuevo. Las mitades A y B presentan el día que les corresponde.

| Etapa | Fechas | Preparación vinculada a las clases |
| --- | --- | --- |
| Sprint 1 | 12 y 13 de octubre | Planeación, historias, responsables y requisitos de seguridad según la rúbrica; ocurre antes del inicio de estos contenidos. |
| Sprint 2 | 26 y 27 de octubre | Flujo con persistencia, pruebas de integración, autenticación, autorización, errores y límites en las funcionalidades implementadas. |
| Sprint 3 | 9 y 10 de noviembre | Frontend vanilla integrado, prueba E2E inicial, URL desplegada, infraestructura documentada y CI/CD satisfactorio. React inicia después de esta revisión. |
| Sprint 4 | 23 y 24 de noviembre | Evidencia del frontend React visto hasta el 20 de noviembre, continuidad de pruebas y despliegue, y atención de observaciones. La integración final de React y ampliación E2E continúan después. |
| Entrega final | 11 de diciembre | Aplicación desplegada, documentación, reporte, defensa y pruebas con al menos 90% de cobertura, conforme a la rúbrica. |

En cada revisión se actualizan historias, tareas, responsables y acciones de
retroalimentación. El 27 de noviembre termina la enseñanza de estos temas;
el tiempo posterior se dedica al cierre del proyecto y a atender pendientes.

El **90% de cobertura corresponde a la entrega final**, no se exige como
resultado de la primera clase de pruebas. Documentar el alcance del reporte
de cobertura de las suites unitarias y de integración y entregar, por separado,
los resultados E2E. No convertir el porcentaje de pruebas E2E exitosas en
cobertura de código.

Antes de cerrar la planeación, comprobar que cada sesión tenga su preparación,
objetivo, práctica, evidencia y herramientas, y que el calendario conserve
25 clases de contenido, 8 días de revisión y las dos fechas excluidas.
