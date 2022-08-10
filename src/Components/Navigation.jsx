import React from 'react'
import * as Scroll from 'react-scroll'
import { Link } from 'react-router-dom'
import blackLogo from '../Assets/Images/black-logo.png'
import { MailIcon, MenuIcon, PhoneIcon, XIcon } from '@heroicons/react/outline'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'

let animateScroll = Scroll.animateScroll
const navigation = [
	{ name: 'Home', href: '/' },
	{ name: 'About', href: 'about' },
	{ name: 'Testimonials', href: 'testimonials' },
	{ name: 'Credit Tips', href: 'credit-tips' },
	{ name: 'Contact Us', href: 'contact' },
]

export default function Navigation() {
	return (
		<>
			<Popover as='header' className='sticky top-0 z-50'>
				<div className='bg-warm-gray-50 md:flex md:justify-center '>
					<nav
						className='sticky top-0 max-w-7xl mx-auto flex items-center justify-between py-6 md:py-12 px-6 xl:px-8'
						aria-label='Global'>
						<div className='flex items-center flex-1'>
							<div className='flex items-center justify-between w-full lg:w-auto'>
								<a href='#'>
									<span className='sr-only'>Workflow</span>
									<img className='h-8 w-auto sm:h-10' src={blackLogo} alt='' />
								</a>
								<div className='-mr-2 flex items-center lg:hidden'>
									<Popover.Button className='bg-warm-gray-50 rounded-md p-2 inline-flex items-center justify-center text-grey hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-teal-500'>
										<span className='sr-only'>Open main menu</span>
										<MenuIcon className='h-6 w-6' aria-hidden='true' />
									</Popover.Button>
								</div>
							</div>
							<div className='hidden space-x-10 lg:flex lg:ml-10'>
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className='text-lg font-medium text-grey hover:text-warm-gray-900'>
										{item.name}
									</a>
								))}
							</div>
						</div>
					</nav>
				</div>

				<Transition
					as={Fragment}
					enter='duration-150 ease-out'
					enterFrom='opacity-0 scale-95'
					enterTo='opacity-100 scale-100'
					leave='duration-100 ease-in'
					leaveFrom='opacity-100 scale-100'
					leaveTo='opacity-0 scale-95'>
					<Popover.Panel
						focus
						className='absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top lg:hidden'>
						<div className='rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
							<div className='px-5 pt-4 flex items-center justify-between'>
								<div>
									<img className='h-8 w-auto' src={blackLogo} alt='' />
								</div>
								<div className='-mr-2'>
									<Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500'>
										<span className='sr-only'>Close menu</span>
										<XIcon className='h-6 w-6' aria-hidden='true' />
									</Popover.Button>
								</div>
							</div>
							<div className='pt-5 pb-6'>
								<div className='px-2 space-y-1'>
									{navigation.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className='block px-3 py-2 rounded-md text-base font-medium text-warm-gray-900 hover:bg-warm-gray-50'>
											{item.name}
										</a>
									))}
								</div>
							</div>
						</div>
					</Popover.Panel>
				</Transition>
			</Popover>{' '}
		</>
	)
}
