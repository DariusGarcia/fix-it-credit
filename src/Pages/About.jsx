import React, { useState } from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import MessageBtn from '../Components/MessageBtn'
import { GiConvergenceTarget } from 'react-icons/gi'
import { FaWrench } from 'react-icons/fa'
import { useSpring, animated, config } from 'react-spring'

export default function About() {
	return (
		<div className='bg-curve-bg '>
			<NavBar />
			<div className='flex justify-around items-center rounded-xl flex-col md:mt-12 h-full '>
				<section className='flex justify-center h-full'>
					<article className=''>
						<h1 className='text-4xl mt-8 md:mt-0  text-grey font-black font-oswald'>
							{Text1()}
						</h1>
					</article>
				</section>
				<section className='flex justify-center w-full h-full py-12 md:py-48  md:w-5/6 rounded-lg shadow-xl px-4 my-12 text-xl gap-10 flex-col md:flex-row items-start bg-zinc'>
					<article className='flex flex-col items-center md:w-1/2 gap-4 text-grey '>
						<span className='mr-2'>
							<FaWrench size={80}></FaWrench>
						</span>
						<span className='flex ml-2 flex-col'>
							<p className='w-full font-black text-2xl my-4 '>{Text2()}</p>
							<p className='w-full'>{Text3()}</p>
						</span>
					</article>
					<article className='flex flex-col items-center md:w-1/2 gap-4 text-grey '>
						<span className=''>
							<GiConvergenceTarget size={80}></GiConvergenceTarget>
						</span>
						<span className='flex ml-2 flex-col'>
							<p className='flex  font-black text-2xl my-4'>{Text4()}</p>
							<p className='flex '>{Text5()}</p>
						</span>
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
		delay: 100,
		config: config.molasses,
		onRest: () => set(!flip),
	})

	return <animated.h1 style={props}>WHO WE ARE</animated.h1>
}
function Text2() {
	const [flip, set] = useState(false)
	const props = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		reset: false,
		reverse: false,
		delay: 300,
		config: config.molasses,
		onRest: () => set(!flip),
	})

	return <animated.h1 style={props}>Who we are:</animated.h1>
}
function Text3() {
	const [flip, set] = useState(false)
	const props = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		reset: false,
		reverse: false,
		delay: 500,
		config: config.molasses,
		onRest: () => set(!flip),
	})

	return (
		<animated.h1 style={props}>
			Fix it Credit is a branch of USA Credit Council Inc which has been in
			business and helping customers achieve financial freedom for over 15
			years. Our main goal is to represent you, the customer, and team up with
			you to help fight creditors and the credit bureaus who control how and
			when you get approved or denied for any credit.
		</animated.h1>
	)
}
function Text4() {
	const [flip, set] = useState(false)
	const props = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		reset: false,
		reverse: false,
		delay: 700,
		config: config.molasses,
		onRest: () => set(!flip),
	})

	return <animated.h1 style={props}>Our purpose:</animated.h1>
}
function Text5() {
	const [flip, set] = useState(false)
	const props = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		reset: false,
		reverse: false,
		delay: 900,
		config: config.molasses,
		onRest: () => set(!flip),
	})

	return (
		<animated.h1 style={props}>
			We believe in fresh starts and that's what we're in business to help our
			customers do. You don't have to have bad credit to come see us. You can
			have average credit but want good credit. You can have good credit but
			want great credit. We can help you no matter what level your credit score
			is at.
		</animated.h1>
	)
}
