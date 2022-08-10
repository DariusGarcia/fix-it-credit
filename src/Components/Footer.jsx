import React from 'react'
import black from '../Assets/Images/black-logo.png'
import { MdPhoneIphone, MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<div className='z-50'>
			<div className=' flex justify-evenly flex-row md:flex-col w-full relative bottom-0 h-full md:p-4 text-xs md:text-base bg-primary text-white'>
				<div className='flex flex-col md:flex-row text-center  items-center md:justify-evenly w-full py-8 md:p-4 '>
					<section className='md:w-max mb-6 md:mb-0'>
						<article className='flex flex-col items-center'>
							<img
								className='h-12 md:h-48 rounded-md'
								src={black}
								alt='logo'></img>
						</article>
					</section>
					<section className=''>
						<article className='mb-6'>
							<h3 className='text-2xl border-b-2 border-grey2 mb-4'>
								Navigation
							</h3>
							<div className='flex flex-col align-center justify-center'>
								<ul className='flex flex-col  spacing-widest align-center md:text-lg justify-center gap-3 md:gap-5 cursor-pointer  text-white'>
									<li className='ease-in-out'>
										<Link to='/'>HOME</Link>
									</li>
									<li className='ease-in-out'>
										<Link to='/about'>ABOUT</Link>
									</li>
									<li className='ease-in-out'>
										<Link to='/testimonials'>TESTIMONIALS</Link>
									</li>
									<li className='ease-in-out'>
										<Link to='/credit-tips'>CREDIT TIPS</Link>
									</li>
									<li className='ease-in-out'>
										<Link to='/contact'>CONTACT</Link>
									</li>
								</ul>
							</div>
						</article>
					</section>
					<section className='pl-2 '>
						<article className='text-center flex flex-col items-center md:items-start  '>
							{' '}
							<h3 className='text-2xl pb-0 border-b-2 border-grey2 w-max  mb-2'>
								Contact Us
							</h3>
							<span className='flex md:flex-row gap-1 pb-2 text-base text-center'>
								<MdEmail size={20}></MdEmail>
								<p>info@fixitcredit.com</p>
							</span>
							<span className='flex md:flex-row gap-1 text-base text-start'>
								<MdPhoneIphone size={20}></MdPhoneIphone>
								<p>(xxx) xxx - 0000</p>
							</span>
						</article>
					</section>
				</div>
			</div>
			<div className='flex justify-center bottom-0 bg-grey2 h-16 z-50'>
				<section className='flex flex-row justify-center items-center'>
					<h3 className=''>
						Copyright ©2022 Fix It Credit Inc. All right reserved.
					</h3>
					<p className=''></p>
				</section>
			</div>
		</div>
	)
}

export default Footer
