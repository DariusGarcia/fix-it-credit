import React from 'react'
import * as Scroll from 'react-scroll'
import { Link } from 'react-router-dom'
import logo from '../Assets/Images/blue-logo.png'

let animateScroll = Scroll.animateScroll

export default function NavBar() {
	return (
		<>
			<nav className='flex sticky top-0 items-center justify-around md:justify-center h-28 w-full p-5 bg-neutral z-50 text-sm md:text-base rounded-b-xl'>
				<div className='flex flex-row justify-center text-center mr-3 md:mr-0 '>
					<ul className='flex items-end justify-center gap-2 place-content-end cursor-pointer text-grey3'>
						<li
							className='w-max md:inline-block md:mr-4  '
							onClick={() =>
								animateScroll.scrollToTop({
									duration: 400,
									delay: 50,
									smooth: true,
								})
							}>
							<Link to='/'>
								<img
									src={logo}
									className='h-8 md:h-20 rounded-xl '
									alt='logo'></img>
							</Link>
						</li>
					</ul>
				</div>

				<div className='flex flex-col align-center justify-center'>
					<ul className='flex flex-row font-semibold spacing-widest align-center md:text-lg justify-center gap-3 md:gap-5 cursor-pointer  text-grey'>
						<li className='border-b-2 border-neutral hover:border-b-2 hover:border-primary ease-in-out hover:text-primary active:text-primary'>
							<Link to='/'>HOME</Link>
						</li>
						<li className='border-b-2 border-neutral hover:border-b-2 hover:border-primary ease-in-out hover:text-primary active:text-primary'>
							<Link to='/about'>ABOUT</Link>
						</li>
						<li className='border-b-2 border-neutral hover:border-b-2 hover:border-primary ease-in-out hover:text-primary active:text-primary'>
							<Link to='/testimonials'>TESTIMONIALS</Link>
						</li>
						<li className='border-b-2 border-neutral hover:border-b-2 hover:border-primary ease-in-out hover:text-primary active:text-primary'>
							<Link to='/contact'>CONTACT</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	)
}
