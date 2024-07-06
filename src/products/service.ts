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

export async function getBySlug(slug: string) {
  const product = await db.query.products.findFirst({
    columns: {
      id: true,
      title: true,
      descriptionHtml: true,
    },
    where: (and(
      eq(dbSchema.products.slug, slug),
      eq(dbSchema.products.status, 'ACTIVE'),
    )),
    with: {
      images: {
        columns: {
          id: true,
          url: true,
        },
      },
      options: {
        columns: {
          id: true,
          name: true,
          index: true,
        },
        with: {
          values: {
            columns: {
              id: true,
              value: true,
            },
            orderBy: [asc(dbSchema.productOptionValues.position)],
          },
        },
        orderBy: [asc(dbSchema.productOptions.position)],
      },
      variants: {
        columns: {
          id: true,
          title: true,
          stock: true,
          price: true,
          imageId: true,
          optionValueId1: true,
          optionValueId2: true,
          optionValueId3: true,
        },
      },
    },
  })

  if (!product) {
    return null
  }

  return product
}
