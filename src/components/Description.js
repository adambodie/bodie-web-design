import React from 'react';
import '../styles/projects.scss';
import store from '../store';

const Description = ({created, createdAt, updated, updatedAt, description}) => (
	<React.Fragment>
	<div className="description-data">
		<p><strong>Created:</strong> {store.getState().months[created.getMonth()]} {created.getDate()}, {created.getFullYear()}</p>
		<p><strong>Added:</strong> {createdAt}</p>
		<br/>
		<p><strong>Updated:</strong> {store.getState().months[updated.getMonth()]} {updated.getDate()}, {updated.getFullYear()}</p>
		<p><strong>Last Updated:</strong> {updatedAt}</p>
		<br/>
	</div>
	<p className="paragraph-description">{description}</p>
	</React.Fragment>
)

export default Description;
