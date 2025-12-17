import { motion } from "framer-motion"
import ContactCards from "../components/ContactCards"

const ContactPage = () => {
  return (
    <section className="bg-white mt-20 lg:mt-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-9 text-center">
          <h1 className="text-5xl md:text-6xl font-light font-head tracking-tight text-zinc-900 mb-6">
            Get in touch
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">Have questions about our collection? We'd love to hear from you.</p>
        </div>
        <ContactCards />
        <div
        className="col-span-1 lg:col-span-2">
          <motion.img
          initial={{opacity: 0, scale: .5}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{duration: .3}}
          src="/about.webp" className="w-full h-[600px] object-cover rounded-2xl" alt="A patterned armchair in a well-lit room" />
        </div>
      </div>
    </section>
  )
}

export default ContactPage