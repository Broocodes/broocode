import React from 'react'
import { Blogs } from '../Data'
import Link from 'next/link'
import Image from 'next/image';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { ArrowLeft } from 'lucide-react';

export default async function Page({
	params,
  }: {
	params: Promise<{ slug: string }>
  }): Promise<React.ReactElement> {
  
	const { slug } = await params;
  
	const blog = Blogs.filter((blog) => blog._id === slug);
  
	if (!blog || blog.length === 0) {
		return (
			<div className="min-h-screen bg-myblack text-white flex items-center justify-center">
				<div className="text-center">
					<h1 className="text-4xl font-guzan font-bold text-accentColor mb-4">Blog Not Found</h1>
					<Link href="/blogs">
						<button className="bg-accentColor border-4 border-myblack text-myblack px-6 py-3 font-bold font-inter hover:shadow-[4px_4px_0px_0px_rgba(18,18,18,1)] transition-all">
							Back to Blogs
						</button>
					</Link>
				</div>
			</div>
		)
	}

	return (
		<article className="min-h-screen bg-myblack text-white py-8 md:py-12 lg:py-16">
			<ScrollProgress className="top-[0px]" />
			<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
				{/* Back Button */}
				<Link href="/blogs" className="mb-6 md:mb-8 inline-flex items-center gap-2">
					<button className="flex items-center gap-2 bg-accentColor border-4 border-myblack text-myblack px-4 md:px-6 py-2 md:py-3 font-bold font-inter hover:shadow-[4px_4px_0px_0px_rgba(18,18,18,1)] transition-all">
						<ArrowLeft className="w-5 h-5" />
						<span>Back to Blogs</span>
					</button>
				</Link>

				{/* Blog Header */}
				<div className="bg-accentColor border-4 md:border-8 border-myblack p-6 md:p-8 lg:p-10 shadow-[8px_8px_0px_0px_rgba(18,18,18,1)] mb-6 md:mb-8">
					<h1 className='font-guzan text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-myblack mb-4 md:mb-6 leading-tight'>
						{blog[0].title}
					</h1>
					<div className="flex flex-wrap items-center gap-3 md:gap-4 text-sm md:text-base font-inter font-semibold text-myblack">
						<span className="bg-myblack border-2 border-accentColor px-3 md:px-4 py-1 md:py-2 text-accentColor">
							{blog[0].owner}
						</span>
						<span>{new Date(blog[0].created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
						<span>5 min read</span>
						{blog[0].category.map((cat) => (
							<span key={cat} className="bg-myblack border-2 border-accentColor px-3 md:px-4 py-1 md:py-2 text-accentColor">
								{cat}
							</span>
						))}
					</div>
				</div>

				{/* Cover Image */}
				<div className="bg-white border-4 md:border-8 border-myblack mb-6 md:mb-8 shadow-[4px_4px_0px_0px_rgba(18,18,18,1)] md:shadow-[8px_8px_0px_0px_rgba(18,18,18,1)] overflow-hidden">
					<Image
						src={blog[0].coverImage.url}
						alt={blog[0].title}
						width={1000}
						height={600}
						className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
					/>
				</div>

				{/* Blog Content */}
				<div className="bg-white border-4 md:border-8 border-myblack p-6 md:p-8 lg:p-10 shadow-[8px_8px_0px_0px_rgba(18,18,18,1)]">
					<div
						dangerouslySetInnerHTML={{ __html: blog[0].content }}
						className="text-pretty font-inter w-full text-myblack prose prose-lg md:prose-xl max-w-none
							prose-headings:font-guzan prose-headings:font-bold prose-headings:text-myblack
							prose-h1:text-3xl md:prose-h1:text-4xl lg:prose-h1:text-5xl prose-h1:mb-4 md:prose-h1:mb-6
							prose-h2:text-2xl md:prose-h2:text-3xl lg:prose-h2:text-4xl prose-h2:mb-3 md:prose-h2:mb-4
							prose-h3:text-xl md:prose-h3:text-2xl lg:prose-h3:text-3xl prose-h3:mb-2 md:prose-h3:mb-3
							prose-h4:text-lg md:prose-h4:text-xl lg:prose-h4:text-2xl prose-h4:mb-2 md:prose-h4:mb-3
							prose-p:text-base md:prose-p:text-lg prose-p:mb-4 md:prose-p:mb-6 prose-p:leading-relaxed
							prose-ul:text-base md:prose-ul:text-lg prose-ul:mb-4 md:prose-ul:mb-6
							prose-li:text-base md:prose-li:text-lg prose-li:mb-2
							prose-strong:text-myblack prose-strong:font-bold
							prose-a:text-accentColor prose-a:font-semibold prose-a:underline"
					/>
				</div>
			</div>
		</article>
	)
}
