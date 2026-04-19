"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Mode = "genz" | "pro";

const MODES: { id: Mode; label: string; title: string; desc: string; image: string }[] = [
  {
    id: "genz",
    label: "Gen Z",
    title: "High-Energy Experience",
    desc: "Playful visuals, motion-heavy UI, social-first storytelling, and viral interactions for bold brands.",
    image: "/cool.png",
  },
  {
    id: "pro",
    label: "Pro",
    title: "Premium Corporate Presence",
    desc: "Trust-first interface, polished hierarchy, conversion focus, and enterprise-ready structure.",
    image: "/cool2.png",
  },
];

export default function Charactertranform() {
  const [activeMode, setActiveMode] = useState<Mode>("genz");
  const active = useMemo(() => MODES.find((m) => m.id === activeMode) ?? MODES[0], [activeMode]);

  return (
    <section className="w-full bg-myblack border-t-8 border-b-8 border-accentColor py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="bg-white border-8 border-myblack rounded-3xl shadow-[6px_6px_0px_0px_rgba(162,242,62,0.9)] p-5 sm:p-7 md:p-10"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="inline-flex items-center text-xs sm:text-sm font-bold font-inter border-4 border-myblack bg-accentColor px-3 py-1.5 rounded-xl">
                Agency Creative Direction
              </p>
              <h2 className="mt-4 font-guzan text-myblack text-3xl sm:text-4xl md:text-5xl leading-tight">
                Gen Z <span className="text-accentColor">vs</span> Professional Web Experiences
              </h2>
              <p className="mt-3 font-inter text-myblack/80 text-base sm:text-lg">
                We design both worlds. Select a style to preview how your brand can look and feel.
              </p>
            </div>

            <div className="flex items-center gap-2.5 p-2 w-fit mx-auto md:mx-0 bg-myblack rounded-2xl border-4 border-myblack shadow-[3px_3px_0px_0px_rgba(18,18,18,0.28)]">
              {MODES.map((mode) => (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => setActiveMode(mode.id)}
                  className={`relative px-4 sm:px-5 py-2.5 rounded-xl border-4 font-inter font-bold text-xs sm:text-sm transition-all duration-200 ${
                    activeMode === mode.id
                      ? "bg-accentColor text-myblack border-accentColor"
                      : "bg-white text-myblack border-white hover:bg-accentColor/90"
                  }`}
                >
                  {mode.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35 }}
              className="lg:col-span-4 bg-accentColor border-8 border-myblack rounded-2xl p-5 md:p-6 shadow-[5px_5px_0px_0px_rgba(18,18,18,0.9)] flex flex-col justify-between"
            >
              <div>
                <p className="text-xs sm:text-sm font-inter font-bold text-myblack/80">Selected Mode</p>
                <h3 className="mt-2 font-guzan text-2xl md:text-3xl text-myblack">{active.title}</h3>
                <p className="mt-3 font-inter text-sm sm:text-base text-myblack/85 leading-relaxed">{active.desc}</p>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="bg-white border-4 border-myblack rounded-xl px-3 py-2 shadow-[2px_2px_0px_0px_rgba(18,18,18,0.25)]">
                  <p className="font-inter text-xs text-myblack/70 font-semibold">Style</p>
                  <p className="font-inter text-sm font-bold text-myblack">{activeMode === "genz" ? "Dynamic" : "Elegant"}</p>
                </div>
                <div className="bg-white border-4 border-myblack rounded-xl px-3 py-2 shadow-[2px_2px_0px_0px_rgba(18,18,18,0.25)]">
                  <p className="font-inter text-xs text-myblack/70 font-semibold">Best For</p>
                  <p className="font-inter text-sm font-bold text-myblack">{activeMode === "genz" ? "D2C / Social" : "B2B / Premium"}</p>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 h-full">
                {MODES.map((mode) => {
                  const selected = activeMode === mode.id;
                  return (
                    <motion.button
                      key={mode.id}
                      type="button"
                      onClick={() => setActiveMode(mode.id)}
                      whileHover={{ y: -4, scale: 1.008 }}
                      transition={{ type: "spring", stiffness: 250, damping: 20 }}
                      className={`group relative text-left rounded-2xl border-8 overflow-hidden transition-colors ${
                        selected
                          ? "border-accentColor shadow-[5px_5px_0px_0px_rgba(162,242,62,0.95)]"
                          : "border-myblack shadow-[4px_4px_0px_0px_rgba(18,18,18,0.65)]"
                      }`}
                    >
                      <div className="relative h-[320px] md:h-[380px] bg-gradient-to-b from-zinc-900 via-zinc-800 to-myblack">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(162,242,62,0.22),transparent_40%),radial-gradient(circle_at_80%_85%,rgba(255,255,255,0.14),transparent_35%)]" />
                        <Image
                          src={mode.image}
                          alt={mode.label}
                          fill
                          className={`object-contain object-bottom p-2 transition-all duration-300 ${
                            selected ? "scale-[1.03] opacity-100" : "opacity-88 group-hover:opacity-100"
                          }`}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className=" flex items-center justify-center pt-16">
                          <span className="inline-flex mt-10 items-center  px-2.5 py-1 text-7xl sm:text-8xl font-guzan text-white">
                            {mode.label}
                          </span>
                        </div>
                        
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}