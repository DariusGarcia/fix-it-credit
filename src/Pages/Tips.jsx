import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import score from '../Assets/Images/score.png'

import Spline from '@splinetool/react-spline'

const Tips = () => {
	return (
		<div className='bg-zinc'>
			<NavBar />
			<div className='flex flex-col items-center justify-center h-full mb-12 text-grey mt-8'>
				<header className='flex flex-col justify-start items-start md:w-5/6 p-2 md:p-0 mb-8'>
					<h1 className='md:text-6xl text-4xl font-black font-oswald'>
						Credit Tips
					</h1>
					<p className='flex justify-start text-lg md:text-2xl text-start items-center pl-1 md:pl-0 mt-2'>
						Here are some credit tips to keep your credit score in check.
					</p>
				</header>
				<span className='flex justify-center h-96 w-full md:w-5/6 mb-12'>
					<Spline
						className='md:rounded-lg '
						scene='https://prod.spline.design/7w03NsxuGeMS815p/scene.splinecode'
					/>
				</span>
				{/* <img src={score}></img> */}
				<section className='flex flex-col justify-center md:items-center items-start'>
					<span className='flex justify-start text-start items-start md:w-5/6'>
						<h3 className='mb-4 text-4xl font-oswald font-black pl-2 md:pl-0'>
							Tips:
						</h3>
					</span>
					<div className='flex flex-col md:grid md:grid-cols-3 gap-4 text-grey p-2 md:p-0 md:w-5/6'>
						<article className='col-span-2 p-2 justify-center bg-white border-2 border-white  hover:bg-nerdBlue hover:border-2 hover:border-gradBlue shadow-xl rounded-lg'>
							<h3>Tip 1:</h3>
							<p className=''>
								{' '}
								Ipsum a fost macheta standard a industriei încă din secolul al
								XVI-lea, când un tipograf anonim a luat o planşetă de litere şi
								le-a amestecat pentru a crea o carte demonstrativă pentru
								literele respective. Nu doar că a supravieţuit timp de cinci
								secole, dar şi a facut saltul în tipografia electronică practi
							</p>
						</article>
						<article className='flex flex-col p-2 justify-center shadow-xl bg-white border-2 border-white  hover:bg-nerdBlue hover:border-2 hover:border-gradBlue rounded-lg'>
							<h3>Tip 2:</h3>
							<p className=''>
								{' '}
								Ipsum a fost macheta standard a industriei încă din secolul al
								XVI-lea, când un tipograf anonim a luat o planşetă de litere şi
								le-a amestecat pentru a crea o carte demonstrativă pentru
								literele respective. Nu doar că a supravieţuit timp de cinci
								secole, dar şi a facut saltul în tipografia electronică practi
							</p>
						</article>
						<article className='flex flex-col p-2 justify-center shadow-xl bg-white border-2 border-white hover:bg-nerdBlue hover:border-2 hover:border-gradBlue  rounded-lg'>
							<h3>Tip 3:</h3>
							<p className=''>
								{' '}
								Ipsum a fost macheta standard a industriei încă din secolul al
								XVI-lea, când un tipograf anonim a luat o planşetă de litere şi
								le-a amestecat pentru a crea o carte demonstrativă pentru
								literele respective. Nu doar că a supravieţuit timp de cinci
								secole, dar şi a facut saltul în tipografia electronică practi
							</p>
						</article>
						<article className='flex flex-col p-2 justify-center shadow-xl bg-white border-2 border-white hover:bg-nerdBlue hover:border-2 hover:border-gradBlue  rounded-lg'>
							<h3>Tip 4:</h3>
							<p className=''>
								{' '}
								Ipsum a fost macheta standard a industriei încă din secolul al
								XVI-lea, când un tipograf anonim a luat o planşetă de litere şi
								le-a amestecat pentru a crea o carte demonstrativă pentru
								literele respective. Nu doar că a supravieţuit timp de cinci
								secole, dar şi a facut saltul în tipografia electronică practi
							</p>
						</article>
					</div>
				</section>
			</div>
			<Footer />
		</div>
	)
}

export default Tips
