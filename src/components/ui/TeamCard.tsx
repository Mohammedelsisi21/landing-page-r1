import type { IMetaTeam } from "../../interface"


const TeamCard = ({desc,image,name,title} : IMetaTeam) => {
    return (
        <div className="text-center mt-3">
            <img src={image} alt={name} className="mx-auto h-40 w-40 rounded-full object-cover"/>
            <h3 className="mt-6 text-xl font-medium text-zinc-900">{name}</h3>
            <p className="text-zinc-600">{title}</p>
            <p className="mt-5 text-zinc-500 max-w-xs mx-auto">{desc}</p>
        </div>
    )
}

export default TeamCard