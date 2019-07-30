import React from 'react';
import '../styles/footer.scss';

const Footer = () => (
	<div className="row">
		<nav className="navbar navbar-inverse navbar-bottom" id="footer">
			<p className="block" id="year">Adam Bodie &copy; {new Date().getFullYear()}</p>
		</nav>
	</div>
);

export default Footer;
