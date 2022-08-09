import React, { useState } from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Spline from '@splinetool/react-spline'
import { FaClipboardList } from 'react-icons/fa'
import { useSpring, animated, config } from 'react-spring'

const Tips = () => {
	return (
		<div className='bg-zinc'>
			<NavBar />
			<div className='flex flex-col items-center justify-center h-full mb-12 text-grey mt-8'>
				<header className='flex flex-col justify-start items-start md:w-3/5 p-2 md:p-0 mb-8'>
					<div className='flex flex-row items-center gap-4'>
						<h1 className='md:text-6xl text-4xl font-black font-oswald'>
							{Text1()}
						</h1>
						<span className=''>
							<FaClipboardList size={45}></FaClipboardList>
						</span>
					</div>
					<p className='flex justify-start text-lg md:text-2xl text-start items-center pl-1 md:pl-0 mt-2'>
						{Text2()}
					</p>
				</header>
				<span className='flex justify-center h-96 w-full md:w-3/5 mb-12'>
					<Spline
						className='md:rounded-lg '
						scene='https://prod.spline.design/7w03NsxuGeMS815p/scene.splinecode'
					/>
				</span>
				<section className='flex flex-col justify-center md:items-center items-start'>
					<span className='flex flex-row justify-start items-center h-max  md:w-3/5'>
						<h3 className='mb-4 text-4xl font-oswald font-black pl-2 md:pl-0'>
							Tips
						</h3>
					</span>
					<div className='flex flex-col md:grid md:grid-cols-2 gap-4 text-grey md:mb-24 mb-12 p-2 md:p-0 md:w-3/5'>
						<article className='p-2 justify-center bg-white border-2 border-white  hover:bg-nerdBlue hover:border-2 hover:border-gradBlue shadow-xl rounded-lg'>
							<h3 className='font-black mb-2 border-b-2 border-grey w-max'>
								Tip 1:
							</h3>
							<p className=''>
								{' '}
								Having revolving credit is very important to help your FICO
								score. You should have at least a couple of credit cards and
								keep their balances below 20% of your total credit limit at all
								times. This is very important and can impact your score
								dramatically if you get close to maxing out your cards.
							</p>
						</article>
						<article className='flex flex-col p-2 justify-center shadow-xl bg-white border-2 border-white  hover:bg-nerdBlue hover:border-2 hover:border-gradBlue rounded-lg'>
							<h3 className='font-black mb-2 border-b-2 border-grey w-max'>
								Tip 2:
							</h3>
							<p className=''>
								{' '}
								NEVER be more than 30 days late on any payment due whether it's
								a car payment, loan, mortgage, or department store credit card.
								If you know that you won't be able to pay a bill within 30 days,
								call the creditor BEFORE the 30 days is up and try to arrange a
								payment plan with them so that the late payment doesn't show on
								your credit report. A late payment, or collection on your credit
								report can have a very negative impact on your FICO score.
							</p>
						</article>
						<article className='flex flex-col p-2 justify-start h-full shadow-xl bg-white border-2 border-white hover:bg-nerdBlue hover:border-2 hover:border-gradBlue  rounded-lg'>
							<h3 className='font-black mb-2 border-b-2 border-grey w-max'>
								Tip 3:
							</h3>
							<p className=''>
								{' '}
								Don't run your credit too often. Too many inquiries can have a
								negative impact on your credit score. It's important that you
								know what your credit score is, and what's on your report so
								that you have a better idea of what your chances are of being
								approved.
							</p>
						</article>
						<article className='flex flex-col  p-2 justify-center shadow-xl bg-white border-2 border-white hover:bg-nerdBlue hover:border-2 hover:border-gradBlue  rounded-lg'>
							<h3 className='font-black mb-2 border-b-2 border-grey w-max'>
								Tip 4:
							</h3>
							<p className=''>
								{' '}
								Sign up for Experian.com. You can monitor your credit at any
								time and see what your progress is when attempting to keep or
								achieve a healthy credit score. There's a small monthly fee for
								the website, but it's totally worth it so you can have peace of
								mind with regards to your credit, which is a major piece of your
								financial profile.
							</p>
						</article>
					</div>
				</section>
			</div>
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
		delay: 200,
		config: config.molasses,
		onRest: () => set(!flip),
	})

	return <animated.h1 style={props}>Credit Tips</animated.h1>
}
function Text2() {
	const [flip, set] = useState(false)
	const props = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		reset: false,
		reverse: false,
		delay: 800,
		config: config.molasses,
		onRest: () => set(!flip),
	})

	return (
		<animated.h1 style={props}>
			Here are some credit tips to keep your credit score in check.
		</animated.h1>
	)
}

export default Tips
