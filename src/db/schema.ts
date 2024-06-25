import { createId } from '@paralleldrive/cuid2'
import { pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core'

export const categories = pgTable('categories', {
  id: varchar('id').primaryKey().$defaultFn(() => createId()),
  name: varchar('name').notNull(),
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').defaultNow().$onUpdate(() => new Date()),
})

export const products = pgTable('products', {
  id: varchar('id').primaryKey().$defaultFn(() => createId()),
  name: varchar('name').notNull(),
  price: varchar('price').notNull(),
  categoryId: varchar('categoryId').notNull().references(() => categories.id),
  imageUrls: text('imageUrls').array().notNull(),
  description: text('description').notNull(),
  sku: varchar('sku').notNull(),
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').defaultNow().$onUpdate(() => new Date()),
})
