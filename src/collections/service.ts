import { and, asc, eq, inArray } from 'drizzle-orm'
import { db } from '../db/db'
import * as dbSchema from '../db/schema'

export async function getProductsBySlug(slug: string) {
  const data = await db.query.products.findMany({
    columns: {
      id: true,
      title: true,
      slug: true,
    },
    where: (and(
      eq(dbSchema.products.status, 'ACTIVE'),
      inArray(
        dbSchema.products.id,
        db
          .select({ data: dbSchema.collectionItems.productId })
          .from(dbSchema.collectionItems)
          .where(
            inArray(
              dbSchema.collectionItems.collectionId,
              db
                .select({ data: dbSchema.collections.id })
                .from(dbSchema.collections)
                .where(
                  eq(dbSchema.collections.slug, slug),
                ),
            ),
          ),
      ),
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
