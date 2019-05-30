import React from 'react';
import { Link } from "react-router-dom";
import '../styles/header.scss';
import logo from '../bodie-web-design.jpg';

const Header = () => {
	return (
	<div className="row">
		<nav className="navbar navbar-expand-md navbar-dark bg-dark navbar-header" id="topbar">
			<img src={logo} alt="Bodie Web Design" />
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbar1">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<Link to="/" className="nav-link">Home</Link>
						</li>
						<li className="nav-item">
							<Link to="/about" className="nav-link">About</Link>
						</li>
						<li className="nav-item">
							<Link to="/pictures" className="nav-link">Pictures</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
		);
}

export default Header;
