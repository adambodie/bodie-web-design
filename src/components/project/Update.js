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
<div className="container-fluid">
	<div className="updates">
		<p style={{color: 'white'}}><strong>Newest Updates:</strong></p>
		<div className="update-slide">
			<Slider {...settings}>
				{updates.map((x, index) => (
					<div className="update" key={index}>
						<p><strong>{x.title}</strong> - {x.description}</p>
					</div>
					)
				)}
			</Slider>
		</div>
	</div>
</div>
);

export default connect(mapStateToProps)(Update)
