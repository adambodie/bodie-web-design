import React, {Component} from 'react'
import '../../styles/header.scss'

export default class Sort extends Component {
	constructor(props){
		super(props)
		this.handleSortByTitle = this.handleSortByTitle.bind(this)
		this.handleSortByCreatedDate = this.handleSortByCreatedDate.bind(this)
		this.handleSortByUpdatedDate = this.handleSortByUpdatedDate.bind(this)
	}
	
	handleSortByUpdatedDate(e) {
		this.props.sortByUpdatedDate(e.target.value)
	}
	handleSortByCreatedDate(e) {
		this.props.sortByCreatedDate(e.target.value)
	}
	handleSortByTitle(e) {
		this.props.sortByTitle(e.target.value)
	}	
	render(){
		const { titleOrder, createOrder, updateOrder } = this.props;
		return (
			<React.Fragment>
				<div className='option'><p><strong>Sort Projects: </strong></p></div>
				<div className='option'>
					<button className='header-btn' onClick={this.handleSortByTitle}>Project Title {titleOrder}</button>
				</div>
				<div className='option'>
					<button className='header-btn' onClick={this.handleSortByCreatedDate}>Create Date {createOrder}</button>
				</div>
				<div className='option'>
					<button className='header-btn' onClick={this.handleSortByUpdatedDate}>Update Date {updateOrder}</button>
				</div>
			</React.Fragment>
		)
	}
}