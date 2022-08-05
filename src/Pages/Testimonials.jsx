import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import person from '../Assets/Images/avatar.jpg'
import MessageBtn from '../Components/MessageBtn'
import { MdFactCheck, MdLibraryAddCheck } from 'react-icons/md'
import curve from '../Assets/Images/smooth.jpg'

export default function Testimonials() {
	return (
		<div>
			<NavBar />
			<div className='md:h-full flex flex-col px-4 text-neutral bg-curve-bg pt-4'>
				<header className=' flex justify-center flex-col text-grey mb-8  rounded-lg '>
					{' '}
					<span className='flex md:justify-center flex-col  mb-4 gap-2 items-center'>
						<h1 className='flex md:text-4xl text-2xl font-bold    '>
							Testimonials
						</h1>
						<MdFactCheck size='35'></MdFactCheck>

						<p className='flex md:justify-center text-center md:w-1/3 md:ml-36 pl-px text-lg '>
							It is our pleasure to present these success stories and
							testimonials from some of our clients.
						</p>
					</span>
				</header>
				<section className=''>
					<div className='place-items-center  flex flex-col md:grid md:grid-cols-2 text-grey content-center justify-center relative'>
						<article className='ml-0 my-4 bg-zinc rounded-xl p-2 md:p-2'>
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
								<h1 className='ml-4 pt-5 font-bold'>John Doe</h1>
							</div>
						</article>
						<article className='md:w-5/6 my-4 bg-zinc rounded-xl p-2'>
							<p className=''>
								Quote icon "You guys did such a great job. My score is over 700
								now and I so happy with how it all turned out. You all have
								impressed me from the beginning you've done a great job."
							</p>

							<div className='flex flex-row  mt-8'>
								<img
									src={person}
									alt='person'
									className='h-16 rounded-full'></img>
								<h1 className='pl-4 pt-5 font-bold'>John Doe</h1>
							</div>
						</article>
						<article className='md:w-96 my-4 bg-zinc rounded-xl p-2'>
							<p className=''>
								Quote icon "You guys did such a great job. My score is over 700
								now and I so happy with how it all turned out. You all have
								impressed me from the beginning and I can't thank you enough for
								all the help, especially John, he's really been great. I would
								be happy to great job."
							</p>

							<div className='flex flex-row  mt-8'>
								<img
									src={person}
									alt='person'
									className='h-16 rounded-full'></img>
								<h1 className='pl-4 pt-5 font-bold'>John Doe</h1>
							</div>
						</article>
						<article className='md:w-96 my-4 bg-zinc rounded-xl p-2'>
							<p className=''>
								Quote icon "You guys did such a great job. My score is over 700
								now and I so happy with how it all turned out. You all have
								impressed me froe a great job."
							</p>

							<div className='flex flex-row  mt-8'>
								<img
									src={person}
									alt='person'
									className='h-16 rounded-full'></img>
								<h1 className='pl-4 pt-5 font-bold'>John Doe</h1>
							</div>
						</article>
						<article className='md:w-96 my-4 bg-zinc rounded-xl p-2'>
							<p className=''>
								Quote icon "You guys did such a great job. My score is over 700
								now and I soally been great. I would be happy to refer someone
								to The Credit People, you've done a great job."
							</p>

							<div className='flex flex-row  mt-8'>
								<img
									src={person}
									alt='person'
									className='h-16 rounded-full'></img>
								<h1 className='pl-4 pt-5 font-bold'>John Doe</h1>
							</div>
						</article>
						<article className='md:w-96 my-4 bg-zinc rounded-xl p-2'>
							<p className=''>
								Quote icon "You guys did such a great job. My score is over 700
								now and I so happy with how it all turned out. You all have
								impressed me from the beginning and I can't thank you enough for
								all the help, especially John, he's rea happy with how it all
								turned out. You all have impressed me from the beginning and I
								can't thank you enough for all the help, especially John, he's
								relly been great. I would be happy to refer someone to The
								Credit People, you've done a great job."
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
			<MessageBtn />
			<Footer />
		</div>
	)
}
