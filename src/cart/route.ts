import { OpenAPIHono } from '@hono/zod-openapi'
import * as cartService from './service'

const API_TAG = ['Carts']

export const cartRoutes = new OpenAPIHono()
  .openapi(
    {
      method: 'get',
      path: '/',
      description: 'Get cart items',
      responses: {
        200: {
          description: 'Cart items list',
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      // todo: if user is logged in, use user id instead of session token
      const token = c.req.header('Session-Token') || ''
      const products = await cartService.getItemsBySessionToken(token)

      return c.json({
        message: 'Success',
        data: products,
      })
    },
  )
