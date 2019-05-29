import React from 'react';
import '../styles/App.scss';
import logo from '../bodie-web-design.jpg';

const Header = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-dark bg-dark" id="topbar">
			<img src={logo} alt="Bodie Web Design" />
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarsExample04">
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
