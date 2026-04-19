import Image from "next/image"
import RotatingText from "../magicui/TextColor"

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-accentColor border-t-8 border-b-8 border-myblack py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* Text Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="bg-white border-8 border-myblack p-6 md:p-8 lg:p-10 shadow-[8px_8px_0px_0px_rgba(18,18,18,1)]">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-myblack font-guzan leading-tight">
                WE ARE WAITING FOR YOUR <RotatingText
                texts={['Growth!', 'Success!', 'Vision!', 'Brand!']}
                mainClassName="px-2 sm:px-3 md:px-4 bg-accentColor text-myblack overflow-hidden py-1 sm:py-2 md:py-2 border-4 border-myblack"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-1 sm:pb-2 md:pb-2"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
              </h1>
            </div>
            <p className="text-base md:text-lg font-inter text-myblack font-semibold max-w-lg">Transform your digital presence with cutting-edge solutions. We bring your vision to life with innovative technology and creative excellence.</p>
            <button className="bg-myblack border-4 border-accentColor text-accentColor px-6 md:px-8 py-3 md:py-4 font-bold font-inter text-base md:text-lg hover:bg-accentColor hover:text-myblack hover:border-myblack hover:shadow-[4px_4px_0px_0px_rgba(18,18,18,1)] transition-all">
              Get Started
            </button>
          </div>

          {/* Image Container */}
          <div className="relative h-[300px] w-full md:h-[400px] lg:h-[500px] border-8 border-myblack bg-white shadow-[8px_8px_0px_0px_rgba(18,18,18,1)]">
            <Image
              src="/3dai.webp"
              alt="Astronaut walking space dog"
              fill
              className="object-cover "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

