import { motion } from "framer-motion"
import { BsArrowRight } from "react-icons/bs"
import { Link } from "react-router-dom"
interface IProps {
    title: string
    url: string
}



const Button = ({title, url} : IProps) => {
    return (
        <Link to={url} className="w-fit block">
            <motion.button className="flex bg-zinc-900 hover:bg-transparent text-white hover:text-zinc-900 items-center justify-between py-3 px-6 rounded-full duration-500 border-2 border-zinc-900 space-x-3 cursor-pointer capitalize"
            whileTap={{ scale: 0.9 }}
            whileHover="hover">
                <span className="block">{title}</span>
                <motion.span
                variants={
                    { hover: {x: 8}, initial: { x: 0 }}}
                    transition={{type: "spring", stiffness: 300}}
                >
                    <BsArrowRight size={20} />
                </motion.span>
            </motion.button>
        </Link>
    )
}

export default Button