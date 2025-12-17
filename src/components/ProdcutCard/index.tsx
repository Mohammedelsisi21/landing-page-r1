import { motion } from "framer-motion"
import { shopItem } from "../../data"
import Card from "../ui/Card"

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.6
        }
    },
}

const image = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: { duration: 0.6 }
    }
}

const ProdcutCard = () => {
return (
    <motion.div
    variants={container}
    initial="hidden"
    viewport={{amount: .3, once: false}}
    whileInView="visible"
    className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10">
        {shopItem.map((item) => (
            <motion.span
            variants={image}>
                <Card id={item.id} image={item.image} name={item.name} price={item.price}/>
            </motion.span>
        ))}
    </motion.div>
)}

export default ProdcutCard