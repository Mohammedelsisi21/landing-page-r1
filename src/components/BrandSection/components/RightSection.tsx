import { motion, type Variants } from "framer-motion"
import Button from "../../ui/Button"

const leftVariants = {
    hidden: { },
    visible: {
        transition: {
            staggerChildren: .1
        }
    },
}

const item: Variants = {
    hidden: {x: "100%"},
    visible: {x: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30
        }
    }
}

const RightSection = () => {
return (
    <motion.div
    variants={leftVariants}
    initial="hidden"
    viewport={{amount: .3, once: false}}
    whileInView="visible"
    transition={{duration: .3, ease: "easeOut"}}
    className="lg:w-1/2 mt-5">
        <motion.h2 variants={item}
        className="text-4xl font-light tracking-tight text-zinc-900 mb-6 font-head">
            Curated with care
        </motion.h2>
        <motion.p variants={item} className="text-lg text-zinc-600 mb-6">
            Every piece in our collection is carefully selected for its unique character, quality craftsmanship, and timeless design. We believe in bringing the warmth and authenticity of vintage decor into modern homes.
        </motion.p>
        <motion.p variants={item} className="text-lg text-zinc-600 mb-6">
            Based in Berlin, we source authentic midcentury modern, vintage, and retro pieces that tell a story and add personality to your space.
        </motion.p>
        <motion.div variants={item}>
            <Button url="/about" title="learn more about us"/>
        </motion.div>
    </motion.div>
)
}

export default RightSection