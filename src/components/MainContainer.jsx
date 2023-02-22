import React from 'react'
import { easeInOut, motion } from 'framer-motion'


const MainContainer = () => {
  return (
		<>
			<section className='landingpage'>
				<section className='card landingpage__about'>
					<motion.a 
					whileHover={{ textDecoration: "underline", textDecorationColor: "#FBD1EA", transition: "all 0.3s ease-in-out"  }}
					href="#about" className='card__h2'>acerca</motion.a>
				</section>
				<section className='card landingpage__projects'>
					<motion.a 
					whileHover={{ textDecoration: "underline", textDecorationColor: "#FBD1EA", transition: "all 0.3s ease-in-out"  }}
					href="#projects" className='card__h2'>proyectos</motion.a>
				</section>
				<section className='card landingpage__skills'>
					<motion.a 
					whileHover={{ textDecoration: "underline", textDecorationColor: "#FBD1EA", transition: "all 0.3s ease-in-out" }}
					href="#skills" className='card__h2 h2--skills'>skills</motion.a>
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
					<motion.a 
					whileHover={{ textDecoration: "underline", textDecorationColor: "#FBD1EA", animation: easeInOut }}
					href="#contact" className='card__h2 h2--contact'>contacto</motion.a>
				</section>
			</section>

    	</>
	);
} 

export default MainContainer