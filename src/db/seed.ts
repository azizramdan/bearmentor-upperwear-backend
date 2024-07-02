import * as dbSchema from '../db/schema'
import { buildConflictUpdateColumns } from '../utils/db'
import { db, postgresConnection } from './db'

(async () => {
  const products = [
    {
      id: '1',
      title: 'Boxy Ease Tee Black',
      slug: 'boxy-ease-tee-black',
      descriptionHtml: `
      Boxy Ease Tee adalah kaus casual yang memiliki potongan boxy-oversize yang dapat memberi ruang gerak yang maksimal.

      Terbuat dari kain Ultra Ease Stretch dengan spesifikasi khusus yang lembut, breathable dan anti-kusut menjadikan kaus ini nyaman dipakai untuk aktivitas sehari-hari.

      Desain round neckline pada kaus ini memberikan tampilan yang clean dan rapi, memberikan kesan versetile & timeless, sehingga dapat dipadukan dengan berbagai jenis bawahan. 

      Ketahanan warna yang lebih solid sehingga warna kain tidak mudah pudar. 

      Boxy Ease Tee memiliki 8 varian warna casual yang dapat anda pilih,kaus ini dijamin nyaman untuk menemani keseharian Anda.

      - Bahan: Ultra Ease Stretch (Blend of Polyester, Rayon, & Spandex)
      - Fit Boxy-oversize
      - Didesain Timeless & Versatile
      - Material stretch, ringan dan tidak transparan
      - Desain unisex
      - Model menggunakan size XL
      - Tinggi & Berat Model: 185cm & 77kg
      `,
      status: dbSchema.productStatus.enumValues[0],
      images: [
        {
          id: '1',
          url: 'https://livehaf.com/cdn/shop/files/BoxyEaseTeeBlack.jpg?v=1709805463',
        },
        {
          id: '2',
          url: 'https://livehaf.com/cdn/shop/files/BoxyEaseTeeBlack1_a30cb2d9-67d4-4067-a75e-93682102b5b7.jpg?v=1709805463',
        },
        {
          id: '3',
          url: 'https://livehaf.com/cdn/shop/files/BoxyEaseTeeBlack3.jpg?v=1709805463',
        },
      ],
      options: [
        {
          id: '1',
          name: 'Size',
          index: dbSchema.productOptionIndex.enumValues[0],
          position: dbSchema.productOptionIndex.enumValues[0],
          values: [
            { id: '1', value: 'S', position: 1 },
            { id: '2', value: 'M', position: 2 },
            { id: '3', value: 'L', position: 3 },
            { id: '4', value: 'XL', position: 4 },
            { id: '5', value: 'XXL', position: 5 },
          ],
        },
      ],
      variants: [
        {
          id: '1',
          title: 'Boxy Ease Tee Black - S',
          sku: 'BETB-S',
          price: 99000,
          imageId: '1',
          optionValueId1: '1',
        },
        {
          id: '2',
          title: 'Boxy Ease Tee Black - M',
          sku: 'BETB-M',
          price: 99000,
          imageId: '2',
          optionValueId1: '2',
        },
        {
          id: '3',
          title: 'Boxy Ease Tee Black - L',
          sku: 'BETB-L',
          price: 99000,
          imageId: '3',
          optionValueId1: '3',
        },
        {
          id: '4',
          title: 'Boxy Ease Tee Black - XL',
          sku: 'BETB-XL',
          price: 99000,
          optionValueId1: '4',
        },
        {
          id: '5',
          title: 'Boxy Ease Tee Black - XXL',
          sku: 'BETB-XXL',
          price: 99000,
          optionValueId1: '5',
        },
      ],
    },
  ]

  for (const product of products) {
    await db
      .insert(dbSchema.products)
      .values(product)
      .onConflictDoUpdate({
        target: dbSchema.products.id,
        set: buildConflictUpdateColumns(dbSchema.products, [
          'title',
          'slug',
          'descriptionHtml',
          'status',
          'publishedAt',
        ]),
      })

    await db
      .insert(dbSchema.productImages)
      .values(product.images.map((image) => {
        return {
          ...image,
          productId: product.id,
        }
      }))
      .onConflictDoUpdate({
        target: dbSchema.productImages.id,
        set: buildConflictUpdateColumns(dbSchema.productImages, [
          'url',
        ]),
      })

    for (const option of product.options) {
      await db
        .insert(dbSchema.productOptions)
        .values({
          id: option.id,
          productId: product.id,
          name: option.name,
          index: option.index,
          position: option.position,
        })
        .onConflictDoUpdate({
          target: dbSchema.productOptions.id,
          set: buildConflictUpdateColumns(dbSchema.productOptions, [
            'name',
            'index',
            'position',
          ]),
        })

      await db
        .insert(dbSchema.productOptionValues)
        .values(option.values.map((value) => {
          return {
            ...value,
            productOptionId: option.id,
          }
        }))
        .onConflictDoUpdate({
          target: dbSchema.productOptionValues.id,
          set: buildConflictUpdateColumns(dbSchema.productOptionValues, [
            'value',
            'position',
          ]),
        })
    }

    await db
      .insert(dbSchema.productVariants)
      .values(product.variants.map((variant) => {
        return {
          ...variant,
          productId: product.id,
        }
      }))
      .onConflictDoUpdate({
        target: dbSchema.productVariants.id,
        set: buildConflictUpdateColumns(dbSchema.productVariants, [
          'title',
          'sku',
          'price',
          'imageId',
          'optionValueId1',
        ]),
      })
  }
  postgresConnection.end()
})()
