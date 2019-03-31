import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
	selector: 'app-update',
	templateUrl: './update.component.pug',
	styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
	constructor() { }
	updates;
	
	ngOnInit() {
		this.fetchAll();
	}

	fetchAll(){
		axios.get('../assets/data/update.json')
			.then(response => {
				this.updates = response.data;
			})
			.catch(e => {
				console.log(e);
			})
		}
	
}
