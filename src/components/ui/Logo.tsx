import { Link } from "react-router-dom"


const letter = ['H', 'o', 'm', 'e', ' ', 'd', 'e', 'c', 'o', 'r']
const Logo = () => {
    return (
        <Link to={"/"}>
            {letter.map((char,i) => (
                <span key={i} style={{ "--i": i } as React.CSSProperties} className="logo">{char}</span>
            ))}
        </Link>
    )
}

export default Logo