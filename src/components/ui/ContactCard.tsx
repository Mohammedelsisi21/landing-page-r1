import type { IContact } from "../../interface"



const ContactCard = ({icon, title, value, href} : IContact) => {
    const Icon = icon
return (
    <a href={href} className="w-full h-full block">
        <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-zinc-900 text-white mb-4">
            <Icon size={28} />
        </div>
        <h3 className="font-semibold text-lg mb-1">
            {title}
        </h3>
        <p className="text-zinc-600">
            {value}
        </p>
    </a>
)}

export default ContactCard