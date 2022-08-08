import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import MessageBtn from '../Components/MessageBtn'
import { GiConvergenceTarget } from 'react-icons/gi'
import { FaWrench } from 'react-icons/fa'

export default function About() {
	return (
		<div className=''>
			<NavBar />
			<div className='flex justify-around flex-col md:mt-12 h-full '>
				<section className='flex justify-center h-full'>
					<article className=''>
						<h1 className='text-2xl  text-primary font-black font-oswald'>
							Why us?
						</h1>
					</article>
				</section>
				<section className='flex justify-center text-xl md:gap-24 flex-col md:flex-row items-center bg-zinc w-full h-72 my-24'>
					<article className='flex flex-row items-center md:w-1/2 text-black '>
						<span className='mr-2'>
							<FaWrench size={80}></FaWrench>
						</span>
						<span className='flex ml-2 flex-col'>
							<p className='w-full '>Who we are:</p>
							<p className='m:w-1/2'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
								enim velit, dignissim vel vehicula ut, pretium eget nisl. Donec
								rhoncus vel justo
							</p>
						</span>
					</article>
					<article className='flex flex-row items-center gap-6 text-white '>
						<span className=''>
							<GiConvergenceTarget size={80}></GiConvergenceTarget>
						</span>
						<p className='flex '>Our purpose</p>
					</article>
				</section>
			</div>
			<MessageBtn />
			<Footer />
		</div>
	)
}
