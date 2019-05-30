import React from 'react';
import '../styles/footer.scss';
import store from '../store';

const Footer = () => {
	return (
		<div className="row">
			<nav className="navbar navbar-inverse navbar-bottom" id="footer">
				<p className="block" id="year">Adam Bodie &copy; {store.getState().footerDate}</p>
			</nav>
		</div>
		);
}

export default Footer;
