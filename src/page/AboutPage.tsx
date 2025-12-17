import { lazy } from "react"


const AboutSection = lazy(() => import("../components/AboutSection"))
const TeamSection = lazy(() => import("../components/TeamSection"))


const AboutPage = () => {
  return (
    <section className="bg-white mt-20 lg:mt-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-9 text-center">
          <h1 className="text-5xl font-light tracking-tight text-gray-900 mb-4">
            Our story
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Founded in the heart of Berlin, Midcentury Decor was born from a passion for timeless design and the stories behind each piece. We believe that furniture should be more than just functional; it should be a source of joy and a reflection of personal style.</p>
        </div>
        <AboutSection />
      </div>
        <TeamSection />
    </section>
)}

export default AboutPage