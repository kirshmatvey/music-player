import s from "./App.module.css"
import { Routing } from "@/app/routing/Routing.tsx"
import { Sidebar } from "@/widgets/header/ui/Sidebar.tsx"

function App() {
  return (
    <div className={s.app}>
      <Sidebar />
      <div className={s.layout}>
        <Routing />
      </div>
    </div>
  )
}

export default App
