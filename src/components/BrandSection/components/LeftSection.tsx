import { motion } from "framer-motion"

const leftVariants = {
    hidden: {},
    visible: {
        staggerChildren: .15
    }
}

const image = {
    hidden: {y: "-100%"},
    visible: {y: 0,
        transition: { duration: 0.8 }
    }
}


const LeftSection = () => {
return (
    <motion.div
    variants={leftVariants}
    initial='hidden'
    viewport={{amount: .3, once: true}}
    whileInView="visible"
    className="h-['500px'] lg:w-1/2 w-full">
        <motion.img variants={image} src="/about.webp" className="w-full h-full object-cover rounded-2xl" alt="Stylish room with an orange armchair and a floor lamp"/>
    </motion.div>
)
}

export default LeftSection

