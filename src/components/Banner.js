import React from 'react'
import Slider from 'react-slick'
import '../styles/banner.scss'
import BannerItem from './BannerItem'
import { connect } from 'react-redux'

const mapStateToProps = state => {
	return { selectRandomProjects: state.selectRandomProjects }
}

const settings = {
	infinite: true,
	arrows: true,
	slidesToShow: 1,
	slidesToScroll: 1
}

const Banner = ({ selectRandomProjects }) => (
	<Slider {...settings} className='container-fluid banner'>
		{selectRandomProjects.map((x, index) => <BannerItem link={x.link} banner={x.banner} alt={x.alt} key={index} />)}
	</Slider>
)

export default connect(mapStateToProps)(Banner)
