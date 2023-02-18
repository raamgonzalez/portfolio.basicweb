import React from 'react'
import { motion } from 'framer-motion'


const MainContainer = () => {
  return (
		<>
			<section className='landingpage'>
				<section className='card landingpage__about'>
					<header className='card__header'>
						<a href="#about" className="card__a" title="#"><img src="https://icongr.am/jam/chevron-down.svg?size=42&color=191C43" alt="Icono de flecha hacia abajo" className='card__img' target="_blank" href="noopener noreferrer"/></a>
					</header>
					<h2 className='card__h2'>about</h2>
				</section>
				<section className='card landingpage__projects'>
					<header className='card__header'>
						<a href="#projects" className="card__a" title="#"><img src="https://icongr.am/jam/chevron-down.svg?size=42&color=191C43" alt="Icono de flecha hacia abajo" className='card__img' target="_blank" href="noopener noreferrer"/></a>
					</header>
					<h2 className='card__h2'>projects</h2>
				</section>
				<section className='card landingpage__skills'>
					<header className='card__header'>
						<a href="#skills" className="card__a" title="#"><img src="https://icongr.am/jam/chevron-down.svg?size=42&color=191C43" alt="Icono de flecha hacia abajo" className='card__img' target="_blank" href="noopener noreferrer"/></a>
					</header>
					<h2 className='card__h2 h2--skills'>skills</h2>
				</section>
				<section className='card--scroll landingpage__scroll'>
						<p className='scroll__p'>
							scroll
							<motion.p 
							className='scroll__p--down'
							animate={{y:15}}
							transition={{
								duration: 0.5,
								ease: 'easeInOut',
								repeat: Infinity,
								repeatType: 'reverse',
								delay:0.5,
							}}>
							down
							</motion.p>
						</p>
				</section>
				<section className='card landingpage__contact'>
					<header className='card__header'>
						<a href="#contact" className="card__a" title="#"><img src="https://icongr.am/jam/chevron-down.svg?size=42&color=191C43" alt="Icono de flecha hacia abajo" className='card__img' target="_blank" href="noopener noreferrer"/></a>
					</header>
					<h2 className='card__h2 h2--contact'>contact</h2>
				</section>
			</section>

    	</>
	);
} 

export default MainContainer