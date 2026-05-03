import Link from "next/link";
import { ArrowUpRight, ChartNoAxesCombined, CircleCheckBig, Sparkles } from "lucide-react";

const SERVICE_ITEMS = [
  "Performance Marketing",
  "Website Development",
  "Branding & Content",
  "SEO + GMB Setup",
  "App Development",
  "Lead Generation / PPC",
];

const METRICS = [
  { label: "Avg. Growth", value: "+127%" },
  { label: "Ad CTR", value: "2.4%" },
  { label: "ROAS", value: "4.2x" },
];

export default function GrowthEngineSection() {
  return (
    <section className="bg-[#fafafa] py-14 md:py-20 border-y-8 border-myblack">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="bg-white border-4 md:border-8 border-myblack shadow-[8px_8px_0px_0px_rgba(18,18,18,1)] md:shadow-[12px_12px_0px_0px_rgba(18,18,18,1)] p-6 md:p-10 lg:p-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-accentColor text-myblack border-2 border-myblack px-3 py-1.5 font-semibold text-sm">
                <Sparkles className="w-4 h-4" />
                Strategy x Creativity x Performance
              </div>

              <h2 className="font-guzan text-4xl sm:text-5xl lg:text-7xl leading-[0.95] text-myblack">
                We Build
                <span className="block text-accentColor">Growth Engines</span>
              </h2>

              <p className="text-myblack/80 text-base md:text-lg max-w-2xl font-medium">
                You need more than marketing. You need a growth partner that turns ideas into measurable business results.
                We design, build, and scale digital systems that keep compounding.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-accentColor text-myblack font-bold border-4 border-myblack px-5 py-3 hover:shadow-[4px_4px_0px_rgba(18,18,18,1)] transition"
                >
                  Start Growing <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/blogs"
                  className="inline-flex items-center gap-2 bg-myblack text-accentColor font-bold border-4 border-accentColor px-5 py-3 hover:bg-accentColor hover:text-myblack transition"
                >
                  View Our Work
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 grid gap-4">
              <div className="bg-accentColor border-4 border-myblack p-5">
                <div className="flex items-center gap-2 mb-2">
                  <ChartNoAxesCombined className="w-5 h-5 text-myblack" />
                  <span className="font-semibold text-myblack">Live Performance Snapshot</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {METRICS.map((metric) => (
                    <div key={metric.label} className="bg-white border-2 border-myblack px-3 py-2 text-center">
                      <p className="text-xl md:text-2xl font-guzan text-myblack">{metric.value}</p>
                      <p className="text-xs md:text-sm font-semibold text-myblack/70">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-myblack text-white border-4 border-accentColor p-5">
                <p className="font-guzan text-2xl md:text-3xl text-accentColor mb-3">Services Under One Roof</p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {SERVICE_ITEMS.map((item) => (
                    <div key={item} className="inline-flex items-start gap-2">
                      <CircleCheckBig className="w-4 h-4 mt-1 text-accentColor shrink-0" />
                      <span className="font-medium text-sm md:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
