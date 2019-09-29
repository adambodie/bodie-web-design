import React from 'react';
import '../styles/about.scss';
import Advertisement from './Advertisement';
import github from '../assets/github-icon.png';
import linkedin from '../assets/linkedin-icon.png';
import author from '../assets/author.jpg';

const About = () => (
	<div className='container about-container'>
		<h1>About Me</h1>
		<div className='row'>
			<div className='col-lg-4'>
				<img src={author} alt="Adam" id="adam" className="img-fluid" />
			</div>
			<div className='col-lg-8'>
				<div className='about'>
					<p>Adam is self-taught web developer who first learned to code in late 2013, starting with Java, dabbling with other languages including Ruby and Python, before focusing on JavaScript.  Within the JavaScript language, he has worked with JavaScript's many frameworks, with React being my personal favorite.  Mostly spends time with Front end development, but capable of back end development.</p>
					<Advertisement 
						color={"#283e4a"} 
						paragraph={"View my LinkedIn Profile"} 
						image={linkedin} 
						link={"https://www.linkedin.com/in/adam-bodie/"} 
					/>
					<p>Adam currently lives in Portland, Oregon, born and raised (a rarity this day and age), working as a Contract Recovery Specialist at Mr. Cooper.  Previously, I got my Bachelor's of Science Degree in Psychology at the University of Minnesota.  He's eager to start anew with my dream job, looking to relocate for a fresh start.  When Adam is not honing my developer skills, he enjoys travelling, photography, watching sports, mainly basketball and football, and listening to music.  If you have any questions, feel free to ask.</p>
				</div>
			</div>
		</div>
		<div className='row'>
			<Advertisement 
				color={"purple"} 
				paragraph={"View my GitHub page"} 
				image={github} 
				link={"https://github.com/adambodie/"} 
			/>
			<div className="contact">
				<h2>Contact Me</h2>
				<p>If you'd like to contact me, the best way to do so is through email.  You can send me an email at:</p>
				<p><strong><a href="mailto:adam.m.bodie@gmail.com">adam.m.bodie@gmail.com</a></strong></p>
			</div>
		</div>
	</div>
);

export default About;
