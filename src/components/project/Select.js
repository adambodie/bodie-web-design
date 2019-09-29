import React, {Component} from 'react';
import '../../styles/header.scss';

export default class Select extends Component {
	constructor(props){
		super(props);
		this.handleFilterList = this.handleFilterList.bind(this);
	}

	handleFilterList(e) {
		this.props.filterList(e.target.value);
	}
	render(){
		const { uniqueLanguages, count } = this.props;
		return (
			<React.Fragment>
			<div className="option"><p><strong>Filter Projects: </strong></p></div>
			<div className="option">
				<select onChange={this.handleFilterList}>
					<option value="">All Languages</option>
					{uniqueLanguages.map((x, index)=> <option key={index} value={x}>{x}</option>)}
				</select>
			</div>
			<div className="option">
				<p>Results: {count}</p>
			</div>
			</React.Fragment>
		)
	}
}

