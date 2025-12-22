import { lazy } from "react"

const BrandSection = lazy(() => import("../components/BrandSection"))
const FeatureSection = lazy(() => import("../components/FeatureSection"))
const HeroSection = lazy(() => import("../components/HeroSection"))

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <BrandSection />
    </>
  )
}

export default HomePage