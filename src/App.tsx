import { Outlet } from "react-router-dom"
import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header"
import CursorCircle from "./Shared/CursorCircle"

const App = () => {
  return (
    <div className="min-h-screen overflow-clip flex flex-col justify-between">
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