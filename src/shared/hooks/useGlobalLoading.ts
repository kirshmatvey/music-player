import { useSelector } from "react-redux"
import type { RootState } from "@/app/store/store.ts"

export const useGlobalLoading = () => {
  return useSelector((state: RootState) => {
    // Получаем все запросы из RTK Query API.
    const queries = Object.values(state.baseApi.queries)
    const mutations = Object.values(state.baseApi.mutations)

    // Проверяем, есть ли активные запросы.
    const hasActiveQuery = queries.some(query => query?.status === 'pending')
    const hasActiveMutation = mutations.some(mutation => mutation?.status === 'pending')

    return hasActiveQuery || hasActiveMutation
  })
}