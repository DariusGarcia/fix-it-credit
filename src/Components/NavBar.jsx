import React, { useState } from 'react'
import * as Scroll from 'react-scroll'
import { Link } from 'react-router-dom'
import { MdHome } from 'react-icons/md'
import { useMediaQuery } from 'react-responsive'

let animateScroll = Scroll.animateScroll

export default function NavBar() {
	const isBigScreen = useMediaQuery({ query: '(min-width: 746px)' })
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 745px)' })

	return (
		<>
			<nav className='backdrop-filter backdrop-blur-lg bg-opacity-50 firefox:bg-opacity-70 rounded-b-md flex fixed items-center top-0 justify-around md:justify-between bg-grey h-28 w-full p-5 text-sm md:text-base z-50'>
				<div className='flex justify-center text-center'>
					<ul className='flex items-end justify-center gap-5 place-content-end cursor-pointer text-white'>
						<li
							className=' hover:border-b-2 border-primary'
							onClick={() =>
								animateScroll.scrollToTop({
									duration: 400,
									delay: 50,
									smooth: true,
								})
							}>
							<MdHome size={25}></MdHome>{' '}
						</li>
						<li
							className='hidden md:inline-block  hover:border-b-2 border-primary'
							onClick={() =>
								animateScroll.scrollToTop({
									duration: 400,
									delay: 50,
									smooth: true,
								})
							}>
							<Link to='/'>Fix It Credit</Link>
						</li>
					</ul>
				</div>
				{isBigScreen && (
					<div className='flex flex-col align-center justify-center'>
						<ul className='flex flex-row align-center justify-center gap-5 cursor-pointer text-white'>
							<li className='hover:border-b-2 border-primary ease-in-out'>
								<Link to='/about'>Home</Link>
							</li>
							<li className='hover:border-b-2 border-primary ease-in-out'>
								<Link to='/services'>Services</Link>
							</li>
							<li className='hover:border-b-2 border-primary ease-in-out'>
								<Link to='/payments'>Payments</Link>
							</li>
							<li className='hover:border-b-2 border-primary ease-in-out'>
								<Link to='/contact'>Contact</Link>
							</li>
						</ul>
					</div>
				)}
			</nav>
		</>
	)
}
