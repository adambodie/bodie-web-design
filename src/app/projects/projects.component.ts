import { Component, OnInit } from '@angular/core';
import {ProjectsService} from '../services/projects.service';
import {Project} from '../../properties/project';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.pug',
	styleUrls: ['./projects.component.scss'],
	providers: [ProjectsService]
})
export class ProjectsComponent implements OnInit {
	constructor(private projectsService: ProjectsService) { }
	projects: Project[];
	uniqueOptions;
	createCount = 0;
	updateCount = 0;
	titleCount = 0;
	createOrder = 'Oldest';
	updateOrder = 'Oldest';
	titleOrder = 'A-Z';
	
	months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	
	ngOnInit() {
		this.getProjects();
		this.uniqueLanguageList();
	}
	  
	getProjects(): void {
		this.projects = this.projectsService.getProjects().slice().reverse();
	}

    compareTitle(a,b) {
		if (a.title > b.title) {
			return -1;
		}
		if (a.title < b.title) {
			return 1;
		}
		return 0;
	}

    compareUpdated(a,b) {
		if (a.updated > b.updated) {
			return -1;
		}
		if (a.updated < b.updated) {
			return 1;
		}
		return 0;
	}
    compareCreated(a,b) {
		if (a.created > b.created) {
			return -1;
		}
		if (a.created < b.created) {
			return 1;
		}
		return 0;
	}	
	uniqueLanguageList()  {
		const options = [];
		this.uniqueOptions = [];
		this.projects.forEach((option) => {
			options.push(...option.languages);
		});
		options.forEach((option) => {
			if(!this.uniqueOptions.includes(option.name)) {
				this.uniqueOptions.push(option.name);
			}
		});
		return this.uniqueOptions.sort();
	}  
	sortByUpdatedDate() {
		if (this.updateCount % 2 == 0) {
			this.projects.sort(this.compareUpdated).reverse();
			this.updateOrder = "Newest";
		} else {
			this.projects.sort(this.compareUpdated);
			this.updateOrder = "Oldest"
		}
		this.updateCount++;
	}
	sortByCreatedDate() {
		if (this.createCount % 2 == 0) {
			this.projects.sort(this.compareCreated).reverse();
			this.createOrder = "Newest";
		} else {
			this.projects.sort(this.compareCreated);
			this.createOrder = "Oldest"
		}
		this.createCount++;
	}
	sortByTitle() {
		if (this.titleCount % 2 == 0) {
			this.projects.sort(this.compareTitle).reverse();
			this.titleOrder = "Z-A";
		} else {
			this.projects.sort(this.compareTitle);
			this.titleOrder = "A-Z"
		}
		this.titleCount++;
	}		
	filterList(){
		for (let item of this.projects) {
			for (let x of item.languages) {
				if (x.name == (<HTMLInputElement>event.target).value) {
					item.visible = true;
					break;
				} else {
					item.visible = false;
				}
			}
		}
	}
	
	reset(){
		for (let item of this.projects) {
			item.visible = true;
		}
	}
}
