import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

import logo from '../Assets/Images/blue-logo.png'

import React from 'react'

const Landing = () => {
	return (
		<div>
			<NavBar />
			<div className='relative flex flex-col justify-center items-center h-screen w-full bg-neutral'>
				<section className='px-4 flex flex-col justify-center md:gap-24 md:flex-row'>
					<article className='flex flex-col justify-around md:w-1/3 px-2 py-12 md:py-4 md:p-4 shadow-lg rounded-lg '>
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
						<a
							href='/about'
							className='bg-greybtn p-2 mb-6 rounded-md text-xl font-semibold tracking-wider hover:bg-primary hover:text-white shadow-md'>
							Learn More
						</a>
						<h3 className='mb-4 text-grey'>For inquiries or questions:</h3>
						<h3 className='text-grey text-2xl font-bold'>Call xxx-xxx-xxxx</h3>
					</article>
					<article className=''>
						<img
							className='w-96 rounded-lg'
							src={logo}
							alt='section-logo'></img>
					</article>
				</section>
			</div>
			<Footer />
		</div>
	)
}

export default Landing
