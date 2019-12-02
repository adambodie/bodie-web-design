import React from 'react'
import '../../styles/projects.scss'
import Description from './Description'
import Languages from './Languages'

const Project = ({image, alt, languages, title, created, createdAt, updated, updatedAt, description, link, github, index}) => (
	<div className='row project' key={index}>
		<div className='col-md-6'>
			<img src={`/assets/links/${image}`} alt={alt} className='img-fluid'/>
			<Languages languages={languages} />
		</div>
		<div className='col-md-6'>
			<h2><strong>{title}</strong></h2>
			<Description 
				created={created} 
				createdAt={createdAt} 
				updated={updated} 
				updatedAt={updatedAt} 
				description={description} 
				link={link} 
				github={github}
			/>
		</div>
	</div>
)
export default Project
