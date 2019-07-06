import React, {Component} from 'react';
import '../../styles/projects.scss';

export default class Sort extends Component {
	constructor(props){
		super(props);
		this.handleSortByTitle = this.handleSortByTitle.bind(this);
		this.handleSortByCreatedDate = this.handleSortByCreatedDate.bind(this);
		this.handleSortByUpdatedDate = this.handleSortByUpdatedDate.bind(this);
	}
	
	handleSortByUpdatedDate(e) {
		this.props.sortByUpdatedDate(e.target.value);
	}
	handleSortByCreatedDate(e) {
		this.props.sortByCreatedDate(e.target.value);
	}
	handleSortByTitle(e) {
		this.props.sortByTitle(e.target.value);

	}	
	render(){
		const { titleOrder, createOrder, updateOrder } = this.props;
		return (
			<div className="col-lg-6">
				<h3>Sort Projects</h3>
				<div className="row">
					<div className="col-md-4">
						<button className="btn" onClick={this.handleSortByTitle}>Title {titleOrder}</button>
					</div>
					<div className="col-md-4">
						<button className="btn" onClick={this.handleSortByCreatedDate}>Create {createOrder}</button>
					</div>
					<div className="col-md-4">
						<button className="btn" onClick={this.handleSortByUpdatedDate}>Update {updateOrder}</button>
					</div>
				</div>
			</div>
		)
	}
}

