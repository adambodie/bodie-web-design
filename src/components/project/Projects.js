import React, {Component} from 'react';
import '../../styles/projects.scss';
import Update from './Update';
import Project from './Project';
import Select from './Select';
import Sort from './Sort';
import store from '../../store';

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
		for (let item of store.getState().projects) {
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
		for (let item of store.getState().projects) {
			item.visible = true;
			}
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
		if (this.state.updateCount % 2 === 0) {
			store.getState().projects.sort(this.compareUpdated).reverse();
			this.setState({updateOrder: 'Newest'});
		} else {
			store.getState().projects.sort(this.compareUpdated);
			this.setState({updateOrder: 'Oldest'});
		}
		let newUpdateCount = this.state.updateCount;
		newUpdateCount++;
		this.setState({updateCount: newUpdateCount});
	}
	sortByCreatedDate() {
		if (this.state.createCount % 2 === 0) {
			store.getState().projects.sort(this.compareCreated).reverse();
			this.setState({updateOrder: 'Newest'});
		} else {
			store.getState().projects.sort(this.compareCreated);
			this.setState({updateOrder: 'Oldest'});
		}
		let newCreateCount = this.state.createCount;
		newCreateCount++;
		this.setState({createCount: newCreateCount});
	}
	sortByTitle() {
		if (this.state.titleCount % 2 === 0) {
			store.getState().projects.sort(this.compareTitle).reverse();
			this.setState({titleOrder: "Z-A"});
		} else {
			store.getState().projects.sort(this.compareTitle);
			this.setState({titleOrder: "A-Z"});
		}
		let newTitleCount = this.state.titleCount;
		newTitleCount++;
		this.setState({titleCount: newTitleCount});

	}	
	render(){
		let { uniqueLanguages, projects } = store.getState();
		return (
			<React.Fragment>
				<h1>Projects</h1>
				<Update />
				<div className="row filter">
					<Select	filterList={this.filterList}
							resetFilter={this.resetFilter}
							uniqueLanguages={uniqueLanguages}
							count={this.state.count}
							projects={projects}
					/>
					<Sort 	sortByTitle={this.sortByTitle}
							titleOrder={this.state.titleOrder}
							sortByCreatedDate={this.sortByCreatedDate}
							createOrder={this.state.createOrder}
							sortByUpdatedDate={this.sortByUpdatedDate}
							updateOrder={this.state.updateOrder}
							/>
				</div> 
			{projects.map((x, index) => {
				if (x.visible === true) {
					return (
					<Project 
						key={index}
						image={x.image}
						alt={x.alt}
						languages={x.languages}
						title={x.title}
						created={x.created} 
						createdAt={x.createdAt} 
						updated={x.updated} 
						updatedAt={x.updatedAt} 
						description={x.description} 
						link={x.link}
					/>)
				}
				return null
			})}
		</React.Fragment>
		)
	}
}

