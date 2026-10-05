# Proyecto de Programación de Sistemas Web

El proyecto consiste en desarrollar una aplicación web (propuesta ya entregada). Se evaluará su planeación, desarrollo,
seguridad, calidad y funcionamiento mediante cuatro revisiones de sprints de
dos semanas y una entrega final.

El proyecto representa el **30% de la calificación de la materia**, conforme a
[EVALUATION.md](EVALUATION.md). Los porcentajes de este documento distribuyen
el **100% de la calificación del proyecto**.

## Calendario y entregables


| Etapa | Mitad A | Mitad B | Entregables principales | Peso del proyecto |
| --- | --- | --- | --- | ---: |
| Sprint 1: planeación | 12 de octubre | 13 de octubre | Requerimientos, casos de uso, modelo entidad-relación (ER), historias de usuario, criterios de aceptación, responsables, metas y requisitos de seguridad. | 10% |
| Sprint 2: implementación inicial | 26 de octubre | 27 de octubre | Primer flujo funcional con persistencia, separación de responsabilidades, controles de seguridad y pruebas de integración. | 15% |
| Sprint 3: integración y despliegue | 9 de noviembre | 10 de noviembre | Funcionalidades integradas, autenticación y autorización, pruebas de integración y E2E, infraestructura configurada y CI/CD funcional. | 20% |
| Sprint 4: consolidación | 23 de noviembre | 24 de noviembre | Cumplimiento de metas, atención de observaciones, corrección de vulnerabilidades y deuda técnica, pruebas, infraestructura y CI/CD funcionales. | 20% |
| Entrega final | 11 de diciembre | 11 de diciembre | Aplicación desplegada, repositorio, documentación y reporte, pruebas con al menos 90% de cobertura, presentación y defensa. | 35% |
| **Total** | | | | **100%** |

Las revisiones ocurren cada dos semanas. La planeación inicial se entrega en
la revisión del 12 o 13 de octubre. Después del cuarto sprint, el tiempo
restante se dedica al cierre y la entrega final.

En **todos los sprints** se deben actualizar las historias de usuario, las
tareas y sus responsables, así como atender las notas de la revisión anterior.
La configuración de infraestructura y CI/CD comienza a exigirse y evaluarse
en el **sprint 3**.

## Rúbrica de evaluación


| Criterio | Sprint 1 | Sprint 2 | Sprint 3 | Sprint 4 | Final |
| --- | ---: | ---: | ---: | ---: | ---: |
| Planeación, actualización de historias y asignación de tareas y responsables | 50% | 10% | 5% | 5% | 5% |
| Coherencia del proyecto y cumplimiento de metas | 15% | 15% | 10% | 10% | 10% |
| Separación de responsabilidades y uso correcto de controladores, modelos, rutas y middlewares | 10% | 15% | 10% | 10% | 10% |
| Calidad del código y buenas prácticas | 0% | 10% | 10% | 10% | 10% |
| Actualización de tareas en GitHub y commits oportunos siguiendo Gitflow | 15% | 15% | 10% | 10% | 5% |
| Seguridad | 10% | 20% | 25% | 25% | 30% |
| Pruebas automatizadas de integración | 0% | 15% | 10% | 10% | 10% |
| Pruebas automatizadas E2E | 0% | 0% | 5% | 5% | 10% |
| Configuración de infraestructura y despliegue reproducible | 0% | 0% | 10% | 10% | 5% |
| CI/CD funcional | 0% | 0% | 5% | 5% | 5% |
| **Total por etapa** | **100%** | **100%** | **100%** | **100%** | **100%** |

Cada criterio se calificará según el cumplimiento demostrado: completo y
funcional, parcial o sin evidencia. El cumplimiento completo obtiene todos
los puntos del criterio; el parcial obtiene una proporción acorde con la
evidencia y las observaciones registradas; la ausencia de evidencia obtiene
cero puntos. 

### Evidencias requeridas

- **Planeación y seguimiento:** requerimientos, casos de uso, modelo ER e
  historias de usuario con criterios de aceptación. Mantener tareas con
  responsables y metas por sprint; presentar su actualización y la atención
  de observaciones anteriores en cada revisión.
- **Funcionamiento y arquitectura:** demostrar las metas comprometidas y la
  coherencia entre requerimientos, modelo de datos y aplicación. Comprobar la
  separación de responsabilidades y el uso correcto de controladores,
  modelos, rutas y middlewares. En el primer sprint, presentar el diseño
  propuesto de esta organización.
- **Código y GitHub:** mostrar código funcional, nombres claros y seguimiento
  de buenas prácticas; revisar duplicación y deuda técnica. Presentar tablero,
  issues, commits y pull requests que permitan comprobar el avance y las
  contribuciones de cada integrante. Los commits deben realizarse durante el
  sprint, con mensajes claros y cambios relacionados con las tareas.
- **Gitflow:** utilizar `main` para versiones estables, `develop` para
  integración y `feature/*` para funcionalidades, con integración mediante
  pull requests. Usar `release/*` y `hotfix/*` cuando corresponda.
- **Seguridad:** en el sprint 1, documentar validaciones previstas, acceso por
  roles, protección de secretos y casos de prueba. Desde el sprint 2,
  demostrar validación de entradas en el servidor, códigos de estado HTTP
  correctos, autenticación, autorización y ausencia de secretos expuestos en
  las funcionalidades implementadas.
- **Pruebas automatizadas:** entregar instrucciones y resultados
  reproducibles de pruebas de integración y E2E según la etapa. Comprobar
  flujos exitosos, entradas inválidas y restricciones de acceso. En la entrega
  final, incluir el reporte de cobertura de la suite, con al menos **90%**.
- **Infraestructura y CI/CD:** desde el sprint 3, presentar la URL de la
  aplicación desplegada, instrucciones de configuración y despliegue
  reproducible, y ejecuciones satisfactorias del pipeline de integración y
  despliegue continuos. La configuración documentada no debe incluir secretos.
- **Entrega final:** entregar enlaces al repositorio y a la aplicación,
  documentación de instalación, configuración y uso, reporte del proyecto,
  resultados de pruebas y evidencia de CI/CD. Presentar y defender el
  funcionamiento y las decisiones del proyecto.

## Retroalimentación y seguimiento

Al finalizar **cada sprint**, se registrarán notas para el equipo con las
metas cumplidas, los pendientes, los problemas de calidad y seguridad y las
correcciones requeridas.

El equipo debe convertir las acciones de seguimiento en tareas de GitHub con
responsable, criterio de aceptación y fecha comprometida para la siguiente
revisión. La asignación y actualización de tareas se mantiene durante todos
los sprints. En cada revisión se comprobará la atención de las notas
anteriores; las observaciones del sprint 4 se revisarán en la entrega final.

## Penalizaciones

- Los nombres poco claros, el código no funcional, la duplicación y la deuda
  técnica reducen los puntos del criterio afectado.
- Las fallas de seguridad no críticas reducen los puntos del criterio de
  seguridad según el cumplimiento demostrado.
- Una falla crítica comprobada, como credenciales expuestas, acceso a recursos
  protegidos sin autenticación, acceso a datos ajenos sin autorización o
  inyección SQL explotable, deja **seguridad en cero y descuenta 10 puntos
  adicionales de la calificación de esa etapa**.
- El descuento adicional se aplica **una sola vez por etapa**, aunque existan
  varias fallas críticas. 
- Cada hallazgo debe documentarse con su evidencia. 

## Cálculo de la calificación

Calcular cada etapa sobre 100 puntos con la rúbrica. Si existe una falla
crítica comprobada, asignar cero al criterio de seguridad y después restar
los 10 puntos adicionales. 

Usar las calificaciones resultantes, de 0 a 100, en la fórmula:

**Calificación del proyecto = S1 × 0.10 + S2 × 0.15 + S3 × 0.20 + S4 × 0.20 + final × 0.35.**

Por ejemplo, en el sprint 3, una falla crítica elimina los 25 puntos de
seguridad. Si todos los demás criterios obtienen sus puntos completos, la
calificación será 75 − 10 = **65/100**.

La aportación del proyecto a la calificación de la materia se obtiene
multiplicando su calificación por **0.30**.
