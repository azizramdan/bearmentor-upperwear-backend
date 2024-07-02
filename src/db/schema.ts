import { doublePrecision, integer, pgEnum, pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core'
import { createId } from '@paralleldrive/cuid2'
import { relations } from 'drizzle-orm'

export const productStatus = pgEnum('productStatus', ['ACTIVE', 'ARCHIVED', 'DRAFT'])
export const productOptionIndex = pgEnum('productOptionIndex', ['1', '2', '3'])

export const products = pgTable('products', {
  id: varchar('id', { length: 255 }).primaryKey().notNull().$defaultFn(() => createId()),
  title: varchar('title', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).unique().notNull(),
  descriptionHtml: text('descriptionHtml').notNull(),
  status: productStatus('status').notNull(),
  publishedAt: timestamp('publishedAt'),
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').defaultNow().$onUpdate(() => new Date()),
})

export const productImages = pgTable('productImages', {
  id: varchar('id', { length: 255 }).primaryKey().notNull().$defaultFn(() => createId()),
  productId: varchar('productId', { length: 255 }).notNull().references(() => products.id),
  url: text('url').notNull(),
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').defaultNow().$onUpdate(() => new Date()),
})

export const productOptions = pgTable('productOptions', {
  id: varchar('id', { length: 255 }).primaryKey().notNull().$defaultFn(() => createId()),
  productId: varchar('productId', { length: 255 }).notNull().references(() => products.id),
  name: varchar('name', { length: 255 }).notNull(),
  index: productOptionIndex('index').notNull(),
  position: productOptionIndex('position').notNull(),
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').defaultNow().$onUpdate(() => new Date()),
})

export const productOptionValues = pgTable('productOptionValues', {
  id: varchar('id', { length: 255 }).primaryKey().notNull().$defaultFn(() => createId()),
  productOptionId: varchar('productOptionId', { length: 255 }).notNull().references(() => productOptions.id),
  value: varchar('value', { length: 255 }).notNull(),
  position: integer('position').notNull(),
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').defaultNow().$onUpdate(() => new Date()),
})

export const productVariants = pgTable('productVariants', {
  id: varchar('id', { length: 255 }).primaryKey().notNull().$defaultFn(() => createId()),
  productId: varchar('productId', { length: 255 }).notNull().references(() => products.id),
  title: varchar('title', { length: 255 }).notNull(),
  sku: varchar('sku', { length: 255 }).unique().notNull(),
  price: doublePrecision('price').notNull(),
  imageId: varchar('imageId', { length: 255 }).references(() => productImages.id),
  optionValueId1: varchar('optionValueId1', { length: 255 }).notNull().references(() => productOptionValues.id),
  optionValueId2: varchar('optionValueId2', { length: 255 }).references(() => productOptionValues.id),
  optionValueId3: varchar('optionValueId3', { length: 255 }).references(() => productOptionValues.id),
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').defaultNow().$onUpdate(() => new Date()),
})

export const productsRelations = relations(products, ({ many }) => ({
  images: many(productImages),
  options: many(productOptions),
  variants: many(productVariants),
}))

export const productImagesRelations = relations(productImages, ({ one, many }) => ({
  product: one(products, {
    fields: [productImages.productId],
    references: [products.id],
  }),
  variants: many(productVariants),
}))

export const productOptionsRelations = relations(productOptions, ({ one, many }) => ({
  product: one(products, {
    fields: [productOptions.productId],
    references: [products.id],
  }),
  values: many(productOptionValues),
}))

export const productOptionValuesRelations = relations(productOptionValues, ({ one, many }) => ({
  option: one(productOptions, {
    fields: [productOptionValues.productOptionId],
    references: [productOptions.id],
  }),
  variants1: many(productVariants),
  variants2: many(productVariants),
  variants3: many(productVariants),
}))

export const productVariantsRelations = relations(productVariants, ({ one }) => ({
  product: one(products, {
    fields: [productVariants.productId],
    references: [products.id],
  }),
  image: one(productImages),
  optionValue1: one(productOptionValues, {
    fields: [productVariants.optionValueId1],
    references: [productOptionValues.id],
  }),
  optionValue2: one(productOptionValues, {
    fields: [productVariants.optionValueId2],
    references: [productOptionValues.id],
  }),
  optionValue3: one(productOptionValues, {
    fields: [productVariants.optionValueId3],
    references: [productOptionValues.id],
  }),
}))
