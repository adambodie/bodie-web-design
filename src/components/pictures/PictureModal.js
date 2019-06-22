import React from 'react';
import '../../styles/pictures.scss';

const PictureModal =({thisData}) => {
	return (
		<div className="row modal-body">
			<div className="col-sm-6">
				<img src={`https://bodiewebdesign.com/assets/${thisData.image}`} alt={thisData.title} className="img-fluid"/>
			</div>
			<div className="modal-description col-sm-6">
				<h2>{thisData.title}</h2>
				<p>Week of: {thisData.week}</p>
				<p>Location: {thisData.location}, {thisData.state}</p>
				<p>{thisData.description}</p>
			</div>
		</div>
	)
}

export default PictureModal;



