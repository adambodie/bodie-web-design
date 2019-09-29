import React from 'react';
import '../styles/header.scss';
import logo from '../assets/bodie-web-design.jpg';
import Select from './project/Select';
import Sort from './project/Sort';
import Update from './project/Update';
import '../styles/projects.scss';
import { connect } from 'react-redux'
import { counter, sortByTitle, sortByCreated, sortByUpdated } from '../store/actions';

const mapStateToProps = state => {
	return {
		projects: state.projects,
		uniqueLanguages: state.uniqueLanguages,
		filterList: state.filterList,
		titleOrder: state.sortByTitle.titleOrder,
		createdOrder: state.sortByCreated.createdOrder,
		updatedOrder: state.sortByUpdated.updatedOrder
	}
}

const mapDispatchToProps = { counter, sortByTitle, sortByCreated, sortByUpdated }

const Header = ({ uniqueLanguages, projects, counter, filterList, sortByTitle, titleOrder, sortByCreated, createdOrder, updatedOrder, sortByUpdated }) =>  (
	<div className="fixed-top">
		<nav className="navbar navbar-expand-md navbar-dark bg-dark navbar-header" id="topbar">
			<img src={logo} alt="Bodie Web Design" />
			<div className="collapse navbar-collapse" id="navbar1">
				<Select
					filterList={counter}
					uniqueLanguages={uniqueLanguages}
					count={filterList}
					projects={projects}
				/>
				<Sort
						sortByTitle={sortByTitle}
						titleOrder={titleOrder}
						sortByCreatedDate={sortByCreated}
						createOrder={createdOrder}
						sortByUpdatedDate={sortByUpdated}
						updateOrder={updatedOrder}
				/>
			</div>
			<Update />
		</nav>
		
	</div>
);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header)
