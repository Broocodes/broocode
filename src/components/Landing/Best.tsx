"use client"
import React from "react";
import Link from "next/link";
import Folder from "../magicui/Folder";
import { ArrowUpRight, Code, Rocket, Search, Smartphone, TrendingUp } from "lucide-react";

export default function Best() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Cutting-edge websites that convert visitors into customers. React, Next.js, and modern tech stacks.",
      accent: "bg-accentColor text-myblack",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native and cross-platform mobile apps that users love. iOS, Android, React Native, Flutter.",
      accent: "bg-myblack text-accentColor",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven campaigns that boost your brand and drive real results. Social media, PPC, content marketing.",
      accent: "bg-accentColor text-myblack",
    },
    {
      icon: Search,
      title: "SEO & Analytics",
      description: "Rank higher, get found faster. Technical SEO, content optimization, and performance tracking.",
      accent: "bg-myblack text-accentColor",
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Team Members" },
    { number: "10+", label: "Years Experience" }
  ];

  return (
    <section className="w-full bg-[#fafafa] py-14 md:py-20 border-y-8 border-myblack">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="bg-white border-4 md:border-8 border-myblack p-6 md:p-10 lg:p-12 shadow-[8px_8px_0px_0px_rgba(18,18,18,1)] md:shadow-[12px_12px_0px_0px_rgba(18,18,18,1)]">
          <div className="grid lg:grid-cols-12 gap-8 md:gap-10 items-center mb-12 md:mb-14">
            <div className="lg:col-span-4 text-center lg:text-left">
              <p className="inline-block bg-accentColor text-myblack border-2 border-myblack px-3 py-1.5 text-sm font-semibold mb-4">
                Premium Digital Partner
              </p>
              <h2 className="font-guzan text-4xl md:text-5xl lg:text-6xl leading-[0.95] text-myblack">
                WE ARE
                <span className="block text-accentColor">CREATORS</span>
              </h2>
              <p className="text-myblack/80 mt-4 text-base md:text-lg font-medium">
                We transform ideas into digital products that scale, convert, and stay memorable.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="scale-[0.78] sm:scale-90 md:scale-100">
                <Folder
                  size={2}
                  items={[
                    <div
                      key={"fira"}
                      style={{
                        backgroundImage: "url(https://cdn.dribbble.com/userupload/17954722/file/still-4f114b1fb90f001de8c62aa3b12adc9d.png?resize=400x0r)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      className="w-full h-full bg-cover bg-center rounded-lg"
                    />,
                    <div
                      key={"water"}
                      style={{
                        backgroundImage: "url(https://cdn.dribbble.com/userupload/32296481/file/original-f4e16c755fb54fd64e6996e68579c6e6.png?resize=1024x800&vertical=center)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      className="w-full h-full bg-cover bg-center rounded-lg"
                    />,
                    <div
                      key={"watea"}
                      style={{
                        backgroundImage: "url(https://cdn.dribbble.com/userupload/12406685/file/still-066ced48787c35bb11ee8139e8ddc2e0.png?format=webp&resize=400x300&vertical=center)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      className="w-full h-full bg-cover bg-center rounded-lg"
                    />,
                  ]}
                />
              </div>
            </div>

            <div className="lg:col-span-4 text-center lg:text-right">
              <h3 className="font-guzan text-3xl md:text-4xl lg:text-5xl text-myblack">
                INNOVATORS
              </h3>
              <p className="text-myblack/80 mt-3 text-base md:text-lg font-medium lg:ml-auto max-w-sm">
                Your vision + our design, development, and growth execution under one roof.
              </p>
            </div>
          </div>

          <div className="mb-12 md:mb-14">
            <h3 className="font-guzan text-3xl md:text-4xl lg:text-5xl text-myblack text-center mb-8">
              WHAT WE DO BEST
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className={`border-4 border-myblack p-5 md:p-6 shadow-[6px_6px_0px_0px_rgba(18,18,18,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(18,18,18,1)] transition ${service.accent}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-white/90 border-2 border-myblack p-2.5 shrink-0">
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-myblack" />
                      </div>
                      <div>
                        <h4 className="font-guzan text-2xl md:text-3xl mb-2">{service.title}</h4>
                        <p className="text-sm md:text-base font-medium opacity-80">{service.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-myblack border-4 border-accentColor p-6 md:p-8">
            <h3 className="font-guzan text-3xl md:text-4xl text-accentColor text-center mb-6 md:mb-8">
              BY THE NUMBERS
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-accentColor border-2 border-myblack p-4 md:p-5 text-center">
                  <p className="font-guzan text-3xl md:text-4xl text-myblack">{stat.number}</p>
                  <p className="text-xs md:text-sm font-semibold text-myblack/80">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 md:mt-10 bg-white border-4 border-myblack p-6 md:p-8 text-center">
              <Rocket className="w-10 h-10 md:w-12 md:h-12 text-myblack mx-auto mb-3" />
              <h4 className="font-guzan text-3xl md:text-4xl text-myblack mb-2">READY TO START?</h4>
              <p className="text-myblack/80 font-medium text-sm md:text-base mb-5">
                Let&apos;s build something amazing together with strategy, design, and performance.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accentColor text-myblack border-4 border-myblack px-6 py-3 font-bold hover:shadow-[4px_4px_0px_rgba(18,18,18,1)] transition"
              >
                GET STARTED <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
