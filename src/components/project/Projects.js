import React, {Component} from 'react';
import '../../styles/projects.scss';
import Update from './Update';
import ProjectList from './ProjectList';
import Select from './Select';
import Sort from './Sort';

export default class Projects extends Component {
	constructor(){
		super();
		this.state = {
			count: 10,
			updateCount: 0,
			createCount: 0,
			titleCount: 0,
			titleOrder: 'A-Z',
			createOrder: 'Oldest',
			updateOrder: 'Oldest'
		}
		this.filterList = this.filterList.bind(this);
		this.resetFilter = this.resetFilter.bind(this);
		this.sortByTitle = this.sortByTitle.bind(this);
		this.sortByCreatedDate = this.sortByCreatedDate.bind(this);
		this.sortByUpdatedDate = this.sortByUpdatedDate.bind(this);
	}
	
	filterList(event){
		let newCount = 0;
		const { projects } = this.props;
		for (let item of projects) {
			for (let x of item.languages) {
				if (x.name === event) {
					item.visible = true;
					newCount++;
					break;
				} else {
					item.visible = false;
				}
			}
		}
		this.setState({count: newCount});
	}
	resetFilter() {
		const { projects } = this.props;
		for (let item of projects) {item.visible = true}
		this.setState({count: 10});
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
		const { uniqueLanguages, projects } = this.props;
		let { count, titleOrder, createOrder, updateOrder } = this.state;
		return (
			<React.Fragment>
				<h1>Projects</h1>
				<Update />
				<div className="row filter">
					<Select	filterList={this.filterList}
							resetFilter={this.resetFilter}
							uniqueLanguages={uniqueLanguages}
							count={count}
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

