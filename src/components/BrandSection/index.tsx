import LeftSection from "./components/LeftSection"
import RightSection from "./components/RightSection"

const BrandSection = () => {
  return (
    <section className="max-w-7xl mx-auto p-4 sm:p-8 mb-20 py-16 mt-20">
      <div className="flex relative flex-col lg:items-center lg:flex-row lg:space-x-12 overflow-clip">
        <LeftSection />
        <RightSection />
      </div>
    </section>
  )
}

export default BrandSection