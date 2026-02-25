
// import FloatBar from "@/components/FloatNav";
import Footer from "@/components/Footer";
import Best from "@/components/Landing/Best";
import BlackBox from "@/components/Landing/BlackBox";
import Expand from "@/components/Landing/Expand";
// import Hero from "@/components/Landing/Hero";
import HeroSection from "@/components/Landing/HeroZero";
import { MarqueeDemo } from "@/components/Landing/Marque";
import ScrollVelocity from "@/components/magicui/markeuptext";
import { HoverImageLinks } from "@/components/services";

// import { MacbookScroll } from "@/components/ui/macbook-scroll";
import dynamic from 'next/dynamic'


const Hero = dynamic(() => import('@/components/Landing/Hero'))

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* <div className="flex justify-center">
        <FloatBar />
      </div> */}
      <Hero />
     
      <MarqueeDemo />
      <Expand />
      <section className="bg-myblack border-t-8 border-b-8 border-accentColor py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="bg-accentColor border-4 md:border-8 border-myblack p-4 md:p-6 lg:p-8 xl:p-12 shadow-[8px_8px_0px_0px_rgba(18,18,18,1)] mb-8 md:mb-12 lg:mb-16">
            <ScrollVelocity
              texts={["UI/UX Design * Web Development *  App Development * E-commerce * CMS *  SaaS Solutions","Digital Marketing * SEO * Social Media *  Branding *  Content Marketing"
                ]}
              velocity={4.5}
              className="font-guzan text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-myblack font-bold"
            />
          </div>
          <BlackBox />
        </div>
      </section>
      <HeroSection />
      <HoverImageLinks />
      <Best />
      {/* <div className=' h-[170vh] md:h-[400vh] ' >
        <MacbookScroll
          src={`/win.webp`}
          showGradient={true}
        />
      </div> */}
  
      <Footer />
    </div>
  );
}
