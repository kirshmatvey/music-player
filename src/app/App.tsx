import "./App.css"
import { Routing } from "@/app/routing/Routing.tsx"
import { Header } from "@/widgets/header/ui/Header.tsx"

function App() {
    return (
        <>
            <Header />
            <Routing />
        </>
    )
}

export default App
