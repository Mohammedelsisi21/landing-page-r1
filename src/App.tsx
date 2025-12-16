import { Outlet } from "react-router-dom"
import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header"
import CursorCircle from "./Shared/CursorCircle"
import ScrollProgress from "./Shared/ScrollProgress"

const App = () => {
  return (
    <div className="min-h-screen overflow-clip flex flex-col justify-between">
      <ScrollProgress />
      <CursorCircle />
      <Header />
        <main className="flex-1">
          <Outlet />
        </main>
      <Footer />
    </div>
  )
}

export default App