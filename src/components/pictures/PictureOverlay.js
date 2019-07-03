import React from 'react';
import '../../styles/pictures.scss';

const PictureOverlay = ({item}) => (
	<div className="photo-overlay">
		<h2>{item.title}</h2>
		<p>Week of: {item.week}</p>
		<p>Location: {item.location}, {item.state}</p>
		<p>{item.description}</p>
	</div>
)


export default PictureOverlay;

