import * as z from 'zod'

export const getMeResponseSchema = z.object({
  userId: z.string(),
  login: z.string(),
})

export const accessDataResponseSchema = z.object({
  refreshToken: z.jwt(),
  accessToken: z.jwt(),
})