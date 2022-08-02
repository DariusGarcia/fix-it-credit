import React from 'react'
import blue from '../Assets/Images/blue-logo.png'
import { MdPhoneIphone, MdEmail } from 'react-icons/md'
const Footer = () => {
	return (
		<div className=' flex justify-evenly w-full relative bottom-0 h-56 md:h-64 md:p-4 text-xs md:text-base bg-primary text-white'>
			<div className='flex flex-row text-center justify-between  w-full py-8 md:p-4'>
				<section className='pl-2'>
					<article className='text-start'>
						{' '}
						<h1 className='text-xl pb-0 border-b-2 border-black mb-2'>
							Contact Us
						</h1>
						<span className='flex md:flex-row gap-1 pb-2 text-center'>
							<MdEmail size={20}></MdEmail>
							<p>info@fixitcredit.com</p>
						</span>
						<span className='flex md:flex-row gap-1 text-start'>
							<MdPhoneIphone size={20}></MdPhoneIphone>
							<p>(xxx) xxx - 0000</p>
						</span>
					</article>
				</section>
				<section className='w-1/4 md:w-max'>
					<article className='text-start pr-2'>
						<h1>©2022 Fix It Credit</h1>
						<img
							className='mt-6 md:h-24 rounded-md'
							src={blue}
							alt='logo'></img>
					</article>
				</section>
			</div>
		</div>
	)
}

export default Footer
