import { MdOutlineEmail } from "react-icons/md";
import { BiMapPin, BiPhone } from "react-icons/bi";
import type { IContact, ILinks, IMetaTeam, IProduct} from "../../src/interface";

import team1 from "../assets/team-1.webp"
import team2 from "../assets/team-2.webp"
import team3 from "../assets/team-3.webp"

import product1 from "../assets/product-2.webp"
import product2 from "../assets/product-1.webp"
import product3 from "../assets/product-10.webp"
import product4 from "../assets/product-9.webp"
import product5 from "../assets/product-8.webp"
import product6 from "../assets/product-4.webp"
import product7 from "../assets/product-5.webp"
import product8 from "../assets/product-6.webp"
import product9 from "../assets/product-3.webp"


const navLink: ILinks[] = [
    {
        name: "Shop",
        href: "/shop"
    },
    {
        name: "About",
        href: "/about"
    },
    {
        name: "Contact",
        href: "/contact"
    }
]

const metaTeam: IMetaTeam[] = [
    {
        image: team1,
        name: "Lars",
        title: "Logistics & Customer Care",
        desc: "Lars makes sure your new treasure arrives safely. He manages all logistics, from packing to shipping, and is always ready to assist with any questions, ensuring a smooth and happy experience for our customers."
    },
    {
        image: team2,
        name: "Greta",
        title: "Restoration Specialist",
        desc: "Greta breathes new life into every vintage find. Her expertise in restoration techniques and her delicate touch ensure that each piece notophen looks beautiful but is also ready for a new generation of use."
    },
    {
        image: team3,
        name: "Klaus",
        title: "Founder & Curator",
        desc: "With a lifelong passion for design and history, Klaus founded Midcentury Decor to share his love for timeless furniture. He meticulously sources each piece, ensuring it meets his high standards of quality and authenticity."
    },
]

const shopItem : IProduct[] = [
    {
        id: 1,
        image: product1,
        name: "Chair",
        price: 96,
        title: "Contemporary design chair for stylish interiors",
        desc: "Elevate your space with this modern wooden chair, expertly crafted to blend contemporary style and everyday comfort. Featuring a beautifully curved seat and ergonomic backrest for optimal support, this chair sits atop sturdy metal legs that add a touch of industrial elegance. Its versatile design makes it the perfect statement piece for living rooms, offices, or study areas. Available in a range of wood finishes and metal leg colors to suit your decor, with dimensions designed to fit most seating arrangements. Experience lasting durability and refined comfort with this must-have addition to your home or workspace."
    },{
        id: 2,
        image: product2,
        name: "Armchair",
        price: 120,
        title: "Stylish seating for any living space",
        desc: "Elevate your living space with our modern wooden armchair, expertly crafted from premium wood and featuring a hand-woven rattan backrest for a touch of natural elegance. The generously padded cushion ensures exceptional comfort, while the sleek, contemporary silhouette adds sophistication to any room. Available in a range of finishes such as walnut or oak, and cushion colors including cream, grey, or navy to complement your décor. Perfect for your lounge, reading corner, or bedroom. Dimensions: 85cm x 65cm x 75cm. Experience timeless style and superior craftsmanship with every detail."
    },{
        id: 3,
        image: product3,
        name: "Desk",
        price: 150,
        title: "Elegant wooden workspace for home or office",
        desc: 'Elevate your workspace with this stunning mid-century modern desk, handcrafted from richly finished walnut wood. Boasting four spacious drawers, this desk offers generous storage for all your office essentials while its sleek, timeless silhouette complements any décor. Perfect for both home offices and creative studios, its sturdy build ensures lasting durability and style. Dimensions: 48"W x 24"D x 30"H. Transform your productivity and space with this iconic piece.'
    },{
        id: 4,
        image: product4,
        name: "Sideboard",
        price: 190,
        title: "Elegant storage solution for modern and vintage spaces",
        desc: "Elevate your home décor with this elegant mid-century wooden sideboard, expertly crafted with clean, timeless lines and a rich, natural wood finish that brings warmth and sophistication to any space. Featuring generous storage options, including spacious drawers and cabinets, it's perfect for organizing your living room, dining area, or office essentials. Measuring approximately 150cm wide, 45cm deep, and 80cm high, this versatile piece offers both style and practicality, seamlessly blending vintage charm with modern functionality."
    },{
        id: 5,
        image: product5,
        name: "Chair",
        price: 800,
        title: "Mid-century modern accent chair for stylish interiors",
        desc: "Elevate your home with this stunning vintage brown leather armchair, expertly crafted with a rich, chocolate brown genuine leather upholstery and a striking chrome cantilever frame for a modern touch. Designed for both comfort and sophistication, its ergonomic shape and generous seat dimensions (approx. 85cm high x 75cm wide x 80cm deep) make it the perfect statement piece for any living room, study, or office. This timeless armchair seamlessly blends classic elegance with contemporary style, and is sure to impress guests while providing a luxurious seating experience."
    },{
        id: 6,
        image: product6,
        name: "Armchair",
        price: 85,
        title: "Retro accent chair with metal frame and beige upholstery",
        desc: "Elevate your living space with this stunning mid-century modern armchair, expertly crafted with a durable metal frame and plush, high-density beige upholstery for exceptional comfort and support. Its sleek, minimalist design blends seamlessly with any décor, making it the perfect statement piece for your living room, bedroom, or office. Measuring 32 inches wide by 28 inches deep and 35 inches high, this armchair offers ample seating without overwhelming your space. Add a touch of timeless style and sophistication to your home with this must-have accent chair."
    },{
        id: 7,
        image: product7,
        name: "Bar stool",
        price: 30,
        title: "Sleek seating with modern elegance",
        desc: "Elevate your space with this elegant minimalist wooden bar stool, featuring a beautifully finished wooden seat and robust white metal legs for lasting durability. Designed to seamlessly complement any kitchen, café, or home bar, its sleek silhouette offers both comfort and modern style. Perfect for a variety of interior aesthetics, this stool is easy to clean and lightweight for flexible arrangement. Available in natural wood tone with crisp white legs. Dimensions: 75cm height x 35cm width x 35cm depth."
    },{
        id: 8,
        image: product8,
        name: "Armchair",
        price: 280,
        title: "Stylish comfort for your living space",
        desc: "Elevate your living space with this contemporary accent armchair, featuring a robust wooden frame for lasting durability and eye-catching patterned upholstery that adds a touch of modern flair. Designed for optimal comfort, its plush cushioning and ergonomic seat make it perfect for lounging or entertaining. Ideal for any room—whether it's your living area, bedroom, or home office—this chair brings both style and relaxation to your home. Choose from multiple color options to suit your décor, and refer to dimensions to ensure the perfect fit."
    },{
        id: 9,
        image: product9,
        name: "Armchair",
        price: 80,
        title: "Sleek design with contemporary style",
        desc: 'Elevate your space with this contemporary dark green armchair, featuring a sleek, glossy finish and gently curved armrests for maximum comfort. Supported by robust wooden legs, this chair offers style and durability—ideal for modern living rooms, offices, or reading nooks. Its rich green hue adds a sophisticated pop of color to any decor, while the ergonomic design ensures hours of relaxed seating. Dimensions: 32" (H) x 28" (W) x 30" (D).'
    }
]

const contactData: IContact[] = [
    {
        id: 1,
        icon: MdOutlineEmail,
        href: "mailto:mohammedelsisi21@gmail.com",
        title: "Email",
        value: "mohamedelsisi@gmail.com",
    },
    {
        id: 2,
        icon: BiPhone,
        href: "tel:201011707304",
        title: "Phone",
        value: "+20 101 170 7304",
    },
    {
        id: 3,
        href: "#",
        icon: BiMapPin,
        title: "Location",
        value: "Sohag, Egypt",
    },
];

const featureProducts = [
    {
        id: 1,
        image: product1,
        name: "Chair",
        price: 96,
        title: "Contemporary design chair for stylish interiors",
        desc: "Elevate your space with this modern wooden chair, expertly crafted to blend contemporary style and everyday comfort. Featuring a beautifully curved seat and ergonomic backrest for optimal support, this chair sits atop sturdy metal legs that add a touch of industrial elegance. Its versatile design makes it the perfect statement piece for living rooms, offices, or study areas. Available in a range of wood finishes and metal leg colors to suit your decor, with dimensions designed to fit most seating arrangements. Experience lasting durability and refined comfort with this must-have addition to your home or workspace."
    },{
        id: 2,
        image: product2,
        name: "Armchair",
        price: 120,
        title: "Stylish seating for any living space",
        desc: "Elevate your living space with our modern wooden armchair, expertly crafted from premium wood and featuring a hand-woven rattan backrest for a touch of natural elegance. The generously padded cushion ensures exceptional comfort, while the sleek, contemporary silhouette adds sophistication to any room. Available in a range of finishes such as walnut or oak, and cushion colors including cream, grey, or navy to complement your décor. Perfect for your lounge, reading corner, or bedroom. Dimensions: 85cm x 65cm x 75cm. Experience timeless style and superior craftsmanship with every detail."
    },{
        id: 3,
        image: product3,
        name: "Desk",
        price: 150,
        title: "Elegant wooden workspace for home or office",
        desc: 'Elevate your workspace with this stunning mid-century modern desk, handcrafted from richly finished walnut wood. Boasting four spacious drawers, this desk offers generous storage for all your office essentials while its sleek, timeless silhouette complements any décor. Perfect for both home offices and creative studios, its sturdy build ensures lasting durability and style. Dimensions: 48"W x 24"D x 30"H. Transform your productivity and space with this iconic piece.'
    },{
        id: 4,
        image: product4,
        name: "Sideboard",
        price: 190,
        title: "Elegant storage solution for modern and vintage spaces",
        desc: "Elevate your home décor with this elegant mid-century wooden sideboard, expertly crafted with clean, timeless lines and a rich, natural wood finish that brings warmth and sophistication to any space. Featuring generous storage options, including spacious drawers and cabinets, it's perfect for organizing your living room, dining area, or office essentials. Measuring approximately 150cm wide, 45cm deep, and 80cm high, this versatile piece offers both style and practicality, seamlessly blending vintage charm with modern functionality."
    }
]

export {navLink ,metaTeam, shopItem, contactData, featureProducts}