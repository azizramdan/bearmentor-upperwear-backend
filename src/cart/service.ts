import { and, eq } from 'drizzle-orm'
import type { z } from 'zod'
import { db } from '../db/db'
import * as dbSchema from '../db/schema'
import type { AddToCartSchema, UpdateCartItemSchema } from './schema'

export async function getItemsBySessionToken(token: string) {
  const items = await db.query.carts.findMany({
    columns: {
      id: true,
      quantity: true,
    },
    where: and(
      eq(dbSchema.carts.sessionToken, token),
    ),
    with: {
      variant: {
        columns: {
          id: true,
          title: true,
          stock: true,
          price: true,
        },
        with: {
          product: {
            columns: {},
            with: {
              images: {
                columns: {
                  url: true,
                },
                limit: 1,
              },
            },
          },
          optionValue1: {
            columns: {
              value: true,
            },
          },
          optionValue2: {
            columns: {
              value: true,
            },
          },
          optionValue3: {
            columns: {
              value: true,
            },
          },
        },
      },
    },
  })

  return items
}

export async function addItemToCart(token: string, body: z.infer<typeof AddToCartSchema>) {
  try {
    const exists = await db.query.carts.findFirst({
      columns: {
        id: true,
        quantity: true,
      },
      where: (and(
        eq(dbSchema.carts.sessionToken, token),
        eq(dbSchema.carts.productId, body.productId),
        eq(dbSchema.carts.productVariantId, body.productVariantId),
      )),
    })

    if (exists) {
      await updateCartItem(token, exists.id, { quantity: exists.quantity + Number(body.quantity) })

      return true
    }

    await db
      .insert(dbSchema.carts)
      .values({
        sessionToken: token,
        productId: body.productId,
        productVariantId: body.productVariantId,
        quantity: body.quantity,
      })

    return true
  } catch (error) {
    console.error(error)

    return false
  }
}

export async function updateCartItem(token: string, id: string, body: z.infer<typeof UpdateCartItemSchema>) {
  // TODO: validate stock
  try {
    await db
      .update(dbSchema.carts)
      .set({
        quantity: body.quantity,
      })
      .where(
        and(
          eq(dbSchema.carts.id, id),
          eq(dbSchema.carts.sessionToken, token),
        ),
      )

    return true
  } catch (error) {
    console.error(error)

    return false
  }
}

export async function removeCartItem(token: string, id: string) {
  await db
    .delete(dbSchema.carts)
    .where(and(
      eq(dbSchema.carts.id, id),
      eq(dbSchema.carts.sessionToken, token),
    ))
}
