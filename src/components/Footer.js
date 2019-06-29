import React from 'react';
import '../styles/footer.scss';
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return { footerDate: state.footerDate };
};

const Footer = ({footerDate}) => (
	<div className="row">
		<nav className="navbar navbar-inverse navbar-bottom" id="footer">
			<p className="block" id="year">Adam Bodie &copy; {footerDate}</p>
		</nav>
	</div>
);

export default connect(mapStateToProps)(Footer);
