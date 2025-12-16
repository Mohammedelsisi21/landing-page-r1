import { navLink } from "../../data"
import NavBtn from "../ui/NavBtn"

const Navbar = () => {
    return (
        <nav className="hidden lg:flex items-center space-x-8">
            {navLink.map((item) => (
                <NavBtn key={item.name} ulr={item.href} textName={item.name}/>
                ))}
        </nav>
    )
}

export default Navbar