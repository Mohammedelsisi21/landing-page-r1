import CartItem from "../ui/CartItem"
import Logo from "../ui/Logo"
import MenuPhone from "../ui/MenuPhone"
import SocialMedia from "../ui/SocialMedia"
import Navbar from "./Navbar"

const Header = () => {
    return (
        <header className="fixed border-b border-b-zinc-300 bg-white/50 backdrop-blur-lg min-w-full py-6 lg:py-7 px-4 sm:px-8 max-w-7xl overflow-x-clip">
            <div className="container mx-auto flex items-center justify-between">
                
                <Logo />

                {/* Desktop */}
                <Navbar />
                {/* Mobile */}
                <div className="flex items-center space-x-4">
                    <SocialMedia />
                    <CartItem />
                    <MenuPhone />
                </div>

            </div>
        </header>
    )
}

export default Header