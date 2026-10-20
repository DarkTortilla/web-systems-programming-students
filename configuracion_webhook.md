# Configurar el webhook del proyecto final

Necesitas ser propietario del repositorio o tener permisos de administrador. Antes de comenzar, confirma con el docente que el flujo de n8n esté publicado.

1. Abre tu repositorio en GitHub.
2. Entra a **Settings → Webhooks → Add webhook**.
3. Completa estos campos:

| Campo | Valor |
|---|---|
| **Payload URL** | `https://n8n.centlitech.com/webhook/github-student-projects` |
| **Content type** | `application/json` |
| **Secret** | El secreto proporcionado por la jefa/el jefe de grupo, exactamente como lo recibiste. |

4. En **Which events would you like to trigger this webhook?**, selecciona **Let me select individual events** y marca únicamente:

- **Pushes**
- **Pull requests**
- **Pull request reviews**
- **Pull request review comments**
- **Issues**
- **Issue comments**

5. Mantén activada la verificación SSL y marca **Active**.
6. Haz clic en **Add webhook**.
7. Abre el webhook creado y revisa **Recent Deliveries**: la entrega inicial `ping` debe responder **200**. Después, realiza un `push` y comprueba que su entrega también responda **200**.

Si no encuentras Webhooks o las entregas fallan, avisa al docente. No publiques el secreto en el repositorio.

Referencia: [Documentación de GitHub](https://docs.github.com/en/webhooks/using-webhooks/creating-webhooks).
