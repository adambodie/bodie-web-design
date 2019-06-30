import React, { Component } from 'react';

import Update from './Update';
import ProjectList from './ProjectList';
import Select from './Select';
import Sort from './Sort';

import '../../styles/projects.scss';

import { connect } from 'react-redux'
import { counter, reset } from '../../store/actions';

const mapStateToProps = (state) => {
	return {
		projects: state.projects,
		uniqueLanguages: state.uniqueLanguages,
		filterList: state.filterList
	}
}

const mapDispatchToProps = { counter, reset }

class Projects extends Component {
	constructor(){
		super();
		this.state = {
			updateCount: 0,
			createCount: 0,
			titleCount: 0,
			titleOrder: 'A-Z',
			createOrder: 'Oldest',
			updateOrder: 'Oldest'
		}
		this.sortByTitle = this.sortByTitle.bind(this);
		this.sortByCreatedDate = this.sortByCreatedDate.bind(this);
		this.sortByUpdatedDate = this.sortByUpdatedDate.bind(this);
	}
	
	compareTitle(a,b) {
		if (a.title > b.title) {
			return -1;
		}
		if (a.title < b.title) {
			return 1;
		}
		return 0;
	}

	compareUpdated(a,b) {
		if (a.updated > b.updated) {
			return -1;
		}
		if (a.updated < b.updated) {
			return 1;
		}
		return 0;
	}
    compareCreated(a,b) {
		if (a.created > b.created) {
			return -1;
		}
		if (a.created < b.created) {
			return 1;
		}
		return 0;
	}
	sortByUpdatedDate() {
		let order = '';
		const { projects } = this.props;
		if (this.state.updateCount % 2 === 0) {
			projects.sort(this.compareUpdated).reverse();
			order = 'Newest';
		} else {
			projects.sort(this.compareUpdated);
			order = 'Oldest';
		}
		let newUpdateCount = this.state.updateCount;
		newUpdateCount++;
		this.setState({
			updateCount: newUpdateCount,
			updateOrder: order
			});
	}
	sortByCreatedDate() {
		let order = '';
		const { projects } = this.props;
		if (this.state.createCount % 2 === 0) {
			projects.sort(this.compareCreated).reverse();
			order = 'Newest';
		} else {
			projects.sort(this.compareCreated);
			order = 'Oldest';
		}
		let newCreateCount = this.state.createCount;
		newCreateCount++;
		this.setState({
			createCount: newCreateCount,
			createOrder: order
		});
	}
	sortByTitle() {
		let title = '';
		const { projects } = this.props;
		if (this.state.titleCount % 2 === 0) {
			projects.sort(this.compareTitle).reverse();
			title = "Z-A";
		} else {
			projects.sort(this.compareTitle);
			title = "A-Z";
		}
		let newTitleCount = this.state.titleCount;
		newTitleCount++;
		this.setState({
			titleCount: newTitleCount,
			titleOrder: title
		});

	}	
	render(){
		const { uniqueLanguages, projects, counter, filterList, reset } = this.props;
		let { titleOrder, createOrder, updateOrder } = this.state;
		return (
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
					<Sort 	sortByTitle={this.sortByTitle}
							titleOrder={titleOrder}
							sortByCreatedDate={this.sortByCreatedDate}
							createOrder={createOrder}
							sortByUpdatedDate={this.sortByUpdatedDate}
							updateOrder={updateOrder}
							/>
				</div>
				<ProjectList projects={projects} /> 
		</React.Fragment>
		)
	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects)
