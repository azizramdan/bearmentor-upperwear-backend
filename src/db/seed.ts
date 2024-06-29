import * as dbSchema from '../db/schema'
import { buildConflictUpdateColumns } from '../utils/db'
import { db, postgresConnection } from './db'

(async () => {
  const categories = [
    {
      id: '1',
      name: 'T-Shirt',
    },
    {
      id: '2',
      name: 'Shirt',
    },
    {
      id: '3',
      name: 'Jaket',
    },
  ]

  const products = [
    {
      id: '1',
      name: 'Boxy Ease Tee',
      description: `
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
      categoryId: '1',
      productColors: [
        {
          name: 'Boxy Ease Tee Black',
          color: 'Black',
          slug: 'boxy-ease-tee-black',
          imageUrls: [
            'https://livehaf.com/cdn/shop/files/BoxyEaseTeeBlack_160x.jpg?v=1709805463',
            'https://livehaf.com/cdn/shop/files/BoxyEaseTeeBlack1_a30cb2d9-67d4-4067-a75e-93682102b5b7_160x.jpg?v=1709805463',
            'https://livehaf.com/cdn/shop/files/BoxyEaseTeeBlack3_160x.jpg?v=1709805463',
          ],
          variantOptions: [
            {
              variantId: '1',
              name: 'S',
              sku: 'boxy-ease-tee-black-s',
              stock: 10,
              price: 99900,
            },
            {
              variantId: '1',
              name: 'M',
              sku: 'boxy-ease-tee-black-m',
              stock: 5,
              price: 99900,
            },
            {
              variantId: '1',
              name: 'L',
              sku: 'boxy-ease-tee-black-l',
              stock: 50,
              price: 110000,
            },
          ],
        },
        {
          name: 'Boxy Ease Tee Denim',
          color: 'Denim',
          slug: 'boxy-ease-tee-denim',
          imageUrls: [
            'https://livehaf.com/cdn/shop/files/BoxyEaseTeeDenim_160x.jpg?v=1709805706',
            'https://livehaf.com/cdn/shop/files/BoxyEaseTeeDenim1_160x.jpg?v=1709805706',
            'https://livehaf.com/cdn/shop/files/BoxyEaseTeeDenim3_160x.jpg?v=1709805706',
          ],
          variantOptions: [
            {
              variantId: '1',
              name: 'S',
              sku: 'boxy-ease-tee-denim-s',
              stock: 10,
              price: 99900,
            },
            {
              variantId: '1',
              name: 'M',
              sku: 'boxy-ease-tee-denim-m',
              stock: 5,
              price: 99900,
            },
            {
              variantId: '1',
              name: 'L',
              sku: 'boxy-ease-tee-denim-l',
              stock: 50,
              price: 110000,
            },
          ],
        },
      ],
      variants: [
        {
          id: '1',
          name: 'Size',
        },
      ],
    },
    {
      id: '2',
      name: 'Breezy Long Shirt',
      description: `
      Breezy Long Shirt adalah kemeja pria klasik lengan panjang  dengan siluet loose fit untuk anda yang menginginkan kenyamanan maksimal saat beraktivitas. 
    
      Permukaan kain Rayon Softblend Airflow yang lembut, stretch, anti gerah, dan tidak mudah kusut membuat anda semakin produktif dalam beraktivitas.
    
      Warna kancing pada Breezy Long Shirt yang dipilih secara serasi dengan kemejanya memberikan tampilan yang lebih eksklusif
    
      Kemeja ini juga dapat dijadikan sebagai outer dengan paduan kaus untuk tampilan layer yang lebih casual dan stylish
    
      Breezy Long Shirt memiliki 4 varian warna klasik yang dapat anda pilih
    
      - Bahan: Rayon Softblend Airflow
      - Loose fit 
      - Stretch 
      - Breathable
      - Anti Lecek 
      - Front Button Opening
      - Dapat dijadikan Outer
      - Terdapat kancing pada bagian kerah & ujung lengan
      - Model menggunakan size XL
      - Tinggi & Berat Model: 185cm & 77kg
      `,
      categoryId: '2',
      productColors: [
        {
          name: 'Breezy Long Shirt Black',
          color: 'Black',
          slug: 'breezy-long-shirt-black',
          imageUrls: [
            'https://livehaf.com/cdn/shop/files/BreezyLongShirtBlack3_160x.jpg?v=1708483362',
            'https://livehaf.com/cdn/shop/files/BreezyLongShirtBlack5_160x.jpg?v=1708483362',
            'https://livehaf.com/cdn/shop/files/BreezyLongShirtBlack1_160x.jpg?v=1708483362',
          ],
          variantOptions: [
            {
              variantId: '2',
              name: 'S',
              sku: 'breezy-long-shirt-black-s',
              stock: 10,
              price: 139000,
            },
            {
              variantId: '2',
              name: 'M',
              sku: 'breezy-long-shirt-black-m',
              stock: 5,
              price: 139000,
            },
            {
              variantId: '2',
              name: 'L',
              sku: 'breezy-long-shirt-black-l',
              stock: 50,
              price: 150000,
            },
          ],
        },
        {
          name: 'Breezy Long Shirt Navy',
          color: 'Navy',
          slug: 'breezy-long-shirt-navy',
          imageUrls: [
            'https://livehaf.com/cdn/shop/files/BreezyLongShirtNavy1_160x.jpg?v=1708483399',
            'https://livehaf.com/cdn/shop/files/BreezyLongShirtNavy3_160x.jpg?v=1708483399',
            'https://livehaf.com/cdn/shop/files/BreezyLongShirtNavy4_160x.jpg?v=1708483399',
          ],
          variantOptions: [
            {
              variantId: '2',
              name: 'S',
              sku: 'breezy-long-shirt-navy-s',
              stock: 10,
              price: 139000,
            },
            {
              variantId: '2',
              name: 'M',
              sku: 'breezy-long-shirt-navy-m',
              stock: 5,
              price: 139000,
            },
            {
              variantId: '2',
              name: 'L',
              sku: 'breezy-long-shirt-navy-l',
              stock: 50,
              price: 150000,
            },
          ],
        },
      ],
      variants: [
        {
          id: '2',
          name: 'Size',
        },
      ],
    },
  ]

  await db
    .insert(dbSchema.categories)
    .values(categories)
    .onConflictDoUpdate({
      target: dbSchema.categories.id,
      set: buildConflictUpdateColumns(dbSchema.products, [
        'name',
      ]),
    })

  for (const product of products) {
    await db
      .insert(dbSchema.products)
      .values(product)
      .onConflictDoUpdate({
        target: dbSchema.products.id,
        set: buildConflictUpdateColumns(dbSchema.products, [
          'name',
          'description',
          'categoryId',
        ]),
      })

    await db
      .insert(dbSchema.variants)
      .values(product.variants.map((variant) => {
        return {
          ...variant,
          productId: product.id,
        }
      }))
      .onConflictDoUpdate({
        target: dbSchema.variants.id,
        set: buildConflictUpdateColumns(dbSchema.variants, [
          'name',
          'productId',
        ]),
      })

    for (const productColor of product.productColors) {
      const productColorDb = await db
        .insert(dbSchema.productColors)
        .values({
          ...productColor,
          productId: product.id,
        })
        .onConflictDoUpdate({
          target: [dbSchema.productColors.productId, dbSchema.productColors.color],
          set: buildConflictUpdateColumns(dbSchema.productColors, [
            'name',
            'color',
            'slug',
            'imageUrls',
          ]),
        })
        .returning()

      await db
        .insert(dbSchema.variantOptions)
        .values(productColor.variantOptions.map((variantOption) => {
          return {
            ...variantOption,
            productColorId: productColorDb[0].id,
          }
        }))
        .onConflictDoUpdate({
          target: [dbSchema.variantOptions.variantId, dbSchema.variantOptions.productColorId, dbSchema.variantOptions.name],
          set: buildConflictUpdateColumns(dbSchema.variantOptions, [
            'name',
            'sku',
            'stock',
            'price',
          ]),
        })
    }
  }

  postgresConnection.end()
})()
