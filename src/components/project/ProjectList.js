import React from 'react'
import '../../styles/projects.scss'
import Project from './Project'

const ProjectList = ({projects}) => (
	projects.map((x, index) => {
		if (x.visible) {
			return (
				<Project 
					key={index}
					image={x.image}
					alt={x.alt}
					languages={x.languages}
					title={x.title}
					created={x.created} 
					createdAt={x.createdAt} 
					updated={x.updated} 
					updatedAt={x.updatedAt} 
					description={x.description} 
					link={x.link}
					github={x.github}
				/>)
			}
			return null
		}
	)
)
export default ProjectList

