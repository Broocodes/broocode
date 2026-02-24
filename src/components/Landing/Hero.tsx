import React from 'react'
import { Lightbulb } from 'lucide-react';
import Astro from '../svg/Astro';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
	

	return (
		<div
			style={{
				background: "url('/agency.jpeg')",
				backgroundPosition: "bottom",
				// backgroundSize: "cover",
				// backgroundRepeat: "no-repeat",
				// backgroundAttachment: 'scroll'
			}}
			className='relative overflow-hidden h-[80vh] bg-black bg-blend-multiply  flex flex-col bg-no-repeat bg-cover  justify-between items-center'>

			{/* Background video (public/broocode.mp4) */}
			<video
				src="/broocode.mp4"
				autoPlay
				muted
				loop
				playsInline
				className="absolute inset-0 w-full h-full object-cover z-0"
			/>
			{/* Overlay to darken video for readability */}
			{/* <div className="absolute inset-0 bg-black/45 z-10 pointer-events-none" /> */}

			<div className='w-full flex justify-evenly relative z-20'>
				<div></div>
				<div className='mt-6 md:mt-10 gap-x-3 md:gap-x-4 flex'>
					<Link 
						href={'/blogs'} 
						className='text-xs md:text-sm p-2 md:p-3 px-4 md:px-5 font-bold font-inter bg-accentColor text-myblack border-4 border-myblack flex gap-x-2 hover:shadow-[4px_4px_0px_0px_rgba(18,18,18,1)] transition-all items-center'
					> 
						Blogs
					</Link>

					<Link 
						href={'/contact'} 
						className='text-xs md:text-sm p-2 md:p-3 px-4 md:px-5 font-bold font-inter border-4 border-accentColor bg-myblack text-accentColor flex gap-x-2 hover:bg-accentColor hover:text-myblack hover:shadow-[4px_4px_0px_0px_rgba(162,242,62,1)] transition-all items-center'
					>  
						Get in Touch <Lightbulb size={18} />
					</Link>
				</div>
			</div>


			<div className='px-4 hidden relative z-20'>
				<h1 className='hidden text-5xl md:text-8xl lg:text-9xl mt-2 font-guzan md:flex items-center text-transparent font-bold tracking-tight'>Br
					<Image src='/infinity.png' className='mr-1' width={180} height={180} alt='infi' />
					Code</h1>
				<Image src='/logo.svg' className='md:hidden flex mx-auto' width={290} height={290} alt='logo' />
				<h1 className='text-white text-center font-guzan text-2xl md:text-4xl lg:text-5xl font-bold mt-2'>We Are Digital Agency</h1>
			</div>
			<div className="relative z-20">
				<Astro />
			</div>
		</div>
	)
}

