import { OpenAPIHono } from '@hono/zod-openapi'
import type { z } from 'zod'
import * as cartService from './service'
import { AddToCartSchema, UpdateCartItemSchema } from './schema'

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

  .openapi(
    {
      method: 'post',
      path: '/',
      description: 'Add item to cart',
      request: {
        body: {
          content: {
            'application/json': {
              schema: AddToCartSchema,
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Item added to cart successfully',
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      // TODO: if user is logged in, use user id instead of session token
      const token = c.req.header('Session-Token') || ''
      const body = await c.req.json() as Awaited<z.infer<typeof AddToCartSchema>>

      await cartService.addItemToCart(token, body)

      return c.json({
        message: 'Success',
      })
    },
  )

  .openapi(
    {
      method: 'patch',
      path: '/{id}',
      description: 'Update cart item',
      request: {
        body: {
          content: {
            'application/json': {
              schema: UpdateCartItemSchema,
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Item updated successfully',
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      // TODO: if user is logged in, use user id instead of session token
      const token = c.req.header('Session-Token') || ''
      const id = c.req.param('id')!
      const body = await c.req.json() as Awaited<z.infer<typeof UpdateCartItemSchema>>

      await cartService.updateCartItem(token, id, body)

      return c.json({
        message: 'Success',
      })
    },
  )
