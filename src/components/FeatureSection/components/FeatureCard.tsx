import { motion } from "framer-motion"
import { featureProducts } from "../../../data"
import Card from "../../ui/Card"
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

const FeatureCard = () => {
    const MotionLink = motion(Link)

    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10"
        >
            {featureProducts.map((item) => (
                <MotionLink key={item.id} to={`product/${item.id}`} variants={image}>
                    <Card
                        image={item.image}
                        price={item.price}
                        name={item.name}
                    />
                </MotionLink>
            ))}
        </motion.div>
    )
}

export default FeatureCard