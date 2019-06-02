import React from 'react';
import '../styles/projects.scss'

const Projects = () => (
	<React.Fragment>
		<h1>Projects</h1>
		<div className="row project">
			<div className="col-md-6">
			<img src="https://via.placeholder.com/500x375" alt="placeholder" className="img-fluid"/>
			</div>
			<div className="col-md-6 link-descriptions">
				<h2>Project Title</h2>
				<div class="description">
					<p><strong>Created:</strong> June 1, 2019</p>
					<p><strong>Added:</strong> June 1, 2019</p>
					<br/>
					<p><strong>Updated:</strong> June 1, 2019</p>
					<p><strong>Last Updated:</strong> June 1, 2019</p>
					<br/>
					<p class="paragraph-description">Lorem ipsum dolor amet cloud bread cronut yr tilde aesthetic. Four dollar toast DIY viral pork belly swag cred mixtape post-ironic. Hexagon copper mug prism everyday carry keytar tote bag art party chambray cloud bread kickstarter, irony trust fund pok pok pop-up bicycle rights. Helvetica four dollar toast franzen, neutra aesthetic echo park live-edge pitchfork chicharrones before they sold out vice shoreditch everyday carry iPhone yuccie. Lomo unicorn cold-pressed, vape single-origin coffee +1 YOLO yuccie man bun PBR&B flexitarian.</p>
					<h3><a class="btn" href="http://bodiewebdesign.com" role="button">Check Me Out! &raquo;</a></h3>
				</div>
			</div>
		</div>
	</React.Fragment>
);

export default Projects;
