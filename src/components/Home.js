import React from 'react';
import Banner from './Banner';
import Projects from './project/Projects';
import '../styles/App.scss';

const Home = () => (
	<React.Fragment>
		<Banner/>
		<div className="container-fluid home">
			<div className="home-intro">
				<h1>Welcome to Bodie Web Design</h1>
				<p>Thanks for visiting!  My name is Adam Bodie, web developer, and here you will find my portfolio of websites I have built.  Feel free to view my projects, read about me or enjoy my weekly photos.</p>
			</div>
			<Projects />
		</div>
	</React.Fragment>
);

export default Home;
