import { motion } from "framer-motion"
import { shopItem } from "../../../data"
import Card from "../../ui/Card"

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15
        }
    },
}

const image = {
    hidden: {
        x: -10,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.7 }
    }
}

const FeatureCard = () => {
    const feature = shopItem.slice(0, 4)
    
    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10"
        >
            {feature.map((item) => (
                <motion.div key={item.id} variants={image}>
                    <Card
                        id={item.id}
                        image={item.image}
                        price={item.price}
                        name={item.name}
                    />
                </motion.div>
            ))}
        </motion.div>
    )
}

export default FeatureCard