import React from 'react'
import { Link } from 'react-router-dom'
import { MdMessage } from 'react-icons/md'

export default function MessageBtn() {
	return (
		<div>
			{' '}
			<Link to='/contact'>
				<a
					href='/contact'
					className=' flex flex-row  fixed z-50 bottom-7 p-4 gap-2 hover:bg-primary md:right-10 md:bottom-10 right-4 text-white rounded-xl shadow-md bg-bluetext hover:shadow-lg hover:scale-95 outline-grey transition ease-in-out delay-10 '>
					Message Us <MdMessage size='25'></MdMessage>
				</a>
			</Link>
		</div>
	)
}
