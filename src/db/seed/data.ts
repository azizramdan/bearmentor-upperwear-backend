import type { productOptionIndex } from '../schema'

type Data = {
  title: string
  slug: string
  baseProducts: Array<{
    title: string
    descriptionHtml: string
    price: number
    options: Array<{
      name: string
      index: typeof productOptionIndex.enumValues[number]
      position: typeof productOptionIndex.enumValues[number]
      values: Array<{
        value: string
        position: number
      }>
    }>
    colors: Array<{
      name: string
      images: Array<string>
    }>
  }>
}

export const data: Array<Data> = [
  {
    title: 'T-Shirt',
    slug: 't-shirt',
    baseProducts: [
      {
        title: 'Boxy Ease Tee',
        descriptionHtml: `
        <p>Boxy Ease Tee adalah kaus casual yang memiliki potongan boxy-oversize yang dapat memberi ruang gerak yang maksimal.</p>
        <p>Terbuat dari kain Ultra Ease Stretch dengan spesifikasi khusus yang lembut, breathable dan anti-kusut menjadikan kaus ini nyaman dipakai untuk aktivitas sehari-hari.</p>
        <p>Desain round neckline pada kaus ini memberikan tampilan yang clean dan rapi, memberikan kesan versetile &amp; timeless, sehingga dapat dipadukan dengan berbagai jenis bawahan. </p>
        <p>Ketahanan warna yang lebih solid sehingga warna kain tidak mudah pudar. </p>
        <p>Boxy Ease Tee memiliki 8 varian warna casual yang dapat anda pilih,kaus ini dijamin nyaman untuk menemani keseharian Anda.</p>
        <ul>
            <li><span>Bahan: Ultra Ease Stretch (Blend of Polyester, Rayon, &amp; Spandex)</span></li>
            <li>Fit Boxy-oversize</li>
            <li>Didesain Timeless &amp; Versatile</li>
            <li>Material stretch, ringan dan tidak transparan</li>
            <li>Desain unisex</li>
            <li>Model menggunakan size XL</li>
            <li>Tinggi &amp; Berat Model: 185cm &amp; 77kg</li>
        </ul>
        `,
        price: 99900,
        options: [
          {
            name: 'Size',
            index: '1',
            position: '1',
            values: [
              {
                value: 'S',
                position: 1,
              },
              {
                value: 'M',
                position: 2,
              },
              {
                value: 'L',
                position: 3,
              },
              {
                value: 'XL',
                position: 4,
              },
              {
                value: 'XXL',
                position: 5,
              },
            ],
          },
        ],
        colors: [
          {
            name: 'Black',
            images: [
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeBlack.jpg?v=1709805463',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeBlack1_a30cb2d9-67d4-4067-a75e-93682102b5b7.jpg?v=1709805463',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeBlack3.jpg?v=1709805463',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeBlack2_d0f4d5bc-1b4a-46a5-9240-551d203fbbd9.jpg?v=1709805463',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeBlack4.jpg?v=1709805463',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeBlack5.jpg?v=1709805463',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeBlack2.jpg?v=1709805463',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeBlack1.jpg?v=1709805463',
              '//livehaf.com/cdn/shop/files/T-Shirt1080x1080.jpg?v=1713923411',
            ],
          },
          {
            name: 'Denim',
            images: [
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeDenim.jpg?v=1709805706',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeDenim1.jpg?v=1709805706',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeDenim3.jpg?v=1709805706',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeDenim2.jpg?v=1709805706',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeDenim4.jpg?v=1709805706',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeDenim5.jpg?v=1709805706',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeDenim2_80f7f7d5-e8ae-4b2e-b5b1-6a6cfb360751.jpg?v=1710314720',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeDenim1_cd7f77e7-b1a2-4e9f-924e-a278e62c5ba9.jpg?v=1710314720',
              '//livehaf.com/cdn/shop/files/T-Shirt1080x1080_2243f002-fea4-455f-b07c-a9c565b8781c.jpg?v=1713923433',
            ],
          },
          {
            name: 'Dark Gray',
            images: [
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeGray.jpg?v=1709805725',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeGray1.jpg?v=1709805725',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeGray3.jpg?v=1709805725',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeGray2.jpg?v=1709805725',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeGray4.jpg?v=1709805725',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeGray5.jpg?v=1709805725',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeDarkGray2.jpg?v=1709805725',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeDarkGray1.jpg?v=1709805725',
              '//livehaf.com/cdn/shop/files/T-Shirt1080x1080_ad61797c-9ad3-4ecd-8d7e-59f41d586ed0.jpg?v=1713923451',
            ],
          },
          {
            name: 'Latte',
            images: [
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeLatte.jpg?v=1709805742',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeLatte1_8330b6bb-ec06-4be3-a83f-cff624348f1a.jpg?v=1709805742',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeLatte3.jpg?v=1709805742',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeLatte2_0e82c0d6-1277-471e-b667-be75540c863b.jpg?v=1709805742',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeLatte4.jpg?v=1709805742',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeLatte5.jpg?v=1709805742',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeLatte2.jpg?v=1709805742',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeLatte1.jpg?v=1709805742',
              '//livehaf.com/cdn/shop/files/T-Shirt1080x1080_c56603a1-d50f-4902-b89b-0015a810f00a.jpg?v=1713923467',
            ],
          },
          {
            name: 'White',
            images: [
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeNatural.jpg?v=1709805760',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeNatural3.jpg?v=1709805760',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeNatural5.jpg?v=1709805760',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeNatural4.jpg?v=1709805760',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeNatural1_f8f60374-2bf2-4f5c-9545-ab328c5512ca.jpg?v=1709805760',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeNatural2_8c1b349a-949f-49a3-8091-8c182fd709b9.jpg?v=1709805760',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeNatural2.jpg?v=1709805760',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeNatural1.jpg?v=1709805760',
              '//livehaf.com/cdn/shop/files/T-Shirt1080x1080_e9768e99-dfd6-48a4-a9b2-5e976b32d394.jpg?v=1713923489',
            ],
          },
          {
            name: 'Navy',
            images: [
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeNavy.jpg?v=1709805773',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeNavy1_ced32d72-1325-4c7d-8393-130d13d7b497.jpg?v=1709805773',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeNavy3.jpg?v=1709805775',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeNavy2_88cb87dd-91e0-432c-bf89-f3df431603a4.jpg?v=1709805775',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeNavy4.jpg?v=1709805775',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeNavy5.jpg?v=1709805775',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeNavy2.jpg?v=1709805775',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeNavy1.jpg?v=1709805775',
              '//livehaf.com/cdn/shop/files/T-Shirt1080x1080_afba418e-0a15-4a04-a836-b6e7894ba16e.jpg?v=1713923506',
            ],
          },
          {
            name: 'Olive',
            images: [
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeOlive.jpg?v=1709805797',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeOlive3.jpg?v=1709805797',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeOlive5.jpg?v=1709805797',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeOlive4.jpg?v=1709805797',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeOlive1_7344729c-b1a8-4788-892f-1f95fc4b5c1c.jpg?v=1709805797',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeOlive2_d07ffb3e-4c29-41a9-86bf-37c3d6cea126.jpg?v=1709805797',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeOlive2.jpg?v=1709805797',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeeOlive1.jpg?v=1709805797',
              '//livehaf.com/cdn/shop/files/T-Shirt1080x1080_ef22e157-4eff-4771-ac30-83a340cae20f.jpg?v=1713923516',
            ],
          },
          {
            name: 'Plum',
            images: [
              '//livehaf.com/cdn/shop/files/BoxyEaseTeePlum.jpg?v=1709805815',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeePlum3.jpg?v=1709805815',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeePlum5.jpg?v=1709805815',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeePlum4.jpg?v=1709805815',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeePlum1_23f75eec-f215-46e4-8da3-d11607b75b9a.jpg?v=1709805815',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeePlum2_d6d3d530-3f67-40b3-a23b-65fbf74203b7.jpg?v=1709805815',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeePlum2.jpg?v=1709805815',
              '//livehaf.com/cdn/shop/files/BoxyEaseTeePlum1.jpg?v=1709805815',
              '//livehaf.com/cdn/shop/files/T-Shirt1080x1080_459c450f-dd62-4464-a625-6edcd50a6577.jpg?v=1713923523',
            ],
          },
        ],
      },
      {
        title: 'Cool Enzyme Tee',
        descriptionHtml: `
        <p>Cool Enzyme Tee yaitu kaos premium berbahan dasar 100% Cotton Combed <span>24</span><span>s</span> Enzyme yang memiliki teknologi Enzyme sehingga lembut, mudah menyerap keringat, nyaman dan tidak kaku.<br><br>Siluetnya yang reguler fit memberikan rasa nyaman saat dipakai dan cocok digunakan untuk kegiatan sehari-hari.<br><br>Model leher O-neck dengan rib leher yang nyaman. Cool Enzyme Tee juga unisex bisa dipakai oleh pria dan wanita.<br><br>Varian warnanya yang minimalis membuat outfit kalian terlihat lebih fresh dan stylish, cocok untuk melengkapi koleksi pakaian kasualmu.<br></p>
        <ul>
            <li>Bahan : 100% Cotton Combed<span>&nbsp;</span><span>24</span><span>s&nbsp;</span>Enzyme</li>
            <li>Bahan Menyerap Keringat &amp; Tidak Panas</li>
            <li>Bahan Halus, Adem &amp; Lembut</li>
            <li>Reguler Fit</li>
            <li>Kerah O-Neck</li>
            <li>Model menggunakan size XL</li>
            <li>Tinggi &amp; &nbsp;Berat Model: 185cm &amp; 77kg</li>
        </ul>
        `,
        price: 69900,
        options: [
          {
            name: 'Size',
            index: '1',
            position: '1',
            values: [
              {
                value: 'S',
                position: 1,
              },
              {
                value: 'M',
                position: 2,
              },
              {
                value: 'L',
                position: 3,
              },
              {
                value: 'XL',
                position: 4,
              },
              {
                value: 'XXL',
                position: 5,
              },
            ],
          },
        ],
        colors: [
          {
            name: 'Black',
            images: [
              '//livehaf.com/cdn/shop/files/CoolEnzymeTeeBlack3.jpg?v=1708331436',
              '//livehaf.com/cdn/shop/files/CoolEnzymeTeeBlack5.jpg?v=1708331436',
              '//livehaf.com/cdn/shop/files/CoolEnzymeTeeBlack1.jpg?v=1708331436',
              '//livehaf.com/cdn/shop/files/CoolEnzymeTeeBlack4.jpg?v=1708331436',
              '//livehaf.com/cdn/shop/files/CoolEnzymeTeeBlack2.jpg?v=1708331436',
              '//livehaf.com/cdn/shop/files/CoolEnzymeTeeBlack2_95a1a5d7-b94e-4cc7-a444-e58daa47c96e.jpg?v=1709099122',
              '//livehaf.com/cdn/shop/files/CoolEnzymeTeeBlack1_454ca603-d7d5-4eed-b52f-88dab2764dbc.jpg?v=1709099122',
              '//livehaf.com/cdn/shop/files/T-Shirt1080x1080_dbc68b0f-8253-4c5b-806d-d11de5adc737.jpg?v=1713923531',
            ],
          },
          {
            name: 'Brown',
            images: [
              '//livehaf.com/cdn/shop/files/CoolEnzymeTeeBrown4.jpg?v=1708331478',
              '//livehaf.com/cdn/shop/files/CoolEnzymeTeeBrown3.jpg?v=1708331478',
              '//livehaf.com/cdn/shop/files/CoolEnzymeTeeBrown1.jpg?v=1708331478',
              '//livehaf.com/cdn/shop/files/CoolEnzymeTeeBrown5.jpg?v=1708331478',
              '//livehaf.com/cdn/shop/files/CoolEnzymeTeeBrown2.jpg?v=1708331478',
              '//livehaf.com/cdn/shop/files/CoolEnzymeTeeBrown2_5d64b20c-9f1a-4f38-9228-14129e71d49a.jpg?v=1709099143',
              '//livehaf.com/cdn/shop/files/CoolEnzymeTeeBrown1_0230c30d-5a7a-41e0-8dca-85892f136eaa.jpg?v=1709099143',
              '//livehaf.com/cdn/shop/files/T-Shirt1080x1080_fa656a44-8437-4a66-a513-0a5fde9021f0.jpg?v=1713923538',
            ],
          },
          {
            name: 'Denim',
            images: [
              '//livehaf.com/cdn/shop/files/CoolEnzymeTeeDenim1.jpg?v=1708331510',
              '//livehaf.com/cdn/shop/files/CoolEnzymeTeeDenim3.jpg?v=1708331514',
              '//livehaf.com/cdn/shop/files/CoolEnzymeTeeDenim4.jpg?v=1708331514',
              '//livehaf.com/cdn/shop/files/CoolEnzymeTeeDenim2.jpg?v=1708331514',
              '//livehaf.com/cdn/shop/files/CoolEnzymeTeeDenim5.jpg?v=1708331514',
              '//livehaf.com/cdn/shop/files/CoolEnzymeTeeDenim2_9a51f304-a5dd-4dc8-b54a-bf0d3814b99a.jpg?v=1709099175',
              '//livehaf.com/cdn/shop/files/CoolEnzymeTeeDenim1_62be6a62-4c66-48f9-a32e-6a2280c8b112.jpg?v=1709099175',
              '//livehaf.com/cdn/shop/files/T-Shirt1080x1080_3ed6df50-0673-4222-a480-4dab4ddd32d8.jpg?v=1713923546',
            ],
          },
          {
            name: 'Dusty Pink',
            images: [
              '//livehaf.com/cdn/shop/files/CoolEnzymeTeeDustyPink3.jpg?v=1708331549',
              '//livehaf.com/cdn/shop/files/CoolEnzymeTeeDustyPink5.jpg?v=1708331549',
              '//livehaf.com/cdn/shop/files/CoolEnzymeTeeDustyPink1.jpg?v=1708331549',
              '//livehaf.com/cdn/shop/files/CoolEnzymeTeeDustyPink4.jpg?v=1708331549',
              '//livehaf.com/cdn/shop/files/CoolEnzymeTeeDustyPink2.jpg?v=1708331549',
              '//livehaf.com/cdn/shop/files/CoolEnzymeTeeDustyPink2_5b2b806b-18a8-480d-8318-0db1d30a6dc0.jpg?v=1709099193',
              '//livehaf.com/cdn/shop/files/CoolEnzymeTeeDustyPink1_c465342c-5b39-4e7f-b6f3-2157b41a48f8.jpg?v=1709099193',
              '//livehaf.com/cdn/shop/files/T-Shirt1080x1080_f592b622-f130-4cb1-b96f-f17c83ff0103.jpg?v=1713923553',
            ],
          },
          {
            name: 'Dark Gray',
            images: [
              '//livehaf.com/cdn/shop/files/CoolEnzymeTeeGray2.jpg?v=1708331586',
              '//livehaf.com/cdn/shop/files/CoolEnzymeTeeGray4.jpg?v=1708331586',
              '//livehaf.com/cdn/shop/files/CoolEnzymeTeeGray1.jpg?v=1708331586',
              '//livehaf.com/cdn/shop/files/CoolEnzymeTeeGray3.jpg?v=1708331586',
              '//livehaf.com/cdn/shop/files/CoolEnzymeTeeGray5.jpg?v=1708331586',
              '//livehaf.com/cdn/shop/files/CoolEnzymeTeeDarkGray2.jpg?v=1709099211',
              '//livehaf.com/cdn/shop/files/CoolEnzymeTeeDarkGray1.jpg?v=1709099211',
              '//livehaf.com/cdn/shop/files/T-Shirt1080x1080_d8ba591b-dfad-4641-bbf2-4f7ec51df7d3.jpg?v=1713923560',
            ],
          },
          {
            name: 'White',
            images: [
              '//livehaf.com/cdn/shop/files/CoolEnzymeTeeWhite1.jpg?v=1708331614',
              '//livehaf.com/cdn/shop/files/CoolEnzymeTeeWhite3.jpg?v=1708331617',
              '//livehaf.com/cdn/shop/files/CoolEnzymeTeeWhite4.jpg?v=1708331617',
              '//livehaf.com/cdn/shop/files/CoolEnzymeTeeWhite2.jpg?v=1708331617',
              '//livehaf.com/cdn/shop/files/CoolEnzymeTeeWhite5.jpg?v=1708331617',
              '//livehaf.com/cdn/shop/files/CoolEnzymeTeeWhite2_5e37dac2-a716-4cb4-96b3-d486eea38059.jpg?v=1709099230',
              '//livehaf.com/cdn/shop/files/CoolEnzymeTeeWhite1_b2053efc-d62f-4174-918a-28dc8c597063.jpg?v=1709099230',
              '//livehaf.com/cdn/shop/files/T-Shirt1080x1080_131b572e-253d-4d71-a6b7-a861d9a98250.jpg?v=1713923568',
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Kemeja',
    slug: 'kemeja',
    baseProducts: [
      {
        title: 'Oxford Long Shirt',
        descriptionHtml: `
          <p>Oxford Long Shirt merupakan kemeja pria lengan panjang &nbsp;klasik yang memiliki potongan siluet slim fit untuk tampilan formal maupun casual</p>
          <p>Dikarenakan potongan nya yang slim fit potongan ini &nbsp;menciptakan ilusi tubuh yang lebih proporsional</p>
          <p>Terbuat dari Cotton Poly Blend yang lembut, breathable dan anti-kusut menjadikan kemeja ini nyaman dipakai sepanjang hari.&nbsp;</p>
          <p>Sentuhan modern fit dan timeless menjadikannya mudah dipadukan dengan bawahan apapun.</p>
          <p>Oxford Long Shirt memiliki 5 varian warna klasik yang dapat anda pilih, kemeja ini dijamin nyaman untuk menemani keseharian Anda.</p>
          <ul>
              <li>Bahan Cotton Poly Blend</li>
              <li>Siluet Slim Fit</li>
              <li>Didesain Timeless &amp; Versatile</li>
              <li>Material &nbsp;tidak transparan &nbsp;dan tidak mudah kusut</li>
              <li>Model menggunakan size XL</li>
              <li>Tinggi &amp; &nbsp;Berat Model: 185cm &amp; 77kg</li>
          </ul>
        `,
        price: 119900,
        options: [
          {
            name: 'Size',
            index: '1',
            position: '1',
            values: [
              {
                value: 'S',
                position: 1,
              },
              {
                value: 'M',
                position: 2,
              },
              {
                value: 'L',
                position: 3,
              },
              {
                value: 'XL',
                position: 4,
              },
              {
                value: 'XXL',
                position: 5,
              },
            ],
          },
        ],
        colors: [
          {
            name: 'Sky Blue',
            images: [
              '//livehaf.com/cdn/shop/files/OxfordLongShirtSkyBlue1.jpg?v=1711081029',
              '//livehaf.com/cdn/shop/files/OxfordLongShirtSkyBlue2.jpg?v=1711081029',
              '//livehaf.com/cdn/shop/files/OxfordLongShirtSkyBlue4.jpg?v=1711081034',
              '//livehaf.com/cdn/shop/files/OxfordLongShirtSkyBlue3.jpg?v=1711081034',
              '//livehaf.com/cdn/shop/files/OxfordLongShirtSkyBlue5.jpg?v=1711081034',
              '//livehaf.com/cdn/shop/files/OxfordLongShirtSkyBlue2_99ddf53d-51da-48cd-b506-4d3ff5da9923.jpg?v=1715071421',
              '//livehaf.com/cdn/shop/files/OxfordLongShirtSkyBlue1_df00f0b5-0bdb-4947-ad8c-f887160ba402.jpg?v=1715071421',
              '//livehaf.com/cdn/shop/files/Kemeja1080x1080_38ed92fa-2124-44de-9a6c-6922818d2b8a.jpg?v=1715071421',
            ],
          },
          {
            name: 'White',
            images: [
              '//livehaf.com/cdn/shop/files/OxfordLongShirtWhite1.jpg?v=1711081063',
              '//livehaf.com/cdn/shop/files/OxfordLongShirtWhite2.jpg?v=1711081063',
              '//livehaf.com/cdn/shop/files/OxfordLongShirtWhite4.jpg?v=1711081066',
              '//livehaf.com/cdn/shop/files/OxfordLongShirtWhite3.jpg?v=1711081066',
              '//livehaf.com/cdn/shop/files/OxfordLongShirtWhite5.jpg?v=1711081066',
              '//livehaf.com/cdn/shop/files/OxfordLongShirtWhite1_d3146add-eca9-4bdb-bf3a-29c8362ba7d8.jpg?v=1715071442',
              '//livehaf.com/cdn/shop/files/OxfordLongShirtWhite2_bd00d077-e572-4f42-84ef-b1534671b086.jpg?v=1715071442',
              '//livehaf.com/cdn/shop/files/Kemeja1080x1080_c85156e7-0e75-4be6-8030-5e47687bbd26.jpg?v=1715071442',
            ],
          },
        ],
      },
    ],
  },
]
