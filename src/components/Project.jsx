import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';
import { motion } from 'framer-motion'

import SoftIcons from './SoftIcons';

const Project = (cardP) => {
	
	const { softwares, projects } = useContext(GlobalContext);

	const { project: {id, name, description, media, urlgit, urldeploy} } = cardP;

	
	return (

		<motion.article 
		whileHover={{ scale: 1.05 }}
		className='project__article'  key={id}>
			<h4 className='project__h4'>{name}</h4>
			<img src={media} href="#" className='project__img' alt={name}/>
			<div className='softwares'>
				<SoftIcons softwares={softwares} projects={projects}/>
			</div>
			<p className='project__p'>{description}</p>
			<section className='project__buttons'>
				<motion.button 
				whileHover={{ scale: 1.05, backgroundColor: "#EB5150", color: "#000" }}
				whileTap={{ scale: 1 }}
				className='project__button'><a   href={urlgit} target="_blank" rel='noreferrer'> GitHub </a></motion.button>
				<motion.button 
				whileHover={{ scale: 1.05, backgroundColor: "#EB5150", color: "#000" }}
				whileTap={{ scale: 1 }}
				className='project__button'><a  href={urldeploy} target="_blank" rel='noreferrer'> Visit </a></motion.button>
			</section>
		</motion.article>

	)
}

export default Project