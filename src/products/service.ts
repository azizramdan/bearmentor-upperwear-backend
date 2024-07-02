import { and, asc, eq } from 'drizzle-orm'
import { db } from '../db/db'
import * as dbSchema from '../db/schema'

export async function getAll() {
  const data = await db.query.products.findMany({
    columns: {
      id: true,
      title: true,
      slug: true,
    },
    where: (and(
      eq(dbSchema.products.status, 'ACTIVE'),
    )),
    with: {
      images: {
        columns: {
          url: true,
        },
      },
      variants: {
        columns: {
          price: true,
        },
        orderBy: [asc(dbSchema.productVariants.price)],
      },
    },
  })

  return data
}
