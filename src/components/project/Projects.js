import React from 'react';
import Update from './Update';
import ProjectList from './ProjectList';
import Select from './Select';
import Sort from './Sort';
import '../../styles/projects.scss';
import { connect } from 'react-redux'
import { counter, reset, sortByTitle, sortByCreated, sortByUpdated } from '../../store/actions';

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

const mapDispatchToProps = { counter, reset, sortByTitle, sortByCreated, sortByUpdated }

const Projects = ({ uniqueLanguages, projects, counter, filterList, reset, sortByTitle, titleOrder, sortByCreated, createdOrder, updatedOrder, sortByUpdated }) => (
	<React.Fragment>
		<h1>Projects</h1>
		<Update />
		<div className="row filter">
			<Select	filterList={counter}
					resetFilter={reset}
					uniqueLanguages={uniqueLanguages}
					count={filterList}
					projects={projects}
			/>
			<Sort 	sortByTitle={sortByTitle}
					titleOrder={titleOrder}
					sortByCreatedDate={sortByCreated}
					createOrder={createdOrder}
					sortByUpdatedDate={sortByUpdated}
					updateOrder={updatedOrder}
			/>
		</div>
		<ProjectList projects={projects} /> 
	</React.Fragment>
)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Projects)
