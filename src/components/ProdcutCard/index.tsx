import { memo, motion } from "framer-motion"
import { shopItem } from "../../data"
import Card from "../ui/Card"
import { Link } from "react-router-dom"

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

const ProdcutCards = () => {
    const MotionLink = motion(Link)
return (
    <motion.div
    variants={container}
    initial="hidden"
    viewport={{amount: .3, once: true}}
    whileInView="visible"
    className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10">
        {shopItem.map((item) => (
            <MotionLink to={`product/${item.id}`}
            className="block"
            variants={image}>
                <Card image={item.image} name={item.name} price={item.price}/>
            </MotionLink>
        ))}
    </motion.div>
)}

export default memo(ProdcutCards)