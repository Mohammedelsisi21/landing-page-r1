import { lazy } from "react"
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"

const App = lazy(() => import("../App"))
const HomePage = lazy(() => import("../page"))
const ShopPage = lazy(() => import("../page/ShopPage"))
const AboutPage = lazy(() => import("../page/AboutPage"))
const ContactPage = lazy(() => import("../page/ContactPage"))


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<App />}>
                <Route index element={<HomePage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Route>
        </>
    )
)






export default router