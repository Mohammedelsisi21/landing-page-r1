import { lazy } from "react"


const LeftImage = lazy(() => import("./components/LeftImage"))
const RightText = lazy(() => import("./components/RightText"))

const AboutSection = () => {
    return (
    <section className="max-w-7xl mx-auto p-4 sm-p-8 mb-20 py-16 bg-white mt-20 lg:mt-30">
        <div className="flex relative flex-col lg:items-center lg:flex-row lg:space-x-12 overflow-clip">
            <LeftImage />
            <RightText />
        </div>
    </section>
    )
}

export default AboutSection