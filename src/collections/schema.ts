import { z } from 'zod'

export const CollectionSlugSchema = z.object({
  slug: z.string().min(1),
})
