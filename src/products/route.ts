import { OpenAPIHono } from '@hono/zod-openapi'
import { QueryProductSchema } from './schema'
import * as productService from './service'

const API_TAG = ['Products']

export const productRoutes = new OpenAPIHono()
  // get all products
  .openapi(
    {
      method: 'get',
      path: '/',
      description: 'Get all products',
      request: {
        query: QueryProductSchema,
      },
      responses: {
        200: {
          description: 'List of products',
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const products = await productService.getAll(c.req.query())

      return c.json({
        message: 'Success',
        data: products,
      })
    },
  )
