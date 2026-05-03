"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

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
    <section className="w-full bg-[#fafafa] border-y-8 border-myblack py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="bg-white border-4 md:border-8 border-myblack shadow-[8px_8px_0px_0px_rgba(18,18,18,1)] md:shadow-[12px_12px_0px_0px_rgba(18,18,18,1)] p-6 sm:p-7 md:p-10"
        >
          <div className="flex flex-col items-center text-center gap-6">
            <div className="max-w-3xl">
              <p className="inline-flex items-center text-xs sm:text-sm font-bold font-inter border-2 border-myblack bg-accentColor px-3 py-1.5">
                Agency Creative Direction
              </p>
              <h2 className="mt-4 font-guzan text-myblack text-3xl sm:text-4xl md:text-6xl leading-tight">
                Gen Z <span className="text-accentColor">vs</span> Professional Web Experiences
              </h2>
              <p className="mt-3 font-inter text-myblack/80 text-base sm:text-lg max-w-2xl mx-auto">
                We design both worlds. Select a style to preview how your brand can look and feel.
              </p>
            </div>

            <div className="flex items-center gap-2.5 p-2 w-fit bg-myblack border-4 border-myblack shadow-[4px_4px_0px_0px_rgba(18,18,18,0.35)]">
              {MODES.map((mode) => (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => setActiveMode(mode.id)}
                  className={`relative px-4 sm:px-5 py-2.5 border-4 font-inter font-bold text-xs sm:text-sm transition-all duration-200 ${
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
            <div className="lg:col-span-7">
              <div className="relative min-h-[420px] md:min-h-[500px] bg-myblack border-4 md:border-8 border-myblack overflow-hidden shadow-[6px_6px_0px_0px_rgba(18,18,18,0.8)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(162,242,62,0.18),transparent_42%),radial-gradient(circle_at_80%_78%,rgba(255,255,255,0.14),transparent_35%)]" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, scale: 0.96, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.94, y: -12 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="absolute inset-0 flex flex-col items-center justify-center"
                  >
                    <div className="absolute top-6 right-6 bg-accentColor text-myblack border-2 border-myblack px-3 py-1 font-bold text-xs md:text-sm">
                      {active.label} Mode
                    </div>
                    <Image
                      src={active.image}
                      alt={active.label}
                      width={520}
                      height={520}
                      priority
                      className="object-contain max-h-[72%] w-auto drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]"
                      sizes="(max-width: 1024px) 90vw, 520px"
                    />
                    <p className="font-guzan text-5xl md:text-7xl text-white/95 mt-2">{active.label}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35 }}
              className="lg:col-span-5 bg-accentColor border-4 md:border-8 border-myblack p-5 md:p-7 shadow-[6px_6px_0px_0px_rgba(18,18,18,0.85)] flex flex-col justify-between"
            >
              <div>
                <p className="text-xs sm:text-sm font-inter font-bold text-myblack/80">Selected Mode</p>
                <h3 className="mt-2 font-guzan text-2xl md:text-4xl text-myblack">{active.title}</h3>
                <p className="mt-3 font-inter text-sm sm:text-base text-myblack/90 leading-relaxed">{active.desc}</p>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="bg-white border-4 border-myblack px-3 py-2 shadow-[2px_2px_0px_0px_rgba(18,18,18,0.25)]">
                  <p className="font-inter text-xs text-myblack/70 font-semibold">Style</p>
                  <p className="font-inter text-sm font-bold text-myblack">{activeMode === "genz" ? "Dynamic" : "Elegant"}</p>
                </div>
                <div className="bg-white border-4 border-myblack px-3 py-2 shadow-[2px_2px_0px_0px_rgba(18,18,18,0.25)]">
                  <p className="font-inter text-xs text-myblack/70 font-semibold">Best For</p>
                  <p className="font-inter text-sm font-bold text-myblack">{activeMode === "genz" ? "D2C / Social" : "B2B / Premium"}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}