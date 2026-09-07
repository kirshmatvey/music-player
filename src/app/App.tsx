import s from "./App.module.css"
import { Routing } from "@/app/routing/Routing.tsx"
import { Header } from "@/widgets/header/ui/Header.tsx"

function App() {
  return (
    <>
      <Header />
      <div className={s.layout}>
        <Routing />
      </div>
    </>
  )
}

export default App
