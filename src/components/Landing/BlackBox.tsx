import React from 'react'

export default function BlackBox() {
  return (
	<div className='h-[60vh] md:h-screen bg-accentColor border-8 md:border-[16px] border-myblack my-8 md:my-12 lg:my-16 shadow-[12px_12px_0px_0px_rgba(18,18,18,1)] md:shadow-[16px_16px_0px_0px_rgba(18,18,18,1)]'>
		<div className='h-full flex items-center justify-center p-8 md:p-16'>
			<h2 className='text-4xl md:text-6xl lg:text-8xl font-guzan font-bold text-myblack text-center'>
				YOUR VISION,<br />OUR EXPERTISE
			</h2>
		</div>
	</div>
  )
}
