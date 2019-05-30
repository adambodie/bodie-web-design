import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Pictures from './components/Pictures';
import Footer from './components/Footer';
import './styles/App.scss';

const App = () => (
	<Router>
		<div className="container-fluid">
			<Header />
			<div className="row">
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/pictures" component={Pictures} />
			</div>
			<Footer />
		</div>
	</Router>
);

export default App;
