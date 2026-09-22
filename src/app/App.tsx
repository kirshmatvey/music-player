import s from "./App.module.css"
import { Routing } from "@/app/routing/Routing.tsx"
import { Sidebar } from "@/widgets/sidebar/ui/Sidebar.tsx"
import { Header } from "@/widgets"

function App() {
  return (
    <div className={s.app}>
      <Sidebar />
      <div className={s.pageWrapper}>
        <Header />
        <div className={s.layout}>
          <Routing />
        </div>
      </div>
    </div>
  )
}

export default App
