import React from 'react';
import '../../styles/projects.scss';
import Description from './Description';
import Languages from './Languages';

const Project = ({image, alt, languages, title, created, createdAt, updated, updatedAt, description, link, index}) => (
	<div className="row project" key={index}>
		<div className="col-md-6">
			<img src={`https://www.bodiewebdesign.com/assets/${image}`} alt={alt} className="img-fluid"/>
			<Languages languages={languages} />
		</div>
		<div className="col-md-6">
			<h2><strong>{title}</strong></h2>
			<Description created={created} createdAt={createdAt} updated={updated} updatedAt={updatedAt} description={description} link={link} />
		</div>
	</div>
)
export default Project;
