import React from 'react';
import '../styles/projects.scss';
import Update from './Update';
import Button from './Button';
import Description from './Description';
import Languages from './Languages';
import store from '../store';

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
			<div className="row project" key={index}>
				<div className="col-md-6">
					<img src={`https://www.bodiewebdesign.com/assets/${x.image}`} alt={x.alt} className="img-fluid"/>
					<Languages languages={x.languages} />
				</div>
				<div className="col-md-6">
					<h2>{x.title}</h2>
					<div className="description">
						<Description created={x.created} createdAt={x.createdAt} updated={x.updated} updatedAt={x.updatedAt} description={x.description} />
						<Button link={x.link} />
					</div>
				</div>
			</div>
		)}
	</React.Fragment>
)

export default Projects;
