import { motion, useScroll, useTransform } from "framer-motion"


const ScrollProgress = () => {
    const { scrollYProgress } = useScroll()
    const background = useTransform(
        scrollYProgress,
        [0,1],
        ["#e11d48","#b91c1c" ]
    )
    return (
        <motion.div
        className="fixed z-10000 top-0 h-3 left-1/2 w-screen rounded-2xl"
        style={{
            scaleX: scrollYProgress,
            background,
            x: "-50%",
            y: "-50%",
        }}
        />
    )
}

export default ScrollProgress
