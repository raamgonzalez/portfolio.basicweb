import React from 'react'

const Project = (cardP) => {
	
	console.log("console en project", cardP)

	const { project: {id, name, description, soft, media} } = cardP;
	
	return (

		<article className='project__article'  key={id}>
			<h4 className='project__h4'>{name}</h4>
			<img src={media} href="#" className='project__img' alt={name}/>
			<p className='project__p--soft'>{soft.join('-')}</p>
			<p className='project__p'>{description}</p>
		</article>

	)
}

export default Project