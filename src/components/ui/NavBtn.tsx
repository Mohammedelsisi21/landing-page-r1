import type { RefAttributes } from "react"
import { NavLink } from "react-router-dom"

interface IProps extends RefAttributes<HTMLAnchorElement> {
    ulr: string
    textName: string
    onClick: () => void
}
const NavBtn = ({ulr, textName, onClick} : IProps) => {
    return (
        <NavLink className={"nav-btn"} to={ulr} onClick={onClick}>{textName}</NavLink>
    )
}

export default NavBtn