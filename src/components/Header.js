import React from 'react';
import '../styles/header.scss';
import logo from '../bodie-web-design.jpg';

const Header = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-dark bg-dark navbar-header" id="topbar">
			<img src={logo} alt="Bodie Web Design" />
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbar1">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Link</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled" href="#">Disabled</a>
						</li>
					</ul>
				</div>
			</nav>
		);
}

export default Header;
