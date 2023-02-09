import React from 'react'


const MainContainer = () => {
  return (
		<>

			<section className='landingpage'>
				<section className='card landingpage__about'>
					<header className='card__header'>
						<a href="#" className="card__a" title="#"><img src="../media/arrows/flecha.svg" alt="#" className='card__img'/></a>
					</header>
					<h2 className='card__h2'>about</h2>
				</section>
				<section className='card landingpage__projects'>
					<header className='card__header'>
						<a href="#" className="card__a" title="#"><img src="../media/arrows/flecha.svg" alt="#" className='card__img'/></a>
					</header>
					<h2 className='card__h2'>projects</h2>
				</section>
				<section className='card landingpage__skills'>
					<header className='card__header'>
						<a href="#" className="card__a" title="#"><img src="../media/arrows/flecha.svg" alt="#" className='card__img'/></a>
					</header>
					<h2 className='card__h2 h2--skills'>skills</h2>
				</section>
				<section className='card--scroll landingpage__scroll'>
						<p className='scroll__p'>scroll<br></br>down</p>
				</section>
				<section className='card landingpage__contact'>
					<header className='card__header'>
						<a href="#" className="card__a" title="#"><img src="../media/arrows/flecha.svg" alt="#" className='card__img'/></a>
					</header>
					<h2 className='card__h2 h2--contact'>contact</h2>
				</section>
			</section>

    	</>
	);
} 

export default MainContainer