import ProdcutCards from "../components/ProdcutCard"

const ShopPage = () => {
  return (
    <section className="bg-white mt-20 lg:mt-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-light tracking-tight text-zinc-900 mb-4">
            Shop our collection
          </h1>
          <p className="text-lg text-zinc-600">Discover unique vintage and retro pieces for your home</p>
        </div> 
        <ProdcutCards />
      </div>
    </section>
  )
}

export default ShopPage