import React, { useState } from 'react'
import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import logo from '../Assets/Images/black-logo.png'
import MessageBtn from '../Components/MessageBtn'
import LandingComp from '../Components/LandingComp'
import { useSpring, animated, config } from 'react-spring'

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
function Text1() {
	const [flip, set] = useState(false)
	const props = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		reset: false,
		reverse: false,
		delay: 600,
		config: config.molasses,
		onRest: () => set(!flip),
	})

	return <animated.h1 style={props}>Better credit,</animated.h1>
}
function Text2() {
	const [flip, set] = useState(false)
	const props = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		reset: false,
		reverse: false,
		delay: 1300,
		config: config.molasses,
		onRest: () => set(!flip),
	})

	return <animated.h1 style={props}>easier.</animated.h1>
}

export default Landing
