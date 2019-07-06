import React, {Component} from 'react';
import '../../styles/projects.scss';

export default class Select extends Component {
	constructor(props){
		super(props);
		this.handleResetFilter = this.handleResetFilter.bind(this);
		this.handleFilterList = this.handleFilterList.bind(this);
	}
	
	handleResetFilter(e) {
		this.props.resetFilter(e.target.value);
	}
	handleFilterList(e) {
		this.props.filterList(e.target.value);
	}
	render(){
		const { uniqueLanguages, count } = this.props;
		return (
			<div className="col-lg-6">
				<h3>Filter Projects</h3>
					<div className="row">
						<div className="col-md-4">
							<select onChange={this.handleFilterList}>
								<option value="">Filter...</option>
								{uniqueLanguages.map((x, index)=> <option key={index} value={x}>{x}</option>)}
							</select>
							</div>
							<div className="col-md-4">
								<button className="btn" onClick={this.handleResetFilter}>Reset</button>
							</div>
							<div className="col-md-4">
								<h5 className="results">Results {count}</h5>
							</div>
						</div>
					</div>
		)
	}
}

