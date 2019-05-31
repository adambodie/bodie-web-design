import React from 'react';
import Advertisement from './Advertisement';
import logo from "../assets/linkedin-icon.png"

const Home = () => (
	<div>
	<div className="container-fluid">
		<img src="https://via.placeholder.com/1300x250" alt="placeholder" className="img-fluid"/>
	</div>
		<div className="container">
			<h2>Welcome to Bodie Web Design</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus, eros et euismod interdum, enim dolor auctor ligula, et placerat magna tortor a tortor. Nulla ut risus turpis. Duis tempus interdum metus, sit amet consectetur augue facilisis quis. Morbi neque ex, auctor a lacus vel, aliquam gravida augue. Aenean auctor quam a tellus aliquam feugiat.</p>
			<Advertisement 
				color={"#283e4a"} 
				paragraph={"View my LinkedIn Profile"} 
				image={logo} 
				link={"https://www.linkedin.com/in/adam-bodie/"} 
				/>
			<h1>Projects</h1>
			<div className="row">
				<div className="col-md-6">
				<img src="https://via.placeholder.com/500x375" alt="placeholder" className="img-fluid"/>
				</div>
				<div className="col-md-6">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus, eros et euismod interdum, enim dolor auctor ligula, et placerat magna tortor a tortor. Nulla ut risus turpis. Duis tempus interdum metus, sit amet consectetur augue facilisis quis. Morbi neque ex, auctor a lacus vel, aliquam gravida augue. Aenean auctor quam a tellus aliquam feugiat.</p>
				</div>
			</div>
		</div>
	</div>
);



export default Home;
