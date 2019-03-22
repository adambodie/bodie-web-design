import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.pug',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
	fullDate = new Date();

	ngOnInit() {}
	thanksgivingDate(year) {
		let moveToThursday, november, day;
		november = new Date(year, 10, 1);
		day = november.getDay();
		if (day === 4) {
			moveToThursday = 0;
		} else if (day === 5 || day === 6) {
			moveToThursday = 11 - day;
		} else {
			moveToThursday = 4 - day;
		}
		return november.getDate() + moveToThursday + 21;
	}
	memorialDate(year) {
		let may, moveToMonday, day;
		may = new Date(year, 4, 1);
		day = may.getDay();
		if (day === 1) {
			moveToMonday = 8;
		} else if (day === 0) {
			moveToMonday = 9;
		} else if (day === 6) {
			moveToMonday = 10;
		} else {
			moveToMonday = 9 - day;
		}
		return may.getDate() + moveToMonday + 20;
		};
	laborDate(year) {
		let moveToMonday, sept, day;
		sept = new Date(year, 8, 1);
		day = sept.getDay();
		if (day === 1) {
			moveToMonday = 0;
		} else if (day === 0) {
			moveToMonday = 1;
		} else {
			moveToMonday = 8 - day;
		}
		return sept.getDate() + moveToMonday;
	} 
	open(date) {
		let fullDate = new Date(date);
		let year: number = fullDate.getFullYear();
		let month: number = fullDate.getMonth();
		let day: number = fullDate.getDate();
		let hours: number = fullDate.getHours();
		if (month === 0 && day === 1) {
			return "Closed - New Year's Day.";
		}
		if (month === 6 && day === 4) {
			return "Closed - Independence Day";
		}
		if (month === 11 && day === 25) {
			return "Closed - Christmas";
		}
		if (month === 4 && day === this.memorialDate(year)) {
			return "Closed - Memorial Day";
		}
		if (month === 8 && day === this.laborDate(year)) {
			return "Closed - Labor Day";
		}
		if (month === 10 && day === this.thanksgivingDate(year)) {
			return "Closed - Thanksgiving";
		}
		if (day === 0 || day === 6) {
			return "Closed";
		}
		if (hours >= 7 && hours <= 19) {
			return "Open - Hours from 7:00AM - 8:00PM.";
		} else {
			return "Closed";
		}
	};
	current = this.open(this.fullDate);
}
