import { lazy } from "react"
import HeadSection from "./components/HeadSection"

const InfoSection = lazy(() => import("./components/InfoSection"))

const TeamSection = () => {
    return (
    <section className="bg-gray-100 mb-20 py-16">
        <div className="max-w-7xl p-4 sm:p-8 mx-auto py-16">
            <div className="relative flex flex-col overflow-x-clip space-y-12 justify-between items-center">
                <HeadSection />
                <InfoSection />
            </div>
        </div>
    </section>
)}

export default TeamSection