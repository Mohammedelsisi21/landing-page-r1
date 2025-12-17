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

const RightText = () => {
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
            Our philosophy
        </motion.h2>
        <motion.p variants={item} className="text-lg text-zinc-600 mb-6">
            We are dedicated to sourcing and restoring authentic midcentury, vintage, and retro furniture. Each item in our collection is handpicked for its unique character, quality craftsmanship, and enduring appeal.
        </motion.p>
        <motion.p variants={item} className="text-lg text-zinc-600 mb-6">
            Our mission is to help you create a space that is not only beautiful but also tells a story. We value sustainability, choosing to give well-made pieces a second life, reducing waste, and celebrating the art of design.
        </motion.p>
        <motion.div variants={item}>
            <Button url="/about" title="learn more about us"/>
        </motion.div>
    </motion.div>
)
}

export default RightText