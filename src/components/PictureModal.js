import React, { Component } from 'react';
import '../styles/pictures.scss';

export default class PictureModal extends Component {
	render(){
		const { thisData } = this.props;
		return (
				<div className="row modal-body">
					<div className="col-md-6">
						<img src={`https://bodiewebdesign.com/assets/${thisData.image}`} alt={thisData.title} className="img-fluid"/>
					</div>
					<div className="modal-description col-md-6">
						<h2>{thisData.title}</h2>
						<p>Week of: {thisData.week}</p>
						<p>Location: {thisData.location}, {thisData.state}</p>
						<p>{thisData.description}</p>
					</div>
				</div>
		)
	}
}



