import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import MessageBtn from '../Components/MessageBtn'
import { GiConvergenceTarget } from 'react-icons/gi'
import { FaWrench } from 'react-icons/fa'
import bg from '../Assets/Images/smooth.jpg'

export default function About() {
	return (
		<div className='bg-curve-bg '>
			<NavBar />
			<div className='flex justify-around items-center rounded-xl flex-col md:mt-12 h-full '>
				<section className='flex justify-center h-full'>
					<article className=''>
						<h1 className='text-4xl mt-8 md:mt-0  text-grey font-black font-oswald'>
							WHO WE ARE
						</h1>
					</article>
				</section>
				<section className='flex justify-center w-full h-full py-12 md:py-48  md:w-5/6 rounded-lg shadow-xl px-4 my-12 text-xl gap-10 flex-col md:flex-row items-start bg-zinc'>
					<article className='flex flex-col items-center md:w-1/2 gap-4 text-grey '>
						<span className='mr-2'>
							<FaWrench size={80}></FaWrench>
						</span>
						<span className='flex ml-2 flex-col'>
							<p className='w-full font-black text-2xl my-4 '>Who we are:</p>
							<p className='w-full'>
								Fix it Credit is a branch of USA Credit Council Inc which has
								been in business and helping customers achieve financial freedom
								for over 15 years. Our main goal is to represent you, the
								customer, and team up with you to help fight creditors and the
								credit bureaus who control how and when you get approved or
								denied for any credit.
							</p>
						</span>
					</article>
					<article className='flex flex-col items-center md:w-1/2 gap-4 text-grey '>
						<span className=''>
							<GiConvergenceTarget size={80}></GiConvergenceTarget>
						</span>
						<span className='flex ml-2 flex-col'>
							<p className='flex  font-black text-2xl my-4'>Our purpose:</p>
							<p className='flex '>
								We believe in fresh starts and that's what we're in business to
								help our customers do. You don't have to have bad credit to come
								see us. You can have average credit but want good credit. You
								can have good credit but want great credit. We can help you no
								matter what level your credit score is at.
							</p>
						</span>
					</article>
				</section>
			</div>
			<MessageBtn />
			<Footer />
		</div>
	)
}
