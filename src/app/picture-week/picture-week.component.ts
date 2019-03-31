import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import axios from 'axios';

@Component({
  selector: 'app-picture-week',
  templateUrl: './picture-week.component.pug',
  styleUrls: ['./picture-week.component.scss']
})
export class PictureWeekComponent implements OnInit {
	constructor() { }
	newest: any = new Object('');
	ngOnInit() {
		this.fetch();
	}
	fetch() {
		axios.get('../assets/data/pictures.json')
			.then(response => {
				const picture = response.data;
				this.newest = picture.pop();
			})
			.catch(e => {
				console.log(e);
			})
		}
}
