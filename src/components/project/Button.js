import React from 'react';
import '../../styles/projects.scss';

const Button = ({link}) => (
	<a className="btn" href={`http://${link}.bodiewebdesign.com`} role="button">
		Check Me Out! &raquo;
	</a>
)

export default Button;
