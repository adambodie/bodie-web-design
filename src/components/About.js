import React from 'react';
import '../styles/about.scss';
import Advertisement from './Advertisement';
import logo from '../assets/github-icon.png';
import author from '../assets/author.jpg';

const About = () => (
	<div className="container">
		<h1>About Me</h1>
		<div className="row">
			<div className='about'>
				<h4>Who is Adam Bodie?</h4>
				<p>I am someone who’s hard working, devoted and loyal to the team.  Making sure that the job is done correctly is something I value, and I’m more than willing to do what it takes to get the job done.  For me, the qualities I consider most important are respect, loyalty, and fairness, whether it’s from those around me or from myself.  It’s what drives me to do the job correctly and passionately.</p>
				<img src={author} alt="Adam" id="adam" />
				<p>I started my journey to become a developer in 2013, instantly hooked on the ability to build and create projects through code.  I’ve always had a creative side, and being able to showcase it through web projects is a great and fun way for me to utilize my talents.  I’m primarily self-taught, learning from all sorts of information I can find.  I’ve been a member of Treehouse since 2015, honing my skills in web development every chance I get.  I love learning new skills, frameworks and everything in between; it’s one thing I consider quite important in the ever-evolving world of technology.</p>
				
				<p>I have learned multiple programming languages in the past; Java, Ruby and Python being a few, but for me, I spend most of my time working with JavaScript.  It’s available everywhere, easy to compile and difficult to make web projects without.  I love being able to use multiple frameworks to build projects with; React is my favorite at the moment.  I primarily work on the front-end side of development, but am capable of using back-end technologies as well.  Being a Full Stack developer would be a particular dream of mine.</p>
				<p>I currently live in the Portland, Oregon area working as a Contract Recovery Specialist at Mr. Cooper.  I’m eager to start anew with my dream job, looking to relocate for a fresh start.  When I’m not honing my developer skills, I enjoying travelling, photography, watching sports, listening to music and playing mobile video games.  If you have any questions, feel free to ask.</p>
			</div>
			<Advertisement 
				color={"purple"} 
				paragraph={"View my GitHub page"} 
				image={logo} 
				link={"https://github.com/adambodie/"} 
				/>
			<div className="contact">
				<h2>Contact Me</h2>
				<p>If you'd like to contact me, the best way to do so is through email.  You can send me an email at:                    
					<h4><strong><a href="mailto:adam.m.bodie@gmail.com">adam.m.bodie@gmail.com</a></strong></h4>
				</p>                   
				<p>Of course, like any business that's not open 24 hours, I am closed for business from time to time.  Therefore, if you do send me an email after "closing hours," please note that I am not likely to respond until I'm ready to conduct business.  Please keep that in mind when sending me an email.  But I will respond, just give me time.  Thank you and have a good day!</p>
			</div>
		</div>
	</div>
);



export default About;
