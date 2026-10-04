import s from "./Header.module.css"
import { Login } from "@/features/auth/ui/Login.tsx"
import { useLogoutMutation } from "@/shared/api/baseApi/baseApi.ts"

type Props = {
  isAuthorized: boolean
  login: string
}

export const Header = ({isAuthorized, login}: Props) => {
  const [logout] = useLogoutMutation()

  const logoutHandler = () => logout()

  return (
    <header className={s.header}>
      {isAuthorized && (
        <div className={s.loginContainer}>
          <p>{login}</p>
          <button onClick={logoutHandler}>logout</button>
        </div>
      )}
      {!isAuthorized && <Login />}
    </header>
  )
}
