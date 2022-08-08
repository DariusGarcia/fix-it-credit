import React from 'react'
import * as Scroll from 'react-scroll'
import { Link } from 'react-router-dom'
import logo from '../Assets/Images/blue-logo.png'

let animateScroll = Scroll.animateScroll

export default function NavBar() {
	return (
		<>
			<nav className='flex sticky top-0 items-center justify-evenly md:justify-center h-28 w-full p-5 bg-neutral z-50 text-sm md:text-base rounded-b-xl'>
				<div className='flex flex-row justify-center text-center'>
					<ul className='flex items-end justify-center place-content-end cursor-pointer'>
						<li
							className='w-max md:inline-block md:mr-4'
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
					<ul className='flex flex-row  font-bold spacing-wide md:spacing-widest align-center md:text-lg justify-center gap-2 md:gap-5 cursor-pointer font-oswald text-grey'>
						{/* <li className='border-b-2 border-neutral hover:border-b-2 hover:border-primary ease-in-out hover:text-primary active:text-primary'>
							<Link to='/'>HOME</Link>
						</li> */}
						<li className='border-b-2 border-neutral hover:border-b-2 hover:border-primary ease-in-out hover:text-primary active:text-primary'>
							<Link to='/about'>About</Link>
						</li>
						<li className='border-b-2 border-neutral hover:border-b-2 hover:border-primary ease-in-out hover:text-primary active:text-primary'>
							<Link to='/testimonials'>Testimonials</Link>
						</li>
						<li className='border-b-2 border-neutral hover:border-b-2 hover:border-primary ease-in-out hover:text-primary active:text-primary'>
							<Link to='/credit-tips'>Credit Tips</Link>
						</li>
						<li className='border-b-2 border-neutral hover:border-b-2 hover:border-primary ease-in-out hover:text-primary active:text-primary'>
							<Link to='/contact'>Contact</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	)
}
