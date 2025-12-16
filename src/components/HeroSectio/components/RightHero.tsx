import { motion } from "framer-motion"


const rightVariants = {
    hidden: { },
    visible: {
        transition: {
            staggerChildren: .1
        }
    },
}

const item = {
        hidden: { opacity: 0, x: 100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8 }
    }
}

const RightHero = () => {
return (
    <motion.div
    variants={rightVariants}
    initial="hidden"
    viewport={{amount: .3, once: false}}
    whileInView="visible"
    className="grid grid-cols-2 gap-6 lg:w-1/2 w-full mt-10 lg:mt-0">
        <div className="space-y-4 w-full">
            <motion.img
            whileHover={{rotate: 5, scale: .90}}
            variants={item}
            transition={{type: "spring", stiffness: 300, damping: 20}}
            src="/hero-1.webp" alt="Close up of a wooden armchair with beige cushions"
            className="w-full h-64 object-cover rounded-2xl"/>

            <motion.img
            whileHover={{rotate: -5, scale: .90}}
            variants={item}
            transition={{type: "spring", stiffness: 300, damping: 20}}
            src="/hero-2.webp" alt="Orange armchair in a stylish room with a floor lamp"
            className="w-full h-48 object-cover object-bottom rounded-2xl"/>
        </div>
        <div className="space-y-4 mt-10">
            <motion.img
            whileHover={{rotate: 5, scale: .90}}
            variants={item}
            transition={{type: "spring", stiffness: 300, damping: 20}}
            src="/hero-4.webp" alt="Lorem, ipsum dolor sit amet!"
            className="w-full h-48 object-cover rounded-2xl"/>

            <motion.img
            whileHover={{rotate: -5, scale: .90}}
            variants={item}
            transition={{type: "spring", stiffness: 300, damping: 20}}
            src="/hero-3.webp" alt="Lorem, ipsum dolor sit amet!"
            className="w-full h-64 object-cover object-bottom rounded-2xl"/>
        </div>
    </motion.div>
)
}

export default RightHero