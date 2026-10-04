import { type getMeResponseSchema, accessDataResponseSchema } from "@/shared/api/authApi/authApi.schemas.ts"
import * as z from 'zod'

export type GetMeResponse = z.infer<typeof getMeResponseSchema>
export type AccessDataResponse = z.infer<typeof accessDataResponseSchema>

// Arguments
export type LoginArgs = {
  code: string
  redirectUri: string
  rememberMe: boolean
  accessTokenTTL?: string // e.g. "3m"
}