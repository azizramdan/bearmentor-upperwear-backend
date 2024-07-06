import { OpenAPIHono } from '@hono/zod-openapi'
import * as productService from './service'
import { ProductSlugSchema } from './schema'

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

// get product by slug
  .openapi(
    {
      method: 'get',
      path: '/{slug}',
      description: 'Get product by slug',
      request: {
        params: ProductSlugSchema,
      },
      responses: {
        200: {
          description: 'Product details',
        },
        404: {
          description: 'Product not found',
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const product = await productService.getBySlug(c.req.param('slug')!)

      if (!product) {
        return c.json({ message: 'Product not found' }, 404)
      }

      return c.json({
        message: 'Success',
        data: product,
      })
    },
  )
