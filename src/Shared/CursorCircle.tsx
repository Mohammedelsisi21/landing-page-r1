import { useSpring, motion } from "framer-motion"
import { useEffect } from "react"

const CursorCircle = () => {
    const x = useSpring(0, {stiffness: 300, damping: 20})
    const y = useSpring(0, {stiffness: 300, damping: 20})

    useEffect(() => {
        const handelMouse = (e: MouseEvent) => {
            x.set(e.clientX - 8)
            y.set(e.clientY - 8)
        }

        window.addEventListener("mousemove", handelMouse)

        return () => {
            window.addEventListener("mousemove", handelMouse)
        }
    })
    return (
        <motion.div
        style={{x,y}}
        className="hidden md:block h-4 w-4 border-2 border-orange-600 fixed top-0 left-0 z-1000 rounded-full pointer-events-none">

        </motion.div>
    )
}

export default CursorCircle