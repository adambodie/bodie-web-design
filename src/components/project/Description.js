import React from 'react';
import '../../styles/projects.scss';

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const Description = ({created, createdAt, updated, updatedAt, description, link, github}) => (
	<div className="description">
		<div className="description-data">
			<p><strong>Created:</strong> {MONTHS[created.getMonth()]} {created.getDate()}, {created.getFullYear()}</p>
			<p><strong>Added:</strong> {createdAt}</p>
			<br/>
			<p><strong>Updated:</strong> {MONTHS[updated.getMonth()]} {updated.getDate()}, {updated.getFullYear()}</p>
			<p><strong>Last Updated:</strong> {updatedAt}</p>
			<br/>
		</div>
		<p className="paragraph-description">{description}</p>
		<div className="description-links">
			<a className="btn" href={`http://${link}.bodiewebdesign.com`} role="button">Check Me Out! &raquo;</a>
			<a className="btn" href={`https://github.com/adambodie/${github}`} role="button">View Source Code &raquo;</a>
		</div>
	</div>
)

export default Description;
