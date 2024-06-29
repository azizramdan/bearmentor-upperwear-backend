import { swaggerUI } from "@hono/swagger-ui";
import { OpenAPIHono } from "@hono/zod-openapi";
import { WelcomePage } from "./welcome";

export default new OpenAPIHono({ strict: false })

  .doc31('/api-spec', {
    openapi: '3.1.0',
    info: {
      version: '0.0.1',
      title: 'UpperWear API',
      description: 'UpperWear is an online store that sells a variety of tops.',
    },
  })
  .get('/api', swaggerUI({ url: '/api-spec' }))

  .get('/', c => c.html(
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Welcome to UpperWear REST API</title>
        <meta name="description" content="UpperWear is an online store that sells a variety of tops." />
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        <WelcomePage />
      </body>
    </html>,
  ))