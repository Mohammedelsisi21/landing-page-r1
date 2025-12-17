import { motion } from "framer-motion"
import { metaTeam } from "../../../data"
import TeamCard from "../../ui/TeamCard"

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.6
        }
    },
}

const card = {
    hidden: {
        opacity: 0,
        scale: .90
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.6 }
    }
}
const renderMetaTeam = metaTeam.map((item) => (
    <motion.div key={item.name} variants={card}>
        <TeamCard title={item.title} image={item.image} name={item.name} desc={item.desc}/>
    </motion.div>
))
const InfoSection = () => {
return (
    <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10"
        >
            {renderMetaTeam}
    </motion.div>
)
}

export default InfoSection