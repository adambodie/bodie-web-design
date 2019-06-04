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
