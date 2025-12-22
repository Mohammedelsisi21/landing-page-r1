import { motion } from "framer-motion"
import Button from "../../ui/Button"

const leftVariants = {
    hidden: { },
    visible: {
        transition: {
            staggerChildren: .1
        }
    },
}

const item = {
    hidden: {x: "-100%"},
    visible: {x: 0,
        transition: { duration: 0.8 }
    }
}

const LeftHero = () => {
return (
    <motion.div
    variants={leftVariants}
    initial="hidden"
    viewport={{amount: .3, once: false}}
    whileInView="visible"
    transition={{duration: .3, ease: "easeOut"}}
    className="lg:w-1/2">
        <motion.h1 variants={item} className="font-head text-7xl sm:text-8xl font-light leading-none mb-6 text-zinc-800">
            Midcentury modern home decor
        </motion.h1>
        <motion.p variants={item} className="text-lg text-zinc-600 mb-8 max-w-lg">
            Curated vintage and retro home decor from Berlin, bringing timeless design and character to your space.
        </motion.p>
        <motion.div variants={item}>
            <Button url="/shop" title="shop now"/>
        </motion.div>
    </motion.div>
)
}

export default LeftHero