import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import logo from '../Assets/Images/black-logo.png'
import { MdMessage, MdSend } from 'react-icons/md'

export default function Contact() {
	return (
		<>
			<NavBar />

			<div className='flex justify-center mb-12  font-inter'>
				<div className='md:flex md:flex-col w-full justify-center '>
					<article className='flex  flex-col  h-56 md:h-96 bg-gradient-to-r from-gradBlue to-gradBlue2 mt-4  md:mx-0 md:mt-0 md:m-0 shadow-xl rounded-lg items-center justify-center md:justify-start md:pb-0 '>
						<div className='flex md:w-full flex-col py-4 h-full text-white  rounded-lg justify-center items-center bg-blue'>
							<h1 className='flex flex-row  items-center gap-4 my-2 text-2xl md:text-6xl font-DMSans'>
								Get in touch <MdMessage size={40}></MdMessage>
							</h1>

							<p className='my-2 text-2xl'>Phone: (626) 922 - 0791</p>
							<p className='my-2 text-2xl'>Email: info@fixitcredit.com</p>
							{/* <img
								src={logo}
								alt='logo'
								className='py-2 my-6 bg-white rounded-lg w-56'></img> */}
						</div>
					</article>
					<article className='flex  justify-center   '>
						<div className='flex flex-col  justify-center  mt-8 md:mt-0 w-full md:w-3/5'>
							<span className='flex justify-center flex-col md:mt-12 mb-10 w-full text-black text-lg md:text-xl text-start md:text-center px-4 md:mb-12'>
								{/* <p className='text-lg md:text-xl'>{Text()}</p> */}
								Have a question? Drop a message and a representative will get
								back to you shortly.
							</span>
							<form
								// ref={form}
								// onSubmit={sendEmail}
								className='flex flex-col text-black  rounded-lg p-4 justify-center md:p-8 border-2 w-full md:m-0 border-primary shadow-xl '>
								<div className='flex flex-row pb-4 text-start'>
									{/* {Text2()} */}
									<span className='pl-2 mt-1'>
										{/* <MdForum size={30}></MdForum> */}
									</span>
								</div>
								<div className='flex flex-col'>
									<span className='flex flex-col md:flex-row gap-2'>
										<input
											className=' text-black placeholder:text-black mb-2 p-2 w-full md:w-1/2 outline-black outline-1 border-2 border-lightGrey rounded-md '
											placeholder='Name'
											type='text'
											name='name'
										/>
										<input
											className=' text-black placeholder:text-black mb-2 p-2 w-full md:w-1/2 outline-black outline-1 border-2 border-lightGrey rounded-md '
											placeholder='Email'
											type='email'
											name='email'
										/>
									</span>
									<textarea
										className=' text-black placeholder:text-black my-2 mb-2 p-2 outline-black outline-1 border-2 border-lightGrey rounded-md '
										placeholder='Subject'
										name='subject'
									/>
									<textarea
										className=' text-black placeholder:text-black  my-2 mb-2 p-2 outline-black outline-1 border-2 border-lightGrey rounded-md '
										placeholder='Message'
										name='message'
									/>
									<span className='flex flex-row items-center gap-2'>
										<button
											type='submit'
											value='Send Message'
											className='w-max md:w-1/3 bg-gradBlue2 text-white text-lg rounded-md flex justify-center items-center gap-3 p-4 my-4 hover:bg-gradBlue hover:scale-95 hover:outline-4 hover:outline-black ease-in-out delay-50'>
											Send Message
											<MdSend size={30}></MdSend>
										</button>
									</span>
								</div>
							</form>
						</div>
					</article>
				</div>
			</div>
			<div className=''>
				<Footer />
			</div>
		</>
	)
}
