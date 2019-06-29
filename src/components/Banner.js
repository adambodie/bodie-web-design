import React, { Component } from 'react';
import Slider from 'react-slick';
import '../styles/App.scss';
import BannerItem from './BannerItem';

export default class Banner extends Component {
	render() {
	const settings = {
		infinite: true,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1
	};
	const { selectRandomProjects } = this.props;
	return (
		<Slider {...settings} className="container-fluid banner">
		{selectRandomProjects.map((x, index) => <BannerItem link={x.link} banner={x.banner} alt={x.alt} key={index} />)}
		</Slider>
		);
	}
}
