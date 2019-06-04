import React from 'react';
import '../styles/projects.scss'

const Button = ({link}) => (
	<h3>
		<a className="btn" href={`http://${link}.bodiewebdesign.com`} role="button">
			Check Me Out! &raquo;
		</a>
	</h3>
)

export default Button;
