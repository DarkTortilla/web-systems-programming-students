# Actividad: pruebas unitarias de utilitarios

Escribe pruebas unitarias sencillas con **Vitest y TypeScript** para los
archivos vistos en clase:

- [password.util.ts](../classes/Gu/pos/backend/src/utils/password.util.ts):
  genera hashes y compara contraseñas.

## Objetivo

Comprobar el comportamiento de cada función mediante entradas y resultados
esperados. Importa las funciones reales; estas pruebas no necesitan iniciar
el servidor ni conectarse a una base de datos.

## Organización

Crea estos archivos dentro del backend de tu proyecto:

```text
tests/
└── src/
    └── utils/
        ├── password.test.ts
        └── generateCode.test.ts
```

Agrupa las pruebas con `describe` y escribe cada caso con `it` y `expect`.
Importa estas funciones desde `vitest`.

## Ejercicio 1: contraseñas

En la suite de contraseñas, define dos contraseñas diferentes de ejemplo:

- `password1`: `"ClaveUno123!"`.
- `password2`: `"ClaveDos456!"`.

Genera `hash1` a partir de `password1` y `hash2` a partir de `password2`
usando `hashPassword`. 

Implementa los siguientes casos:

| Caso | Acción | Resultado esperado |
| --- | --- | --- |
| Generación de hashes | Revisar `hash1` y `hash2`. | Cada uno es una cadena no vacía y diferente de su contraseña original. |
| Contraseña correcta | Ejecutar `comparePassword(password1, hash1)` y `comparePassword(password2, hash2)`. | Ambas comparaciones devuelven `true`. |
| Contraseña incorrecta | Ejecutar `comparePassword(password2, hash1)` y `comparePassword(password1, hash2)`. | Ambas comparaciones devuelven `false`. |

Usa `await` tanto al generar los hashes como al comparar las contraseñas.

No compares el hash con un texto fijo: bcrypt utiliza una sal aleatoria y
puede generar hashes distintos para una misma contraseña. Usa las funciones
reales, sin simular bcrypt ni los utilitarios.


```bash
npm test -- tests/src/utils/password.test.ts tests/src/utils/generateCode.test.ts
```

Entrega dl archivo de pruebas y una captura o salida de terminal que
muestre que todos los casos pasan. 
