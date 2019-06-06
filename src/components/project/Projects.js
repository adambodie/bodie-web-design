import React from 'react';
import '../../styles/projects.scss';
import Update from './Update';
import Project from './Project';
import store from '../../store';

const Projects = () => (
	<React.Fragment>
		<h1>Projects</h1>
		<Update />
		<h3>Filter Projects</h3>
		<div className="options">
			<select>
				<option value="">Filter by Technology...</option>
				{store.getState().uniqueLanguages.map((x, index)=> <option key={index} value={x}>{x}</option>)}
			</select>
			<a className="btn" href="/">Reset</a>
			<p>Results</p>
		</div>
		<h3>Sort Projects</h3>
		<div className="sort">
			<a className="btn" href="/">Title</a>
			<a className="btn" href="/">CreatedOrder</a>
			<a className="btn" href="/">UpdatedOrder</a>
		</div> 
		{store.getState().projects.map((x, index) => 
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
				/>
		)}
	</React.Fragment>
)

export default Projects;
