import React from 'react';
import '../styles/advertisement.scss';

const Advertisement  = ({ color, paragraph, image, link }) => (
	<div className="advertisement" style={{background: color}}>
		<a href={link} target="_blank" rel="noopener noreferrer">
			<img src={image} alt="advertisement" />
			<h1>{paragraph}</h1>
		</a>
	</div>
)

export default Advertisement;


