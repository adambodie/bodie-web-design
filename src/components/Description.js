import React from 'react';
import '../styles/projects.scss'

const Description = ({created, createdAt, updated, updatedAt, description}) => (
	<React.Fragment>
	<div className="description-data">
		<p><strong>Created:</strong> {created}</p>
		<p><strong>Added:</strong> {createdAt}</p>
		<br/>
		<p><strong>Updated:</strong> {updated}</p>
		<p><strong>Last Updated:</strong> {updatedAt}</p>
		<br/>
	</div>
	<p className="paragraph-description">{description}</p>
	</React.Fragment>
)

export default Description;
