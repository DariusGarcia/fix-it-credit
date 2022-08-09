import React, { useState } from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import logo from '../Assets/Images/black-logo.png'
import MessageBtn from '../Components/MessageBtn'

import { useSpring, animated, config } from 'react-spring'

const Landing = () => {
	return (
		<div>
			<NavBar />
			<div className='relative flex flex-col pt-8 md:pt-32 md:pb-56 w-full md:h-full bg-curve-bg'>
				<section className='md:px-4 flex md:flex-row justify-center lg:gap-4 flex-col items-center'>
					<article
						className='flex flex-col lg:w-1/3 justify-center
					 mb-12 order-last md:order-first bg-gradient-to-r from-gradBlue to-gradBlue2 md:mb-0 px-2 py-12 md:py-4 md:p-4 shadow-xl md:rounded-xl '>
						<header className=''>
							<h1 className='flex pl-2 justify-start md:justify-center gap-2 flex-row text-white text-4xl font-semibold font-Inter'>
								{Text1()}
								<span className='italic'>{Text2()}</span>
							</h1>
							<p className='py-8 px-2 text-white text-start'>
								Fix it Credit is a branch of USA Credit Council Inc which has
								been in business and helping customers achieve financial freedom
								for over 15 years.
							</p>
							<p className='mb-16 px-2 text-white text-start'>
								Our main goal is to represent you, the customer, and team up
								with you to help fight creditors and the credit bureaus who
								control how and when you get approved or denied for any credit.
							</p>
						</header>
						<span className='flex justify-center mb-8  w-full'>
							{' '}
							<Link to='/about'>
								<a
									href='/about'
									className=' bg-greybtn p-4 px-24 mb-6 rounded-md text-xl font-black font-DMSans tracking-widest hover:bg-nerdBlue hover:border-2 border-gradBlue hover:text-black shadow-md hover:shadow-lg hover:scale-110 outline-grey transition ease-in-out delay-10'>
									Learn More
								</a>
							</Link>
						</span>
						<h3 className='my-6 text-white font-Roboto '>
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
function Text1() {
	const [flip, set] = useState(false)
	const props = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		reset: false,
		reverse: false,
		delay: 600,
		config: config.molasses,
		onRest: () => set(!flip),
	})

	return <animated.h1 style={props}>Better credit,</animated.h1>
}
function Text2() {
	const [flip, set] = useState(false)
	const props = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		reset: false,
		reverse: false,
		delay: 1300,
		config: config.molasses,
		onRest: () => set(!flip),
	})

	return <animated.h1 style={props}>easier.</animated.h1>
}

export default Landing
