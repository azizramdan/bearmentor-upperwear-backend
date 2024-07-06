import { and, eq } from 'drizzle-orm'
import { db } from '../db/db'
import * as dbSchema from '../db/schema'

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
