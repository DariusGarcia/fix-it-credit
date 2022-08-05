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
			<div className='md:h-full flex flex-col px-4 justify-center text-neutral bg-curve-bg pt-4'>
				<header className='flex justify-center items-center flex-col text-slate w-full mb-8 rounded-lg '>
					{' '}
					<span className='flex md:justify-center flex-col w-3/5 items-center '>
						<span className='flex flex-row text-center gap-2 '>
							<h1 className='flex md:text-4xl text-2xl font-bold    '>
								Testimonials
							</h1>
							<MdFactCheck size='40'></MdFactCheck>
						</span>

						<p className='flex md:justify-center text-center  md:w-1/2 text-lg md:my-10'>
							It is our pleasure to present these success stories and
							testimonials from some of our clients.
						</p>
					</span>
				</header>
				<section className='w-full flex justify-center'>
					<div className='flex flex-row flex-wrap place-items-center md:w-5/6 items-start gap-4  text-grey content-center justify-center relative'>
						<article className='md:w-96 ml-0 my-4 bg-zinc rounded-xl p-2 md:p-2 shadow-xl'>
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
						<article className='md:w-96 my-4 bg-zinc rounded-xl p-2 shadow-xl'>
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
						<article className='md:w-96 my-4 bg-zinc rounded-xl p-2 shadow-xl'>
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
						<article className='md:w-96 my-4 bg-zinc rounded-xl p-2 shadow-xl'>
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
						<article className='md:w-96 my-4 bg-zinc rounded-xl p-2 shadow-xl'>
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
						<article className='md:w-96 my-4 bg-zinc rounded-xl p-2 shadow-xl'>
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
						<article className='md:w-96 my-4 bg-zinc rounded-xl p-2 shadow-xl'>
							<p className=''>
								Quote icon "You guys did such a great job. My score is over 700
								now and I so happy with how it all turned out. You all have
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
