import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

import logo from '../Assets/Images/black-logo.png'
import MessageBtn from '../Components/MessageBtn'

import React from 'react'

const Landing = () => {
	return (
		<div>
			<NavBar />
			<div className='relative flex flex-col  pt-8 md:py-40 w-full md:h-screen bg-curve-bg'>
				<section className='md:px-4 flex md:flex-row justify-center lg:gap-4 flex-col items-center'>
					<article
						className='flex flex-col lg:w-1/3 justify-center
					 mb-12  order-last md:order-first bg-gradient-to-r from-gradBlue to-gradBlue2 md:mb-0 px-2 py-12 md:py-4 md:p-4 shadow-lg rounded-lg '>
						<header className=''>
							<h1 className='text-white text-4xl font-semibold font-Inter'>
								Better credit, <span className='italic'>easier.</span>
							</h1>
							<p className='py-8 text-white'>
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
								className=' bg-greybtn p-2 md:w-3/5 w-full mb-6 rounded-md text-xl font-semibold font-Roboto tracking-wider hover:bg-primary hover:text-white shadow-md hover:shadow-lg hover:scale-95 outline-grey transition ease-in-out delay-10'>
								Learn More
							</a>
						</span>
						<h3 className='mb-4 text-white font-Roboto '>
							For inquiries or questions:
						</h3>
						<h3 className='text-2xl text-white font-Roboto'>
							Call xxx-xxx-xxxx
						</h3>
					</article>
					<article className='flex justify-center w-full mb-12 md:mb-0 lg:w-1/3'>
						<img
							className='rounded-lg w-full '
							src={logo}
							alt='section-logo'></img>
					</article>
				</section>
			</div>
			<MessageBtn />
			<Footer />
		</div>
	)
}

export default Landing
