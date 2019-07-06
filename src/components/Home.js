import React from 'react';
import Advertisement from './Advertisement';
import Banner from './Banner';
import Projects from './project/Projects';
import logo from '../assets/linkedin-icon.png';
import '../styles/App.scss';

const Home = () => (
	<React.Fragment>
		<Banner/>
		<div className="container home">
			<h2>Welcome to Bodie Web Design</h2>
			<p>Here you will find my portfolio of websites I have built.  Feel free to view my projects, read about me or enjoy my weekly photos.</p>
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
