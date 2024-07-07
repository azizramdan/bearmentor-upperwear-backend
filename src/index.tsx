import { swaggerUI } from '@hono/swagger-ui'
import { OpenAPIHono } from '@hono/zod-openapi'
import { cors } from 'hono/cors'
import { WelcomePage } from './welcome'
import { productRoutes } from './products/route'
import { collectionRoutes } from './collections/route'
import { cartRoutes } from './cart/route'

const app = new OpenAPIHono({ strict: false })

app.use('/api/*', cors({
  origin: process.env.CORS_ORIGIN?.split(',') ?? [],
}))

app.route('/api/products', productRoutes)
app.route('/api/collections', collectionRoutes)
app.route('/api/carts', cartRoutes)

app.doc31('/api-spec', {
  openapi: '3.1.0',
  info: {
    version: '0.0.1',
    title: 'UpperWear API',
    description: 'UpperWear is an online store that sells a variety of tops.',
  },
})
app.get('/api', swaggerUI({ url: '/api-spec' }))

app.get('/', c => c.html(
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

export default app
