# Vitest

Configuración usada por el backend de Universitienda (`classes/B/universitienda/backend`). Las pruebas están en `tests/`.

## Configuración actual

```ts
dotenv.config({ path: '.env.test' });

test: {
  environment: 'node',
  globals: true,
  coverage: {
    clean: false,
    reporter: ['text', 'html', 'json'],
    reportsDirectory: './coverage',
    reportOnFailure: true,
  },
}
```

- `dotenv.config`: carga las variables de entorno de `.env.test`.
- `environment: 'node'`: ejecuta las pruebas en Node.js.
- `globals: true`: habilita las funciones de prueba como globales (`describe`, `it`, `expect`).
- `coverage.clean: false`: no limpia el directorio de cobertura antes de generar reportes.
- `coverage.reporter`: produce reportes de texto, HTML y JSON.
- `coverage.reportsDirectory: './coverage'`: guarda los reportes en `coverage`.
- `coverage.reportOnFailure: true`: genera el reporte de cobertura aunque fallen pruebas.

## Scripts de pruebas

Ejecutar desde `classes/B/universitienda/backend`:

| Script | Comando | Descripción |
| --- | --- | --- |
| `test` | `npm test` | Ejecuta Vitest una vez (`vitest run`). |
| `test:watch` | `npm run test:watch` | Ejecuta Vitest en modo observación; vuelve a correr las pruebas al detectar cambios. |
| `test:coverage` | `npm run test:coverage` | Ejecuta las pruebas una vez y recopila cobertura (`vitest run --coverage`). |
