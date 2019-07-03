import React from 'react';
import Slider from 'react-slick';
import '../../styles/update.scss';
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return { updates: state.updates };
};

const settings = {
	arrows: false,
	infinite: true,
	autoplay: true,
	speed: 2000,
	autoplaySpeed: 4000,
	slidesToShow: 1,
	slidesToScroll: 1
};
const Update = ({updates}) => (
	<React.Fragment>
		<h3>Recent Updates</h3>
		<Slider {...settings}>
			{updates.map((x, index) => (
				<div className="update" key={index}>
					<p>{index + 1}. <strong>{x.title}</strong> - {x.description}</p>
				</div>
				)
			)}
		</Slider>
	</React.Fragment>
);

export default connect(mapStateToProps)(Update)
