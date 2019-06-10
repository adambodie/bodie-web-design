import React, { Component } from 'react';
import '../styles/App.scss';
import store from '../store';

export default class Banner extends Component {
	render() {
	const project = store.getState().selectRandomProjects;
	const banner = `https://bodiewebdesign.com/assets/${project.banner}`;
	const styles = {
		backgroundImage: 'url(' + banner + ')',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	};
	return (
		// eslint-disable-next-line
		<a href={`http://${project.link}.bodiewebdesign.com`} className="container-fluid banner" style={styles}></a>
		);
	}
}
