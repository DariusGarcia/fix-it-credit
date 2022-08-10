import { useState } from 'react'
import { Switch } from '@headlessui/react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import { MdMessage, MdSend } from 'react-icons/md'
import ContactComponent from '../Components/Contact'
import Navigation from '../Components/Navigation'
export default function Contact() {
	return (
		<div className='bg-zinc '>
			<Navigation />
			<ContactComponent />
			<div className=''>
				<Footer />
			</div>
		</div>
	)
}
