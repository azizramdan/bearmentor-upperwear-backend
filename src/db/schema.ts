import { doublePrecision, integer, pgTable, text, timestamp, unique, varchar } from 'drizzle-orm/pg-core'
import { createId } from '@paralleldrive/cuid2'

export const categories = pgTable('categories', {
  id: varchar('id', { length: 255 }).primaryKey().notNull().$defaultFn(() => createId()),
  name: varchar('name', { length: 255 }).unique().notNull(),
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').defaultNow().$onUpdate(() => new Date()),
})

export const products = pgTable('products', {
  id: varchar('id', { length: 255 }).primaryKey().notNull().$defaultFn(() => createId()),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description').notNull(),
  categoryId: varchar('categoryId', { length: 255 }).notNull().references(() => categories.id),
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').defaultNow().$onUpdate(() => new Date()),
})

export const productColors = pgTable(
  'productColors',
  {
    id: varchar('id', { length: 255 }).primaryKey().notNull().$defaultFn(() => createId()),
    name: varchar('name', { length: 255 }).notNull(),
    color: varchar('color', { length: 255 }).notNull(),
    productId: varchar('productId', { length: 255 }).notNull().references(() => products.id),
    slug: varchar('slug', { length: 255 }).unique().notNull(),
    imageUrls: text('imageUrls').array().notNull(),
    createdAt: timestamp('createdAt').defaultNow(),
    updatedAt: timestamp('updatedAt').defaultNow().$onUpdate(() => new Date()),
  },
  t => ({
    productIdColorUnique: unique('productIdColorUnique').on(t.productId, t.color),
  }),
)

export const variants = pgTable('variants', {
  id: varchar('id', { length: 255 }).primaryKey().notNull().$defaultFn(() => createId()),
  name: varchar('name', { length: 255 }).notNull(),
  productId: varchar('productId', { length: 255 }).notNull().references(() => products.id),
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').defaultNow().$onUpdate(() => new Date()),
})

export const variantOptions = pgTable(
  'variantOptions',
  {
    id: varchar('id', { length: 255 }).primaryKey().notNull().$defaultFn(() => createId()),
    variantId: varchar('variantId', { length: 255 }).notNull().references(() => variants.id),
    name: varchar('name', { length: 255 }).notNull(),
    sku: varchar('sku', { length: 255 }).unique().notNull(),
    stock: integer('stock').notNull(),
    price: doublePrecision('price').notNull(),
    productColorId: varchar('productColorId', { length: 255 }).notNull().references(() => productColors.id),
    createdAt: timestamp('createdAt').defaultNow(),
    updatedAt: timestamp('updatedAt').defaultNow().$onUpdate(() => new Date()),
  },
  t => ({
    variantIdProductColorIdUnique: unique().on(t.variantId, t.productColorId, t.name),
  }),
)
