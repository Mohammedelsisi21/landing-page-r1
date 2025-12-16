import { useSpring, motion } from "framer-motion"
import { useEffect } from "react"

const CursorCircle = () => {
    const x = useSpring(0, {stiffness: 300, damping: 20})
    const y = useSpring(0, {stiffness: 300, damping: 20})

    useEffect(() => {
        const handelMouse = (e: MouseEvent) => {
            x.set(e.clientX - 12)
            y.set(e.clientY - 12)
        }

        window.addEventListener("mousemove", handelMouse)

        return () => {
            window.addEventListener("mousemove", handelMouse)
        }
    })
    return (
        <motion.div
        style={{x,y,
            boxShadow: `
            0 0 30px rgba(0,0,0,0.15)
            0 0 12px rgba(0,0,0,0.25),
            `
        }}
        className="hidden md:block h-6 w-6 fixed top-0 left-0 z-1000 rounded-full pointer-events-none">

        </motion.div>
    )
}

export default CursorCircle