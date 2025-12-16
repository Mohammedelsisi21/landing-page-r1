import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import HomePage from "../page"
import ShopPage from "../page/ShopPage"
import AboutPage from "../page/AboutPage"
import ContactPage from "../page/ContactPage"
import App from "../App"


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