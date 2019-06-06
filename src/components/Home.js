import React from 'react';
import Advertisement from './Advertisement';
import Banner from './Banner';

import Projects from './project/Projects';
import logo from '../assets/linkedin-icon.png';
import '../styles/App.scss';

const Home = () => (
	<React.Fragment>
		<Banner />
		<div className="container">
			<h2>Welcome to Bodie Web Design</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus, eros et euismod interdum, enim dolor auctor ligula, et placerat magna tortor a tortor. Nulla ut risus turpis. Duis tempus interdum metus, sit amet consectetur augue facilisis quis. Morbi neque ex, auctor a lacus vel, aliquam gravida augue. Aenean auctor quam a tellus aliquam feugiat.</p>
			<Advertisement 
				color={"#283e4a"} 
				paragraph={"View my LinkedIn Profile"} 
				image={logo} 
				link={"https://www.linkedin.com/in/adam-bodie/"} 
				/>
				<Projects />
		</div>
	</React.Fragment>
);



export default Home;
