"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Expand() {
  const [expanded, setExpanded] = useState("strategy");

  // Data for sections
  const sections = [
    {
      id: "strategy",
      title: "Strategy",
      content:
        "We're your strategic partner, deeply understanding your brand's essence with a dedicated product owner for each project, crafting personalized, data-informed strategies that put you ahead of the competition.",
    },
    {
      id: "creative",
      title: "Creative",
      content:
        "From wireframe to post-launch optimization, our designers are there every step of the way. We strive for a perfect balance between conversion and brand experience, all while prioritizing mobile-first design.",
    },
    {
      id: "technology",
      title: "Technology",
      content:
        "As Europe's leading Shopify Plus partner, we excel in scalable commerce solutions. Our expertise encompasses everything from custom themes using our Ask Phill starter, to advanced headless development and efficient no-code theme implementations.",
    },
  ];

  return (
	<div className="w-full p-4 md:p-8 lg:p-12 bg-accentColor border-t-8 border-b-8 border-myblack"> 
    <div className="max-w-6xl mx-auto space-y-4 md:space-y-6">
      {sections.map((section) => (
        <motion.div
          key={section.id}
          initial={{ height: "80px" }}
          animate={{
            height: expanded === section.id ? "auto" : "80px",
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            overflow: "hidden",
            background: expanded === section.id ? "#121212" : "#121212",
            color: expanded === section.id ? "#A2F23E" : "#A2F23E",
            border: "8px solid #A2F23E",
            boxShadow: expanded === section.id ? "8px 8px 0px 0px rgba(162,242,62,1)" : "4px 4px 0px 0px rgba(162,242,62,1)",
          }}
          onClick={() => setExpanded(section.id)}
		  className="flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer hover:shadow-[8px_8px_0px_0px_rgba(162,242,62,1)] transition-all"
        >
          <div className="p-4 md:p-6 lg:p-8 w-full">
            <h2 className="font-guzan text-3xl md:text-4xl lg:text-5xl font-bold mb-0 md:mb-0" style={{ margin: 0 }}>
              {section.title}
            </h2>
            {expanded === section.id && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 md:mt-6 md:w-[85%] lg:w-[75%] font-inter font-semibold text-base md:text-lg lg:text-xl leading-relaxed"
              >
                {section.content}
              </motion.p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
	</div>
  );
}
