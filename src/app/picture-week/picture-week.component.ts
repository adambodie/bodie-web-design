import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-picture-week',
  templateUrl: './picture-week.component.pug',
  styleUrls: ['./picture-week.component.scss']
})
export class PictureWeekComponent implements OnInit {
	constructor() { }
	newest = new Object('');
	ngOnInit() {
		this.fetchAll();
	}
	fetchAll() {
		axios.get('../assets/pictures.json')
			.then(response => {
				const picture = response.data;
				this.newest = picture.pop();
			})
			.catch(e => {
				console.log(e);
			})
		}
}
