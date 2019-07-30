import React from 'react';
import '../../styles/projects.scss';
import Language from './Language';

const Languages = ({languages}) => (
	<ul className="languages">
		{languages.map((x, index) => <Language key={index} name={x.name} />)}
	</ul>
)

export default Languages;
