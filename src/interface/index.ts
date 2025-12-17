import type { IconType } from "react-icons"


export interface ILinks {
    name: string
    href: string
}


export interface IMetaTeam {
    image: string
    name: string
    title: string
    desc: string
}

export interface IProduct {
    id: number
    image: string
    name: string
    price: number
    title: string
    desc: string
}

export interface   IContact{
    id?: number,
    href: string
    icon: IconType,
    title: string,
    value: string,

}
