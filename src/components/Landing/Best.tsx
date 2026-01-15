"use client"
import React from "react";
import Folder from "../magicui/Folder";
import { Code, Smartphone, TrendingUp, Search, Rocket } from "lucide-react";

export default function Best() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Cutting-edge websites that convert visitors into customers. React, Next.js, and modern tech stacks.",
      color: "bg-accentColor",
      borderColor: "border-accentColor",
      textColor: "text-myblack",
      shadow: "shadow-[8px_8px_0px_0px_rgba(162,242,62,1)]"
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native and cross-platform mobile apps that users love. iOS, Android, React Native, Flutter.",
      color: "bg-myYellow",
      borderColor: "border-myYellow",
      textColor: "text-myblack",
      shadow: "shadow-[8px_8px_0px_0px_rgba(250,232,0,1)]"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven campaigns that boost your brand and drive real results. Social media, PPC, content marketing.",
      color: "bg-accentColor",
      borderColor: "border-accentColor",
      textColor: "text-myblack",
      shadow: "shadow-[8px_8px_0px_0px_rgba(162,242,62,1)]"
    },
    {
      icon: Search,
      title: "SEO & Analytics",
      description: "Rank higher, get found faster. Technical SEO, content optimization, and performance tracking.",
      color: "bg-myYellow",
      borderColor: "border-myYellow",
      textColor: "text-myblack",
      shadow: "shadow-[8px_8px_0px_0px_rgba(250,232,0,1)]"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Team Members" },
    { number: "10+", label: "Years Experience" }
  ];

  return (
    <section className="w-full bg-myblack py-8 md:py-12 lg:py-16 border-t-8 border-b-8 border-accentColor">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <div className="bg-zinc-900 border-8 md:border-[16px] border-myblack p-6 md:p-8 lg:p-12 shadow-[12px_12px_0px_0px_rgba(18,18,18,1)] md:shadow-[16px_16px_0px_0px_rgba(18,18,18,1)]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Left Text */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-guzan font-bold text-lime-400 mb-4 md:mb-6">
                  WE ARE
                </h1>
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-guzan font-bold text-white mb-4">
                  DIGITAL AGENCY
                </h2>
                <p className="text-base md:text-lg lg:text-xl font-inter text-white/80 max-w-sm">
                  We transform ideas into digital reality. From web apps to mobile solutions, marketing to SEO—we&apos;ve got you covered.
                </p>
              </div>

              {/* Center Folder */}
              <div className="flex-shrink-0 order-first md:order-none flex justify-center items-center">
                <div className="scale-75 md:scale-100 lg:scale-125">
                  <Folder
                    size={2}
                    items={[
                    <div key={"fira"} 
                    style={{
                      backgroundImage: "url(https://cdn.dribbble.com/userupload/17954722/file/still-4f114b1fb90f001de8c62aa3b12adc9d.png?resize=400x0r)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className="w-full h-full bg-cover bg-center rounded-lg"></div>,
                    <div key={"water"} 
                    style={{
                      backgroundImage: "url(https://cdn.dribbble.com/userupload/32296481/file/original-f4e16c755fb54fd64e6996e68579c6e6.png?resize=1024x800&vertical=center)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className="w-full h-full bg-cover bg-center rounded-lg"></div>,
                    <div key={"watea"} 
                    style={{
                      backgroundImage: "url(https://cdn.dribbble.com/userupload/12406685/file/still-066ced48787c35bb11ee8139e8ddc2e0.png?format=webp&resize=400x300&vertical=center)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className="w-full h-full bg-cover bg-center rounded-lg"></div>,
                  ]}
                />
                </div>
              </div>

              {/* Right Text */}
              <div className="flex-1 text-center md:text-right">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-guzan font-bold text-yellow-400 mb-4 md:mb-6">
                  CREATORS
                </h1>
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-guzan font-bold text-yellow-400 mb-4">
                  INNOVATORS
                </h2>
                <p className="text-base md:text-lg lg:text-xl  font-inter text-white/80 max-w-sm ml-auto">
                  Building the future of digital experiences, one pixel at a time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-guzan font-bold text-accentColor text-center mb-8 md:mb-12">
            WHAT WE DO
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`${service.color} border-8 md:border-[12px] border-myblack p-6 md:p-8 lg:p-10 ${service.shadow} transition-all duration-300 hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0px_0px_rgba(18,18,18,1)]`}
                >
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className={`${service.color} border-4 md:border-6 border-myblack p-3 md:p-4 ${service.shadow} flex-shrink-0`}>
                      <Icon className={`w-6 h-6 md:w-8 md:h-8 ${service.textColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-2xl md:text-3xl lg:text-4xl font-guzan font-bold ${service.textColor} mb-3 md:mb-4`}>
                        {service.title}
                      </h3>
                      <p className={`text-sm md:text-base lg:text-lg font-inter ${service.textColor}/80`}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-myblack border-8 md:border-[16px] border-accentColor p-6 md:p-8 lg:p-12 shadow-[12px_12px_0px_0px_rgba(162,242,62,1)] md:shadow-[16px_16px_0px_0px_rgba(162,242,62,1)]">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-guzan font-bold text-accentColor text-center mb-8 md:mb-12">
            BY THE NUMBERS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-accentColor border-4 md:border-8 border-myblack p-4 md:p-6 lg:p-8 text-center shadow-[6px_6px_0px_0px_rgba(18,18,18,1)] md:shadow-[8px_8px_0px_0px_rgba(18,18,18,1)] transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-guzan font-bold text-myblack mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base lg:text-lg font-inter font-semibold text-myblack/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 md:mt-16 lg:mt-20 text-center">
          <div className="bg-myYellow border-8 md:border-[16px] border-myblack p-8 md:p-10 lg:p-12 inline-block shadow-[12px_12px_0px_0px_rgba(18,18,18,1)] md:shadow-[16px_16px_0px_0px_rgba(18,18,18,1)] transition-all duration-300 hover:translate-x-2 hover:translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(18,18,18,1)]">
            <Rocket className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-myblack mx-auto mb-4 md:mb-6" />
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-guzan font-bold text-myblack mb-3 md:mb-4">
              READY TO START?
            </h3>
            <p className="text-base md:text-lg font-inter text-myblack/80 mb-4 md:mb-6 max-w-md mx-auto">
              Let&apos;s build something amazing together. Your vision, our expertise.
            </p>
            <button className="bg-myblack border-4 md:border-6 border-myblack px-6 md:px-8 lg:px-10 py-3 md:py-4 text-accentColor font-guzan font-bold text-lg md:text-xl lg:text-2xl shadow-[4px_4px_0px_0px_rgba(250,232,0,1)] transition-all duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(250,232,0,1)]">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
