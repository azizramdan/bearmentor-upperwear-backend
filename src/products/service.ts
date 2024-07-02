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
    .map(product => ({
      id: product.id,
      title: product.title,
      slug: product.slug,
      images: product.images.map(image => image.url),
      priceRange: product.variants.map(variant => variant.price),
    }))
}
