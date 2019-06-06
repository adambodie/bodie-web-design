import React, { Component } from 'react';
import Slider from 'react-slick';
import '../../styles/update.scss';
import store from '../../store';

export default class Update extends Component {
	render() {
		const settings = {
		arrows: false,
		infinite: true,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 4000,
		slidesToShow: 1,
		slidesToScroll: 1
	};
	return (
		<React.Fragment>
		<h3>Recent Updates</h3>
		<Slider {...settings}>
			{store.getState().updates.map((x, index) => <div className="update" key={index}><p>{index + 1}. <strong>{x.title}</strong> - {x.description}</p></div>)}
		</Slider>
		</React.Fragment>
		);
	}
}

