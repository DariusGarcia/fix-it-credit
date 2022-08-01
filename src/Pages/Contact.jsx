import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

export default function Contact() {
	return (
		<>
			<NavBar />
			<span className='flex justify-center flex-col mt-32 w-full text-start md:text-center px-4 md:mb-12 md:mt-40'>
				<p className='text-lg md:text-xl'>{Text()}</p>
			</span>
			<div className='flex justify-center mt-10 mb-12 md:my-12'>
				<div className='md:flex md:flex-row justify-center '>
					<article className='flex md:justify-end justify-center md:w-1/2  '>
						<div className='flex items-end justify-center md:justify-end w-screen md:w-full'>
							<form
								// ref={form}
								// onSubmit={sendEmail}
								className='flex flex-col text-black  rounded-lg p-4 md:p-8 border-2 w-full m-2 md:m-0 border-primary shadow-xl '>
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
									<input
										type='submit'
										value='Send Message'
										className='w-max md:w-1/3 bg-primary text-white rounded-md flex justify-center p-4 my-4 hover:scale-95 hover:outline-4 hover:outline-black ease-in-out delay-50'
									/>
								</div>
							</form>
						</div>
					</article>
					<article className='h-96 md:h-full bg-primary mt-4 mx-2 md:mx-0 md:mt-0 md:m-0 shadow-xl md:w-96 flex rounded-lg items-center justify-center md:justify-start md:pb-0 '>
						<div className='flex md:w-full flex-col py-4  text-white  rounded-lg justify-center items-center h-full bg-blue'>
							<h1 className='my-2 text-2xl'>Contact Us</h1>

							<p className='my-2'>Phone: (626) 922 - 0791</p>
							<p className='my-2'>Email: info@kvlcommunications.com</p>
							<img
								// src={logo}
								alt='logo'
								className='py-2 my-6 bg-white rounded-lg h-32'></img>
						</div>
					</article>
				</div>
			</div>
			<div className='md:mt-24'>
				<Footer />
			</div>
		</>
	)
}
