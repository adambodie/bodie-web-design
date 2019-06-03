import React from 'react';
import '../styles/projects.scss'
import store from '../store';

const Projects = () => (
	<React.Fragment>
		<h1>Projects</h1>
		{store.getState().projects.map((x, index) => 
			<div className="row project" key={index}>
				<div className="col-md-6">
					<img src={`https://www.bodiewebdesign.com/assets/${x.image}`} alt={x.alt} className="img-fluid"/>
					<ul className="languages">
						{x.languages.map((y, index) => <li key={index}>{y.name}</li>)}
					</ul>
				</div>
				<div className="col-md-6">
					<h2>{x.title}</h2>
					<div className="description">
						<div className="description-data">
							<p><strong>Created:</strong> {x.created}</p>
							<p><strong>Added:</strong> {x.createdAt}</p>
							<br/>
							<p><strong>Updated:</strong> {x.updated}</p>
							<p><strong>Last Updated:</strong> {x.updatedAt}</p>
							<br/>
						</div>
						<p className="paragraph-description">{x.description}</p>
						<h3>
							<a className="btn" href={`http://${x.link}.bodiewebdesign.com`} role="button">
								Check Me Out! &raquo;
							</a>
						</h3>
					</div>
				</div>
			</div>
		)}
	</React.Fragment>
)

export default Projects;
