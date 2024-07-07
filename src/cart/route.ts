import { OpenAPIHono } from '@hono/zod-openapi'
import type { z } from 'zod'
import type { SessionTokenEnv } from '../middleware/session-token'
import { sessionToken } from '../middleware/session-token'
import * as cartService from './service'
import { AddToCartSchema, UpdateCartItemSchema } from './schema'

const API_TAG = ['Carts']

const cartRoutes = new OpenAPIHono<SessionTokenEnv>()
cartRoutes.use('/*', sessionToken)

cartRoutes.openapi(
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
    // TODO: if user is logged in, use user id instead of session token
    const token = c.var.sessionToken
    const products = await cartService.getItemsBySessionToken(token)

    return c.json({
      message: 'Success',
      data: products,
    })
  },
)

cartRoutes.openapi(
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
    const token = c.var.sessionToken
    const body = await c.req.json() as Awaited<z.infer<typeof AddToCartSchema>>

    await cartService.addItemToCart(token, body)

    return c.json({
      message: 'Success',
    })
  },
)

cartRoutes.openapi(
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
    const token = c.var.sessionToken
    const id = c.req.param('id')!
    const body = await c.req.json() as Awaited<z.infer<typeof UpdateCartItemSchema>>

    await cartService.updateCartItem(token, id, body)

    return c.json({
      message: 'Success',
    })
  },
)

cartRoutes.openapi(
  {
    method: 'delete',
    path: '/{id}',
    description: 'Delete cart item',
    responses: {
      200: {
        description: 'Item deleted successfully',
      },
    },
    tags: API_TAG,
  },
  async (c) => {
    // TODO: if user is logged in, use user id instead of session token
    const token = c.var.sessionToken
    const id = c.req.param('id')!

    await cartService.removeCartItem(token, id)

    return c.json({
      message: 'Success',
    })
  },
)

export { cartRoutes }
