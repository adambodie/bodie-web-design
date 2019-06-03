import React from 'react';
import { Link } from "react-router-dom";
import '../styles/header.scss';
import logo from '../assets/bodie-web-design.jpg';
import store from '../store';

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
						{store.getState().links.map((x, index) => 
							<li className="nav-item" key={index}>
								<Link to={x.link} className="nav-link">{x.name}</Link>
							</li>
						)}
					</ul>
				</div>
			</nav>
		</div>
		);
}

export default Header;
