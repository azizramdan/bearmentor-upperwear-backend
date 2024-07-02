import { OpenAPIHono } from '@hono/zod-openapi'
import * as productService from './service'

const API_TAG = ['Products']

export const productRoutes = new OpenAPIHono()
  // get all products
  .openapi(
    {
      method: 'get',
      path: '/',
      description: 'Get all products',
      responses: {
        200: {
          description: 'List of products',
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const products = await productService.getAll()

      return c.json({
        message: 'Success',
        data: products,
      })
    },
  )
