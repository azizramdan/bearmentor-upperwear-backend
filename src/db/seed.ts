import { db, postgresConnection } from './db'
import * as dbSchema from '../db/schema'
import { buildConflictUpdateColumns } from '../utils/db';

(async () => {
  const categories = [
    {
      id: 'l8n4g25c8lbg7i66837rdks4',
      name: 'T-Shirt'
    },
    {
      id: 'igq4exmalvry1g9ylk4y0jdc',
      name: 'Shirt'
    },
    {
      id: 'b3ihz5w8dpuqvwclq78rtrtt',
      name: 'Jaket'
    },
  ]

  const products = [
    {
      id: 'l6nkg26yrlusw5v5pfxltjfo',
      name: 'Boxy Ease Tee Black',
      price: '99900',
      categoryId: 'l8n4g25c8lbg7i66837rdks4',
      imageUrls: [
        'https://livehaf.com/cdn/shop/files/BoxyEaseTeeBlack.jpg?v=1709805463',
        'https://livehaf.com/cdn/shop/files/BoxyEaseTeeBlack1_a30cb2d9-67d4-4067-a75e-93682102b5b7.jpg?v=1709805463',
        'https://livehaf.com/cdn/shop/files/BoxyEaseTeeBlack3.jpg?v=1709805463',
      ],
      description: `
      Boxy Ease Tee adalah kaus casual yang memiliki potongan boxy-oversize yang dapat memberi ruang gerak yang maksimal.

      Terbuat dari kain Ultra Ease Stretch dengan spesifikasi khusus yang lembut, breathable dan anti-kusut menjadikan kaus ini nyaman dipakai untuk aktivitas sehari-hari.

      Desain round neckline pada kaus ini memberikan tampilan yang clean dan rapi, memberikan kesan versetile & timeless, sehingga dapat dipadukan dengan berbagai jenis bawahan. 

      Ketahanan warna yang lebih solid sehingga warna kain tidak mudah pudar. 

      Boxy Ease Tee memiliki 8 varian warna casual yang dapat anda pilih,kaus ini dijamin nyaman untuk menemani keseharian Anda.
      `,
      sku: 't-shirt-boxy-ease-tee-black'
    },
    {
      id: 'hmt1xuclzjao031i062nevj6',
      name: 'Cool Enzyme Tee Black',
      price: '69900',
      categoryId: 'l8n4g25c8lbg7i66837rdks4',
      imageUrls: [
        'https://livehaf.com/cdn/shop/files/CoolEnzymeTeeBlack3.jpg?v=1708331436',
        'https://livehaf.com/cdn/shop/files/CoolEnzymeTeeBlack5.jpg?v=1708331436',
        'https://livehaf.com/cdn/shop/files/CoolEnzymeTeeBlack1.jpg?v=1708331436',
      ],
      description: `
      Cool Enzyme Tee yaitu kaos premium berbahan dasar 100% Cotton Combed 24s Enzyme yang memiliki teknologi Enzyme sehingga lembut, mudah menyerap keringat, nyaman dan tidak kaku.

      Siluetnya yang reguler fit memberikan rasa nyaman saat dipakai dan cocok digunakan untuk kegiatan sehari-hari.

      Model leher O-neck dengan rib leher yang nyaman. Cool Enzyme Tee juga unisex bisa dipakai oleh pria dan wanita.

      Varian warnanya yang minimalis membuat outfit kalian terlihat lebih fresh dan stylish, cocok untuk melengkapi koleksi pakaian kasualmu.
      `,
      sku: 't-shirt-cool-enzyme-tee-black'
    },
    {
      id: 'm6acgcnhtsx4znw46jfrmoo0',
      name: 'Breezy Long Shirt Black',
      price: '139900',
      categoryId: 'igq4exmalvry1g9ylk4y0jdc',
      imageUrls: [
        'https://livehaf.com/cdn/shop/files/BreezyLongShirtBlack3.jpg?v=1708483362',
        'https://livehaf.com/cdn/shop/files/BreezyLongShirtBlack5.jpg?v=1708483362',
        'https://livehaf.com/cdn/shop/files/BreezyLongShirtBlack1.jpg?v=1708483362',
      ],
      description: `
      Breezy Long Shirt adalah kemeja pria klasik lengan panjang  dengan siluet loose fit untuk anda yang menginginkan kenyamanan maksimal saat beraktivitas. 

      Permukaan kain Rayon Softblend Airflow yang lembut, stretch, anti gerah, dan tidak mudah kusut membuat anda semakin produktif dalam beraktivitas.

      Warna kancing pada Breezy Long Shirt yang dipilih secara serasi dengan kemejanya memberikan tampilan yang lebih eksklusif

      Kemeja ini juga dapat dijadikan sebagai outer dengan paduan kaus untuk tampilan layer yang lebih casual dan stylish

      Breezy Long Shirt memiliki 4 varian warna klasik yang dapat anda pilih
      `,
      sku: 'shirt-breezy-long-shirt-black-black'
    },
  ]

  await db
    .insert(dbSchema.categories)
    .values(categories)
    .onConflictDoUpdate({
      target: dbSchema.categories.id,
      set: buildConflictUpdateColumns(dbSchema.categories, ['name']),
    })

  await db
    .insert(dbSchema.products)
    .values(products)
    .onConflictDoUpdate({
      target: dbSchema.products.id,
      set: buildConflictUpdateColumns(dbSchema.products, [
        'name',
        'price',
        'categoryId',
        'imageUrls',
        'description',
        'sku',
      ]),
    })

    postgresConnection.end()
})()
