import React from 'react';
import '../styles/advertisement.scss';

const BannerItem  = ({ index, link, banner, alt }) => (
	<a href={`https://${link}.bodiewebdesign.com`}  key={index} >
		<img src={`https://www.bodiewebdesign.com/assets/${banner}`} alt={alt} />
	</a>
)

export default BannerItem;
