import React from 'react'
import * as Scroll from 'react-scroll'
import { Link } from 'react-router-dom'
import { MdHome } from 'react-icons/md'
import { useMediaQuery } from 'react-responsive'
import logo from '../Assets/Images/blue-logo.png'

let animateScroll = Scroll.animateScroll

export default function NavBar() {
	const isBigScreen = useMediaQuery({ query: '(min-width: 746px)' })
	// const isTabletOrMobile = useMediaQuery({ query: '(max-width: 745px)' })

	return (
		<>
			<nav className='flex sticky top-0 items-center justify-around md:justify-center h-28 w-full p-5 bg-white text-sm md:text-base rounded-b-xl'>
				<div className='flex flex-row justify-center text-center '>
					<ul className='flex items-end justify-center gap-2 place-content-end cursor-pointer text-grey3'>
						{/* <li
							className=' hover:border-b-2 border-primary'
							onClick={() =>
								animateScroll.scrollToTop({
									duration: 400,
									delay: 50,
									smooth: true,
								})
							}>
							<MdHome size={25}></MdHome>{' '}
						</li> */}
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
									className='h-8 md:h-20 rounded-sm '
									alt='logo'></img>
							</Link>
						</li>
					</ul>
				</div>

				<div className='flex flex-col align-center justify-center'>
					<ul className='flex flex-row align-center md:text-lg justify-center gap-5 cursor-pointer  text-grey'>
						<li className='border-b-2 border-white hover:border-b-2 hover:border-primary ease-in-out'>
							<Link to='/'>Home</Link>
						</li>
						<li className='border-b-2 border-white hover:border-b-2 hover:border-primary ease-in-out'>
							<Link to='/about'>About</Link>
						</li>
						<li className='border-b-2 border-white hover:border-b-2 hover:border-primary ease-in-out'>
							<Link to='/testimonials'>Testimonials</Link>
						</li>
						<li className='border-b-2 border-white hover:border-b-2 hover:border-primary ease-in-out'>
							<Link to='/contact'>Contact</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	)
}
