import React from 'react'
import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer'
import MessageBtn from '../Components/MessageBtn'
import LandingComp from '../Components/LandingComp'

const Landing = () => {
	return (
		<div>
			<Navigation />
			<LandingComp />
			<MessageBtn />
			<Footer />
		</div>
	)
}

export default Landing
