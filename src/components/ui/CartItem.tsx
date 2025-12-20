import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsCart } from "react-icons/bs";
import { BiX } from "react-icons/bi";

const overlayVariants = {
    hidden: {opacity: 0},
    visible: {opacity: 1},
    exit: {opacity: 0}
}


const CartVariants = {
    hidden: {x: "100%"},
    visible: {
        x: 0,
        transition: {
            duration: .3,
            default: {esse: "easeOut"}
        },
    },
    exit: {
        x: "100%",
        transition: {
            duration: .2,
            default: {esse: "easeOut"}
        }
    }
}
const CartItem = () => {
    const [isOpen, setIsOpen] = useState(false);

return (
    <div className="flex items-center">
        <BsCart size={24} className="text-black cursor-pointer" onClick={() => setIsOpen(true)}/>
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div className="absolute h-screen w-1/2 lg:w-2/3 left-0 top-0 bg-black/20"
                    variants={overlayVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={() => setIsOpen(false)}/>
                    <motion.div
                    variants={CartVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute z-40 right-0 top-0 h-screen w-1/2 lg:w-1/3 bg-white">
                        <div className="px-3 py-6 flex items-center justify-between border-b border-zinc-300">
                            <BiX size={28} className="text-black/80 cursor-pointer hover-icon" onClick={() => setIsOpen(false)}/>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    </div>
);
};

export default CartItem;
