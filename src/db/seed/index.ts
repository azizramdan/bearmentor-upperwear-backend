import * as dbSchema from '../schema'
import { db, postgresConnection } from '../db'
import { data } from './data'

(async () => {
  for (const item of data) {
    const collection = await db
      .insert(dbSchema.collections)
      .values({
        title: item.title,
        slug: item.slug,
      })
      .returning()

    for (const baseProduct of item.baseProducts) {
      for (const color of baseProduct.colors) {
        const product = await db
          .insert(dbSchema.products)
          .values({
            title: `${baseProduct.title} ${color.name}`,
            slug: `${baseProduct.title} ${color.name}`.toLowerCase().replace(/ /g, '-'),
            descriptionHtml: baseProduct.descriptionHtml,
            status: 'ACTIVE',
            publishedAt: new Date(),
          })
          .returning()

        await db
          .insert(dbSchema.collectionItems)
          .values({
            collectionId: collection[0].id,
            productId: product[0].id,
            position: 0,
          })

        const productImages = await db
          .insert(dbSchema.productImages)
          .values(
            color.images.map(url => ({
              productId: product[0].id,
              url,
            })),
          )
          .returning()

        const productOptions: Array<{
          option: typeof dbSchema.productOptions.$inferSelect
          values: Array<typeof dbSchema.productOptionValues.$inferSelect>
        }> = []

        for (const option of baseProduct.options) {
          const productOption = await db
            .insert(dbSchema.productOptions)
            .values({
              productId: product[0].id,
              name: option.name,
              index: option.index,
              position: option.position,
            })
            .returning()

          const productOptionValues = await db
            .insert(dbSchema.productOptionValues)
            .values(
              option.values.map(value => ({
                productOptionId: productOption[0].id,
                value: value.value,
                position: value.position,
              })),
            )
            .returning()

          productOptions.push({
            option: productOption[0],
            values: productOptionValues,
          })
        }

        await db
          .insert(dbSchema.productVariants)
          .values(productOptions[0].values.map(value => ({
            productId: product[0].id,
            title: `${product[0].title} - ${value.value}`,
            sku: `${product[0].title} - ${value.value}`.toLowerCase().replace(/ /g, '-'),
            stock: 10,
            price: baseProduct.price,
            imageId: productImages[0].id,
            optionValueId1: value.id,
          })))
      }
    }
  }

  postgresConnection.end()
})()
