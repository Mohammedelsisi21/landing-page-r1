import Button from "../ui/Button"
import FeatureCard from "./components/FeatureCard"
import HeadSection from "./components/HeadSection"

const FeatureSection = () => {
  return (
    <section className="bg-gray-100 mb-20 py-16">
      <div className="max-w-7xl p-4 sm:p-8 mx-auto">
        <div className="relative flex flex-col overflow-x-clip space-y-12 justify-between items-center">
          <HeadSection />

          <FeatureCard />

          <Button title="view all Products" url="/shop"/>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection