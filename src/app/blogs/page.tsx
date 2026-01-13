"use client"
import { Search } from "lucide-react"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import TagsBox from "@/components/ui/Tags"
import { Blogs } from "./Data"
import { truncateText } from "@/lib/utils"
import { useRouter } from "next/navigation"

const filters = [
  { label: "All", count: 6 },
  { label: "Agency", count: 2 },
  { label: "Marketing", count: 2 },
  { label: "Strategy", count: 2 },
  { label: "Technology", count: 1 },
  { label: "Branding", count: 1 },
  { label: "Creative", count: 1 },
]

export default function BlogPage() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-myblack text-white py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <header className="mb-8 md:mb-12">
          <div className="bg-accentColor border-4 md:border-8 border-myblack p-6 md:p-8 lg:p-10 shadow-[8px_8px_0px_0px_rgba(18,18,18,1)] mb-6 md:mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-guzan font-bold text-myblack">
                BLOG
              </h1>
              <div className="relative w-full md:w-auto md:min-w-[300px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-myblack h-5 w-5 md:h-6 md:w-6" />
                <Input
                  placeholder="Search blogs..."
                  className="pl-10 md:pl-12 bg-white border-4 border-myblack text-myblack font-inter font-semibold h-12 md:h-14 w-full focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white border-4 md:border-8 border-myblack p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(18,18,18,1)] md:shadow-[8px_8px_0px_0px_rgba(18,18,18,1)]">
            <div className="text-sm md:text-base font-inter font-bold text-myblack mb-3 md:mb-4">FILTERS</div>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {filters.map((filter) => (
                <TagsBox 
                  key={filter.label} 
                  text={filter.label} 
                  disabled={false} 
                  speed={3} 
                  className="p-2 md:p-3 px-4 md:px-5 text-xs md:text-sm font-bold font-inter bg-accentColor border-4 border-myblack text-myblack hover:shadow-[4px_4px_0px_0px_rgba(18,18,18,1)] transition-all"
                />
              ))}
            </div>
          </div>
        </header>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {Blogs.map((blog) => (
            <div
              key={blog._id}
              onClick={() => router.push(`/blogs/${blog._id}`)}
              className="bg-white border-4 md:border-8 border-myblack overflow-hidden shadow-[4px_4px_0px_0px_rgba(18,18,18,1)] md:shadow-[8px_8px_0px_0px_rgba(18,18,18,1)] cursor-pointer hover:shadow-[8px_8px_0px_0px_rgba(162,242,62,1)] transition-all group"
            >
              <div className="relative">
                <Badge className="absolute top-4 left-4 z-10 bg-accentColor border-4 border-myblack text-myblack font-bold font-inter text-xs md:text-sm px-3 md:px-4 py-1 md:py-2">
                  LATEST
                </Badge>
                <div className="border-b-4 md:border-b-8 border-myblack">
                  <Image
                    src={blog.coverImage.url}
                    alt={blog.title}
                    width={600}
                    height={400}
                    className="w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                <h2
                  onClick={() => router.push(`/blogs/${blog._id}`)}
                  className="text-xl md:text-2xl lg:text-3xl font-guzan font-bold text-myblack hover:text-accentColor transition-colors line-clamp-2"
                >
                  {blog.title}
                </h2>
                <p className="text-gray-700 text-sm md:text-base font-inter font-medium line-clamp-3">
                  {truncateText(blog.description, 120)}
                </p>
                <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm font-inter font-semibold text-gray-600 pt-2 border-t-2 border-gray-300">
                  <span className="bg-accentColor border-2 border-myblack px-2 md:px-3 py-1 text-myblack">
                    {blog.owner}
                  </span>
                  <span>{new Date(blog.created_at).toLocaleDateString()}</span>
                  <span>5 min read</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
