import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import person from '../Assets/Images/avatar.jpg'

export default function Testimonials() {
	return (
		<div>
			<NavBar />
			<div className=' flex flex-col px-4 text-white bg-grey pt-12'>
				<header className=' flex justify-center flex-col'>
					{' '}
					<h1 className='flex justify-center text-2xl font-bold pb-4'>
						Testimonials
					</h1>
					<p className='flex justify-center'>
						It is our pleasure to present these success stories and testimonials
						from some of our clients.
					</p>
				</header>
				<section className='w-full'>
					<div className='flex flex-col md:flex-row w-full md:gap-12 justify-center'>
						<article className='md:w-96 my-4 '>
							<p className=''>
								Quote icon "You guys did such a great job. My score is over 700
								now and I so happy with how it all turned out. You all have
								impressed me from the beginning and I can't thank you enough for
								all the help, especially John, he's really been great. I would
								be happy to refer someone to The Credit People, you've done a
								great job."
							</p>

							<div className='flex flex-row  mt-8'>
								<img
									src={person}
									alt='person'
									className='h-16 rounded-full'></img>
								<h1 className='pl-4 pt-5 font-bold'>John Doe</h1>
							</div>
						</article>
						<article className='md:w-96 my-4 '>
							<p className=''>
								Quote icon "You guys did such a great job. My score is over 700
								now and I so happy with how it all turned out. You all have
								impressed me from the beginning and I can't thank you enough for
								all the help, especially John, he's really been great. I would
								be happy to refer someone to The Credit People, you've done a
								great job."
							</p>

							<div className='flex flex-row  mt-8'>
								<img
									src={person}
									alt='person'
									className='h-16 rounded-full'></img>
								<h1 className='pl-4 pt-5 font-bold'>John Doe</h1>
							</div>
						</article>
					</div>
				</section>
			</div>
			{/* <Footer /> */}
		</div>
	)
}
