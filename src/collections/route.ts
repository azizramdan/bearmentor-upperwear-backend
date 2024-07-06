import { OpenAPIHono } from '@hono/zod-openapi'
import * as collectionService from './service'
import { CollectionSlugSchema } from './schema'

const API_TAG = ['Collections']

export const collectionRoutes = new OpenAPIHono()
// get products by collection's slug
  .openapi(
    {
      method: 'get',
      path: '/{slug}',
      description: 'Get products by collection\'s slug',
      request: {
        params: CollectionSlugSchema,
      },
      responses: {
        200: {
          description: 'Products list',
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const products = await collectionService.getProductsBySlug(c.req.param('slug')!)

      return c.json({
        message: 'Success',
        data: products,
      })
    },
  )
