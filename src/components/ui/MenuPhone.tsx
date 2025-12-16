import { useState } from "react";
import { BiX } from "react-icons/bi";
import { IoMenu } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import NavBtn from "./NavBtn";
import { navLink } from "../../data";

const overlayVariants = {
    hidden: {opacity: 0},
    visible: {opacity: 1},
    exit: {opacity: 0}
}


const menuVariants = {
    hidden: {x: "-100%"},
    visible: {
        x: 0,
        transition: {
            duration: .3,
            default: {esse: "easeOut"}
        },
    },
    exit: {
        x: "-100%",
        transition: {
            duration: .2,
            default: {esse: "easeOut"}
        }
    }
}
const MenuPhone = () => {
    const [openMenu, setOpenMenu] = useState(false);

return (
    <div className="flex items-center lg:hidden">
        <IoMenu size={28} className="text-black cursor-pointer" onClick={() => setOpenMenu(true)}/>
        <AnimatePresence>
            {openMenu && (
                <>
                    <motion.div className="absolute h-screen w-1/2 right-0 top-0 bg-black/20"
                    variants={overlayVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={() => setOpenMenu(false)}/>
                    <motion.div
                    variants={menuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute z-40 left-0 top-0 h-screen w-1/2 bg-white">
                        <div className="px-3 py-6 flex items-center justify-between border-b border-zinc-300">
                            <p className="text-3xl font-light capitalize text-black">
                                menu
                            </p>
                            <BiX size={28} className="text-black cursor-pointer" onClick={() => setOpenMenu(false)}/>
                        </div>
                        <nav className="flex flex-col items-center space-y-8 mt-10">
                            {navLink.map((item) => (
                            <NavBtn onClick={() => setOpenMenu(false)} key={item.name} ulr={item.href} textName={item.name}
                        />
                        ))}
                        </nav>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    </div>
);
};

export default MenuPhone;
