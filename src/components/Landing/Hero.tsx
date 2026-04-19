"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Lightbulb, Code2 } from "lucide-react";
import AwesomeButton from "./ButtonCircle";
import BigAwesomeButton from "./BigAwsome";

const HERO_TAGS = [
  "E-commerce",
  "Fintech",
  "Crypto",
  "Robotics",
  "Saas",
  "VCs",
  "Product Design",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 20, stiffness: 200 },
  },
};

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#fafafa] overflow-hidden flex flex-col">

      {/* Top CTA */}
      <div className="w-full flex justify-end md:justify-center pt-6 px-6">
        <div className="flex gap-3">
          <Link
            href="/blogs"
            className="text-sm px-4 py-2.5 font-bold bg-accentColor text-myblack border-4 border-myblack hover:shadow-[4px_4px_0px_rgba(18,18,18,1)] transition"
          >
            Blogs
          </Link>

          <Link
            href="/contact"
            className="text-sm px-4 py-2.5 font-bold border-4 border-accentColor bg-myblack text-accentColor hover:bg-accentColor hover:text-myblack hover:shadow-[4px_4px_0px_rgba(162,242,62,1)] flex items-center gap-2 transition"
          >
            Get in Touch <Lightbulb size={16} />
          </Link>
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container mx-auto  px-6 pt-10 pb-16 flex-1"
      >
        {/* Title */}
        <motion.div
          variants={item}
          className="text-center mb-0"
        >
          <h1 className="font-guzan font-bold leading-[1.05] mt-4 tracking-tight">

            <span className="block text-accentColor text-5xl md:text-7xl  lg:text-[5rem]">
              Development
            </span>

            <span className="flex justify-center items-center gap-3 text-6xl md:text-7xl lg:text-[5rem]">
              <Code2 className="w-10 h-10 md:w-12 md:h-12" strokeWidth={2.5} />
              Agency;
              {/* <span className="w-3 h-3 bg-myblack rounded-sm">;</span> */}
            </span>

          </h1>
        </motion.div>

        <Image
          src="/Bestdesign.png"
          alt="BrooCode"
          width={720}
          height={720}
          className="md:block absolute hidden top-0 left-0 w-32 h-32 md:w-80 md:h-80"
        />
        <Image
          src="/infinity.svg"
          alt="BrooCode"
          width={720}
          height={720}
          className="md:hidden absolute top-2 left-4 w-20 h-20 md:w-80 md:h-80"
        />

        <div className="   absolute md:block hidden  md:-top-28   md:-right-24">
          <BigAwesomeButton />
        </div>

        {/* 3 Column Layout */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">

          {/* LEFT TEXT */}
      
          <motion.div
            variants={item}
            className="lg:col-span-3 md:block hidden"
          >
            <div className="bg-white border-4 border-myblack p-6 rounded-xl shadow-[6px_6px_0px_rgba(18,18,18,1)]">

              <p className="font-inter text-lg leading-relaxed font-medium flex gap-3">
                {/* <span className="w-2 h-2 rounded-full bg-myblack mt-3"></span> */}
                We build digital products that work better, feel smoother, and keep users coming back. Simple ideas, strong development, and experiences people love.
              </p>

            </div>
          </motion.div>

          {/* CENTER IMAGE */}
          <motion.div
            variants={item}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="relative w-full max-w-xl h-[370px] md:h-[520px] rounded-2xl overflow-hidden ">

              <Image
                src="/3d.gif"
                alt="Development agency team"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 576px"
                unoptimized
                className="object-cover"
              />

            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            variants={item}
            className="lg:col-span-3 flex flex-col items-start lg:items-end gap-8"
          >

            {/* TAGS */}
            <div className="grid grid-cols-3 md:grid-cols-2 md:gap-x-10 gap-y-2 text-base font-semibold">
              {HERO_TAGS.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            {/* STATS */}
            <div className="flex items-center gap-4">

              <div className="relative w-16 h-16 rounded-lg overflow-hidden border-2 border-myblack">
                <Image
                  src="/studio.webp"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col">
                <span className="font-guzan font-bold text-3xl">30+</span>
                <span className="text-sm font-semibold opacity-70">
                  Projects Delivered
                </span>
              </div>

              <AwesomeButton />

            </div>

          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}