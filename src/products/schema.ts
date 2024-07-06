import { z } from 'zod'

export const QueryProductSchema = z.object({
})

export const ProductSlugSchema = z.object({
  slug: z.string().min(1),
})
