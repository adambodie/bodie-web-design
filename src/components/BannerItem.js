import React, { Component } from 'react';
import '../styles/banner.scss';

export default class BannerItem extends Component { 
	render() {
		const { index, link, banner } = this.props;
		const styles = {
			backgroundImage: `url(/assets/banners/${banner})`
		}
		return (
			<a href={`https://${link}`}  key={index} >
				<div className="banner-div" style={styles}></div>
			</a>
		)
	}
}

