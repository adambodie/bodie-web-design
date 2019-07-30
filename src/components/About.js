import React from 'react';
import '../styles/about.scss';
import Advertisement from './Advertisement';
import github from '../assets/github-icon.png';
import linkedin from '../assets/linkedin-icon.png';
import author from '../assets/author.jpg';

const About = () => (
	<div className="container">
		<h1>About Me</h1>
		<div className="row">
			<div className='about'>
				<h3>Who is Adam Bodie?</h3>
				<img src={author} alt="Adam" id="adam" className="img-fluid" />
				<h5>Passion, Efficiency, Respect:</h5>
				<p>These are three qualities which define my character not only as a develop, but as a person.  As you read about me, you will understand how these characteristics shape who I am as a person.</p>
				<p>Creativeness is something that has always been in my genes. From drawing and painting as a teenager to my love of photography in the present day, I have always felt the need to create visually appealing things.  So when a friend suggested a career in web development, it felt like the perfect career for me.  And with that, a passion for programming was born.</p>
				<p>That journey started late in 2013, where I became instantly hooked to creating projects through coding.  Combining my creative talents with my knack for problem solving algorithms, I felt it would make the best of my talents.  That led me to start teaching myself, through various online courses, learning the basic principles of coding.  I sampled some of the most popular programming languages: Java, Ruby, Python, even Perl.  But fascinated with combining front-end and back-end methods to utilize my skills, I found myself in a groove with JavaScript.  Eventually, while stumbling upon a flyer at WorkSource Oregon in 2015, I learned of a program called Code Oregon, where I signed up for online teaching website; Treehouse.  There, I came to the conclusion that I should consolidate my knowledge and focus on what I felt would be my most effective talents; JavaScript.</p>
				<Advertisement 
					color={"#283e4a"} 
					paragraph={"View my LinkedIn Profile"} 
					image={linkedin} 
					link={"https://www.linkedin.com/in/adam-bodie/"} 
				/>
				<p>As someone who strives to be the 'expert of things', I'm always learning new tricks of the trade, not only to keep myself updated with current trends, but also hone my skills to become the most efficient developer I can be.  Treehouse provided me the avenue to become the best developer I can be.  Always learning new techniques, paradigms, and ways of practicing what I learned, I found myself perfecting my talents.  Thanks to Treehouse, I learned to develop in better, presentable ways, by combining my love for the Front End, with Back End methods to help build my code.  One particular way I code is by building projects with React.  Javascript frameworks, to me, are a great way to build projects from start to finish, and though I've also built projects with Vue and Angular, amongst others, I feel a particular affinity for React.</p>
				<p>Throughout my life, I've shown my talents with efficiency and dedication to the job.  When it comes to my work ethic, I am always focused on the task at hand.  Making sure I do the job right and getting it done as quick as I can are important to me.  With my innate abilities to recall vast bits of information required to complete the challenge, I know that I can please any employer out there.  </p>
				<p>I currently live in the Portland, Oregon area working as a Contract Recovery Specialist at Mr. Cooper.  I’m eager to start anew with my dream job, looking to relocate for a fresh start.  When I’m not honing my developer skills, I enjoying travelling, photography, watching sports, listening to music and playing mobile video games.  If you have any questions, feel free to ask.</p>
			</div>
			<Advertisement 
				color={"purple"} 
				paragraph={"View my GitHub page"} 
				image={github} 
				link={"https://github.com/adambodie/"} 
				/>
			<div className="contact">
				<h2>Contact Me</h2>
				<p>If you'd like to contact me, the best way to do so is through email.  You can send me an email at:</p>
				<h4><strong><a href="mailto:adam.m.bodie@gmail.com">adam.m.bodie@gmail.com</a></strong></h4>
			</div>
		</div>
	</div>
);



export default About;
