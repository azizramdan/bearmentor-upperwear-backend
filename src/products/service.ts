import type { z } from 'zod'
import { and, eq, inArray } from 'drizzle-orm'
import { db } from '../db/db'
import * as dbSchema from '../db/schema'
import type { QueryProductSchema } from './schema'

export async function getAll(query?: z.infer<typeof QueryProductSchema>) {
  const data = await db.query.productColors.findMany({
    columns: {
      id: true,
      name: true,
      color: true,
      productId: true,
      slug: true,
      imageUrls: true,
    },
    where: (and(
      query?.categoriId
        ? inArray(
          dbSchema.productColors.productId,
          db
            .select({ data: dbSchema.products.id })
            .from(dbSchema.products)
            .where(eq(dbSchema.products.categoryId, query.categoriId)),
        )
        : undefined,
    )),
    with: {
      product: {
        columns: {
          description: true,
        },
        with: {
          variants: {
            columns: {
              id: true,
              name: true,
            },
          },
        },
      },
      variantOptions: {
        columns: {
          variantId: true,
          name: true,
          stock: true,
          price: true,
        },
      },
    },
  })

  return data
}
