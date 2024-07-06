import { z } from 'zod'

export const AddToCartSchema = z.object({
  productId: z.string().min(1),
  productVariantId: z.string().min(1),
  quantity: z.coerce.number().int().min(1),
})

export const UpdateCartItemSchema = z.object({
  quantity: z.coerce.number().int().min(1),
})
