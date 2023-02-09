import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';

import SoftIcons from './SoftIcons';

const Project = (cardP) => {
	
	const { softwares } = useContext(GlobalContext);
	// const { src, title} = softwares;

	const { project: {id, name, description, media} } = cardP;
	
	return (

		<article className='project__article'  key={id}>
			<h4 className='project__h4'>{name}</h4>
			<img src={media} href="#" className='project__img' alt={name}/>
			{/* <p className='project__p--soft'>{soft.join('-')}</p> */}
			<div className='softwares'>
				<h1>hola</h1>
				{/* <SoftIcons software={src} title=/> */}
			</div>
			<p className='project__p'>{description}</p>
		</article>

	)
}

export default Project