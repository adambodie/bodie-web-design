import React from 'react';
import Banner from './Banner';
import Projects from './project/Projects';
import About from './About';
import '../styles/App.scss';

const Home = () => (
	<div className="row">
		<Banner/>
		<div className="container-fluid home">
			<div className="home-intro">
				<h1>Welcome to Bodie Web Design</h1>
				<h5>Thanks for visiting!  My name is Adam Bodie, I'm a web developer currently living in Portland, Oregon, who primarily focuses on Javascript and its most popular frameworks.  My favorite is React, but I also build in Angular and Vue.  Here you will find my portfolio of websites I have built.</h5>
			</div>
			<Projects />
			<About/>
		</div>
	</div>
);

export default Home;
