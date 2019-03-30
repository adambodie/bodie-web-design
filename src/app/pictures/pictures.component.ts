import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
	selector: 'app-pictures',
	templateUrl: './pictures.component.pug',
	styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {
	constructor() { }
	pictures;
	p: number = 1;
	ngOnInit() {
		this.fetchAll();
	}
	fetchAll(){
		axios.get('../assets/pictures.json')
			.then(response => {
				this.pictures = response.data.slice().reverse();
			})
			.catch(e => {
				console.log(e);
			})
		}
}
