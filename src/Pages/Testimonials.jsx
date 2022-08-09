import React, { useState } from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import person from '../Assets/Images/avatar.jpg'
import MessageBtn from '../Components/MessageBtn'
import { MdFactCheck, MdLibraryAddCheck } from 'react-icons/md'
import { ImQuotesLeft } from 'react-icons/im'
import { useSpring, animated, config } from 'react-spring'

import curve from '../Assets/Images/smooth.jpg'

export default function Testimonials() {
	return (
		<div>
			<NavBar />
			<div className='md:h-full flex flex-col px-4 justify-center text-neutral bg-curve-bg pt-4'>
				<header className='flex justify-center items-center flex-col text-slate w-full mb-4 md:mb-8 rounded-lg '>
					{' '}
					<span className='flex md:justify-center flex-col md:w-3/5 items-center text-grey'>
						<span className='flex flex-row text-center items-end gap-2'>
							<h1 className='flex md:text-6xl text-4xl font-black font-oswald  '>
								{Text1()}
							</h1>
							<MdFactCheck size='40'></MdFactCheck>
						</span>

						<p className='flex md:justify-center text-center w-full  md:w-3/5 text-lg mt-4 md:mt-6 font-Roboto'>
							{Text2()}
						</p>
					</span>
				</header>
				<section className='w-full flex justify-center mt-4 mb-16'>
					<div className='flex flex-row flex-wrap place-items-center md:w-full lg:w-5/6 items-start gap-4 md:gap-10 text-grey content-center justify-center relative'>
						<article className='md:w-96 ml-0 md:mt-0 bg-white rounded-xl p-2 md:p-2 shadow-xl border-2 border-white hover:bg-nerdBlue hover:border-2 hover:border-gradBlue'>
							<div className='flex flex-row text-start '>
								<span className='mr-2 text-gradBlue2'>
									<ImQuotesLeft size={25}></ImQuotesLeft>
								</span>
								<p className=''>
									Quote icon "You guys did such a great job. My score is over
									700 now and I so happy with how it all turned out. You all
									have impressed me from the beginning and I can't thank you
									enough for all the help, especially John, he's really been
									great. I would be happy to refer someone to The Credit People,
									you've done a great job."
								</p>
							</div>
							<div className='flex flex-row  mt-8'>
								<img
									src={person}
									alt='person'
									className='h-16 rounded-full'></img>
								<h1 className='ml-4 pt-5 font-bold '>John Doe</h1>
							</div>
						</article>
						<article className='md:w-96 bg-white rounded-xl p-2 shadow-xl border-2 border-white hover:bg-nerdBlue hover:border-2 hover:border-gradBlue'>
							<div className='flex flex-row text-start '>
								<span className='mr-2 text-gradBlue2'>
									<ImQuotesLeft size={25}></ImQuotesLeft>
								</span>
								<p className=''>
									Quote icon "You guys did such a great job. My score is over
									700 now and I so happy with how it all turned out. You all
									have impressed me from the beginning you've done a great job."
								</p>
							</div>

							<div className='flex flex-row  mt-8'>
								<img
									src={person}
									alt='person'
									className='h-16 rounded-full'></img>
								<h1 className='pl-4 pt-5 font-bold'>John Doe</h1>
							</div>
						</article>
						<article className='md:w-96 bg-white rounded-xl p-2 shadow-xl border-2 border-white hover:bg-nerdBlue hover:border-2 hover:border-gradBlue'>
							<div className='flex flex-row text-start '>
								<span className='mr-2 text-gradBlue2'>
									<ImQuotesLeft size={25}></ImQuotesLeft>
								</span>
								<p className=''>
									Quote icon "You guys did such a great job. My score is over
									700 now and I so happy with how it all turned out. You all
									have impressed me from the beginning and I can't thank you
									enough for all the help, especially John, he's really been
									great. I would be happy to great job."
								</p>
							</div>

							<div className='flex flex-row  mt-8'>
								<img
									src={person}
									alt='person'
									className='h-16 rounded-full'></img>
								<h1 className='pl-4 pt-5 font-bold'>John Doe</h1>
							</div>
						</article>
						<article className='md:w-96 bg-white rounded-xl p-2 shadow-xl border-2 border-white hover:bg-nerdBlue hover:border-2 hover:border-gradBlue'>
							<div className='flex flex-row text-start '>
								<span className='mr-2 text-gradBlue2'>
									<ImQuotesLeft size={25}></ImQuotesLeft>
								</span>
								<p className=''>
									Quote icon "You guys did such a great job. My score is over
									700 now and I so happy with how it all turned out. You all
									have impressed me froe a great job."
								</p>
							</div>

							<div className='flex flex-row  mt-8'>
								<img
									src={person}
									alt='person'
									className='h-16 rounded-full'></img>
								<h1 className='pl-4 pt-5 font-bold'>John Doe</h1>
							</div>
						</article>
						<article className='md:w-96 bg-white rounded-xl p-2 shadow-xl border-2 border-white hover:bg-nerdBlue hover:border-2 hover:border-gradBlue'>
							<div className='flex flex-row text-start '>
								<span className='mr-2 text-gradBlue2'>
									<ImQuotesLeft size={25}></ImQuotesLeft>
								</span>
								<p className=''>
									Quote icon "You guys did such a great job. My score is over
									700 now and I soally been great. I would be happy to refer
									someone to The Credit People, you've done a great job."
								</p>
							</div>

							<div className='flex flex-row  mt-8'>
								<img
									src={person}
									alt='person'
									className='h-16 rounded-full'></img>
								<h1 className='pl-4 pt-5 font-bold'>John Doe</h1>
							</div>
						</article>
						<article className='md:w-96 bg-white rounded-xl p-2 shadow-xl border-2 border-white hover:bg-nerdBlue hover:border-2 hover:border-gradBlue'>
							<div className='flex flex-row text-start '>
								<span className='mr-2 text-gradBlue2'>
									<ImQuotesLeft size={25}></ImQuotesLeft>
								</span>
								<p className=''>
									Quote icon "You guys did such a great job. My score is over
									700 now and I so happy with how it all turned out. You all
									have impressed me from the beginning and I can't thank you
									enough for all the help, especially John, he's rea happy with
									how it all turned out. all the help, especially John, he's
									really been great. I would be happy to refer someone to The
									Credit People, you've done a great job."
								</p>
							</div>

							<div className='flex flex-row  mt-8'>
								<img
									src={person}
									alt='person'
									className='h-16 rounded-full'></img>
								<h1 className='pl-4 pt-5 font-bold'>John Doe</h1>
							</div>
						</article>
						<article className='md:w-96 bg-white rounded-xl p-2 shadow-xl border-2 border-white hover:bg-nerdBlue hover:border-2 hover:border-gradBlue'>
							<div className='flex flex-row text-start '>
								<span className='mr-2 text-gradBlue2'>
									<ImQuotesLeft size={25}></ImQuotesLeft>
								</span>
								<p className=''>
									Quote icon "You guys did such a great job. My score is over
									700 now and I so happy with how it all turned out. You all
									have
								</p>
							</div>

							<div className='flex flex-row  mt-8'>
								<img
									src={person}
									alt='person'
									className='h-16 rounded-full'></img>
								<h1 className='pl-4 pt-5 font-bold'>John Doe</h1>
							</div>
						</article>
						<article className='md:w-96 bg-white rounded-xl p-2 shadow-xl border-2 border-white hover:bg-nerdBlue hover:border-2 hover:border-gradBlue'>
							<div className='flex flex-row text-start '>
								<span className='mr-2 text-gradBlue2'>
									<ImQuotesLeft size={25}></ImQuotesLeft>
								</span>
								<p className=''>
									"You guys did such a great job. My score is over 700 now and I
									so happy with how it all turned out. You all have impressed me
									from the beginning and I can't thank you enough for all the
									help, especially John, he's rea happy with how it all turned
									out. Quote icon "You guys did such a great job. My score is
									over 700 now and I so happy with how it all turned out. You
									all have
								</p>
							</div>

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

	return <animated.h1 style={props}>Testimonials</animated.h1>
}
function Text2() {
	const [flip, set] = useState(false)
	const props = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		reset: false,
		reverse: false,
		delay: 400,
		config: config.molasses,
		onRest: () => set(!flip),
	})

	return (
		<animated.h1 style={props}>
			It is our pleasure to present these success stories and testimonials from
			some of our clients.
		</animated.h1>
	)
}
