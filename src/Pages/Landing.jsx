import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

import logo from '../Assets/Images/black-logo.png'
import MessageBtn from '../Components/MessageBtn'

import React from 'react'

const Landing = () => {
	return (
		<div>
			<NavBar />
			<div className='relative flex flex-col justify-center items-center md:h-full w-full bg-white md:pt-24 md:mb-48 .'>
				<section className='px-4 flex flex-col justify-center md:gap-16 md:flex-row'>
					<article className='flex flex-col order-last md:order-first justify-around md:min-w-96 md:w-1/2 lg:w-1/3 mb-16 md:mb-0 px-2 py-12 md:py-4 md:p-4 shadow-lg rounded-lg '>
						<header className=''>
							<h1 className='text-primary text-4xl font-semibold'>
								Better credit, easier.
							</h1>
							<p className='py-8'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur.
							</p>
						</header>
						<span className='flex justify-center'>
							{' '}
							<a
								href='/about'
								className=' bg-greybtn p-2 md:w-3/5 w-full mb-6 rounded-md text-xl font-semibold tracking-wider hover:bg-primary hover:text-white shadow-md hover:shadow-lg hover:scale-95 outline-grey transition ease-in-out delay-10'>
								Learn More
							</a>
						</span>
						<h3 className='mb-4 text-grey'>For inquiries or questions:</h3>
						<h3 className='text-grey text-2xl font-bold'>Call xxx-xxx-xxxx</h3>
					</article>
					<article className='flex justify-center'>
						<img className=' rounded-lg' src={logo} alt='section-logo'></img>
					</article>
				</section>
			</div>
			<MessageBtn />
			<Footer />
		</div>
	)
}

export default Landing
