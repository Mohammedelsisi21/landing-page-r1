import { Link } from "react-router-dom"
import { formattedPrice } from "../../utils"

interface IProps {
    id: number
    image: string
    name: string
    price: number
}

const Card = ({id, image, price, name}: IProps) => {
    return (
        <Link to={`/product/${id}`} className="block group">
            <div className="relative overflow-hidden rounded-2xl mb-4 bg-gray-100 aspect-square">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover duration-500 group-hover:scale-110"
                />
            </div>
            <div className="space-y-1">
                <h3 className="text-lg font-medium text-gray-900 truncate">{name}</h3>
                <p className="text-gray-900 font-medium">{formattedPrice(price)}</p>
            </div>
        </Link>
    )
}

export default Card