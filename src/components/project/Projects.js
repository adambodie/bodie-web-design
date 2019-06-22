import React, {Component} from 'react';
import '../../styles/projects.scss';
import Update from './Update';
import Project from './Project';
import store from '../../store';

export default class Projects extends Component {
	constructor(){
		super();
		this.state = {
			count: 0
		}
		this.filterList = this.filterList.bind(this);
	}
	
	filterList(event){
		let newCount = 0;
		for (let item of store.getState().projects) {
			for (let x of item.languages) {
				if (x.name === event.target.value) {
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
	render(){
		let { uniqueLanguages, projects } = store.getState();
		return (
			<React.Fragment>
				<h1>Projects</h1>
				<Update />
				<div className="row filter">
					<div className="col-md-6">
						<h3>Filter Projects</h3>
						<div className="row">
							<div className="col-md-5">
							<select onChange={this.filterList}>
								<option value="">Filter by Technology...</option>
								{uniqueLanguages.map((x, index)=> <option key={index} value={x}>{x}</option>)}
							</select>
							</div>
							<div className="col-md-4">
								<button className="btn" onClick={() => console.log("Testing")}>Reset</button>
							</div>
							<div className="col-md-3">
								<h5>Results {this.state.count}</h5>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<h3>Sort Projects</h3>
						<div className="row">
							<div className="col-md-4">
								<a className="btn" href="/">Title</a>
							</div>
							<div className="col-md-4">
								<a className="btn" href="/">Created Order</a>
							</div>
							<div className="col-md-4">
								<a className="btn" href="/">Updated Order</a>
							</div>
						</div>
					</div>
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

