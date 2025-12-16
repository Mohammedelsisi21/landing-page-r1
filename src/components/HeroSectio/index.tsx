import LeftHero from "./components/LeftHero"
import RightHero from "./components/RightHero"


const HeroSectio = () => {
return (
    <section className="max-w-7xl mt-40 mx-auto p-4 sm-p-8 mb-20 py-16">
        <div className="flex relative flex-col lg:flex-row lg:space-x-12 overflow-x-clip">
            <LeftHero />
            <RightHero />
        </div>
    </section>
)
}

export default HeroSectio