import React, { Component } from 'react';
import PictureModal from './PictureModal';
import PictureOverlay from './PictureOverlay';
import axios from 'axios';
import '../../styles/pictures.scss';
import ReactPaginate from 'react-paginate';
import Modal from 'react-modal';

export default class Pictures extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			offset: 0,
			modalIsOpen: false
		};
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}
	openModal(e, index) {
		const { data } = this.state;
		let thisData = data[index];
		this.setState({
			modalIsOpen: true,
			thisData: thisData
		});
	}

	closeModal() {
		this.setState({modalIsOpen: false});
	}
	loadPhotos() {
		axios.get('https://bodiewebdesign.com/assets/data/pictures.json')
			.then(response => {
				this.setState({
					data: response.data.reverse(),
					pageCount: Math.ceil(response.data.length / 9)
				});
			})
			.catch(error => {
			  console.log('Error fetching and parsing Items data');
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
		const { data, offset, pageCount, thisData, modalIsOpen } = this.state;
		return (
			<div className="container">
				<h1>Picture Gallery</h1>   
					<div className="flex-picture">
						{data.map((item, index) => {
							if (index >= offset && index < offset + 9) {
								return(
									<div key={index} className="photo" onClick={()=> {this.openModal(this, index)}}>
										<img src={`https://bodiewebdesign.com/assets/${item.image}`} alt={item.alt} className="img-fluid"/>
										<PictureOverlay item={item} />
									</div>
								)
							}
							return null
						})}
					</div>
					{modalIsOpen === true &&
						<Modal
							isOpen={modalIsOpen}
							onRequestClose={this.closeModal}
							contentLabel='Picture Modal'
							appElement={document.getElementById('root')}
						>
						<PictureModal thisData={thisData} />
						<button className="close-button" onClick={()=> {this.closeModal()}}>x</button>
						</Modal>
					}
				<ReactPaginate 
					previousLabel={"<<"}
					nextLabel={">>"}
					breakClassName={"break-me"}
					pageCount={pageCount}
					marginPagesDisplayed={2}
					pageRangeDisplayed={1}
					onPageChange={this.handlePageClick}
					containerClassName={"pagination"}
					subContainerClassName={"pages pagination"}
					activeClassName={"active"} 
				/>
		</div>
		)
	}
}



