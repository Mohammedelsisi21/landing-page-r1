import { motion } from "framer-motion"

const leftVariants = {
    hidden: {},
    visible: {
        staggerChildren: .15
    }
}

const image = {
    hidden: {x: "-100%"},
    visible: {x: 0,
        transition: { duration: 0.8 }
    }
}
const LeftImage = () => {
return (
    <motion.div
    variants={leftVariants}
    initial='hidden'
    viewport={{amount: .3, once: false}}
    whileInView="visible"
    className="h-125 lg:w-1/2 w-full">
        <motion.img variants={image} src="/our.webp" className="w-full h-full object-cover rounded-2xl" alt="Brightly lit modern interior with vintage wooden furniture"/>
    </motion.div>
)
}

export default LeftImage