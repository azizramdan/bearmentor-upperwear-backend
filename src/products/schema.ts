import { z } from 'zod'

export const QueryProductSchema = z.object({
  categoriId: z.string().optional(),
})
