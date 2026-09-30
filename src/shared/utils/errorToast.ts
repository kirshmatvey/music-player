import { toast } from "react-toastify"

export const errorToast = (message: string) => {
  toast(message, { theme: 'colored', type: 'error' })
}