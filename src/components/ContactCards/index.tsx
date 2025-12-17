import { motion, type Variants } from "framer-motion"
import { contactData } from "../../data"
import ContactCard from "../ui/ContactCard"

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: .25
        }
    }
}

const card : Variants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 300,
            damping:20,
        }
    }

}


const ContactCards = () => {
return (<>
    <motion.div
    variants={container}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 overflow-clip">
        {contactData.map((item) => (
            <motion.div variants={card} className="bg-zinc-100 rounded-2xl p-6 text-center hover:bg-zinc-200 transition-all duration-500" key={item.id}>
                <ContactCard  href={item.href} icon={item.icon} title={item.title} value={item.value}/>
            </motion.div>
        ))}
    </motion.div>
</>)}

export default ContactCards