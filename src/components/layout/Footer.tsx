import SocialMedia from "../ui/SocialMedia"

const Footer = () => {
  return (
    <footer className="bg-white/50 border-t border-t-zinc-300 min-w-full py-6 lg:py-7 px-4 sm:px-8 max-w-7xl overflow-x-clip">
      <div className="container mx-auto max-w-7xl py-12">
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-lg font-semibold mb-3">Home decor</h4>
            <p className="text-sm text-gray-600">
              Curated vintage home decor from Berlin.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-wide mb-4">
              SHOP
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">All products</a></li>
              <li><a href="#" className="hover:text-black">Furniture</a></li>
              <li><a href="#" className="hover:text-black">Lighting</a></li>
              <li><a href="#" className="hover:text-black">Decor</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-wide mb-4">
              COMPANY
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">About us</a></li>
              <li><a href="#" className="hover:text-black">Contact</a></li>
              <li><a href="#" className="hover:text-black">Shipping policy</a></li>
              <li><a href="#" className="hover:text-black">Returns policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-wide mb-4">
              CONNECT
            </h4>
            <div className="flex items-center gap-4 text-gray-600">
              <SocialMedia />
            </div>
          </div>
        </div>
          <div className="border-t-2 border-zinc-300 mt-12 pt-6 text-center text-sm text-gray-500">
            © 2025 Home decor. All rights reserved.
          </div>
        </div>
    </footer>
  )
}

export default Footer