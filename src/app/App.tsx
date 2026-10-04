import s from "./App.module.css"
import { Routing } from "@/app/routing/Routing.tsx"
import { Sidebar } from "@/widgets/sidebar/ui/Sidebar.tsx"
import { Header } from "@/widgets"
import { useGlobalLoading } from "@/shared/hooks/useGlobalLoading.ts"
import { LinearProgress } from "@/shared/components"
import { ToastContainer } from "react-toastify"
import { useGetMeQuery } from "@/shared/api/authApi/authApi.ts"

function App() {
  const isGlobalLoaderActive = useGlobalLoading()

  const {data} = useGetMeQuery()

  return (
    <div className={s.app}>
      <Sidebar />
      <div className={s.pageWrapper}>
        <Header isAuthorized={!!data} login={data?.login || ''}/>
        {isGlobalLoaderActive && <LinearProgress/>}
        <div className={s.layout}>
          <Routing />
        </div>
      </div>
      <ToastContainer position={'bottom-right'}/>
    </div>
  )
}

export default App
