import React from 'react'
import ProjectList from './ProjectList'
import '../../styles/projects.scss'
import { connect } from 'react-redux'
import { counter, sortByTitle, sortByCreated, sortByUpdated } from '../../store/actions'

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

const mapDispatchToProps = { counter,  sortByTitle, sortByCreated, sortByUpdated }

const Projects = ({ projects }) => (
	<div className='container-fluid'>
		<h1>Projects</h1>
		<ProjectList projects={projects} /> 
	</div>
)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Projects)
