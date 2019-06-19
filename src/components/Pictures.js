import React, { Component } from 'react';
import axios from 'axios';
import '../styles/pictures.scss';
import ReactPaginate from 'react-paginate';

export default class Pictures extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			offset: 0,
		};
	}
	
	loadPhotos() {
		let pictureData = 'https://bodiewebdesign.com/assets/data/pictures.json';
		  axios.get(pictureData)
			.then(response => {
				this.setState({
					data: response.data.reverse(),
					pageCount: Math.ceil(response.data.length / 9)
				});
			})
			.catch(error => {
			  console.log('Error fetching and parsing Items data', error);
			});
	}
	
	componentDidMount() {
		this.loadPhotos()
	};
	
	handlePageClick = (data) => {
		let selected = data.selected;
		let offset = Math.ceil(selected * 9);
		this.setState({offset: offset}, () => {
			this.loadPhotos();
		});
	};
	
	render(){
		const { data, offset } = this.state;
		return (
			<div className="container">
				<h1>Picture Gallery</h1>   
					<ul className="list">
						{data.map((item, index) => {
							if (index >= offset && index < offset + 9) {
								return(
									<li key={index}>
										<img src={`https://bodiewebdesign.com/assets/${item.image}`} alt={item.alt} className="img-fluid"/>
									</li>
								)
							}
							return null
						})}
					</ul>
				<ReactPaginate previousLabel={"<"}
						   nextLabel={">"}
						   breakClassName={"break-me"}
						   pageCount={this.state.pageCount}
						   marginPagesDisplayed={5}
						   pageRangeDisplayed={1}
						   onPageChange={this.handlePageClick}
						   containerClassName={"pagination"}
						   subContainerClassName={"pages pagination"}
						   activeClassName={"active"} />
	</div>
		)
	}
}
