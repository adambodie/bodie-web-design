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
	mobileProjects: Project[];
	uniqueOptions;
	ngOnInit() {
		this.getProjects();
		this.uniqueLanguageList();
	}
  
	getProjects(): void {
		this.projects = this.projectsService.getProjects().slice().reverse();
		this.mobileProjects = this.projectsService.getMobileProjects().slice().reverse();
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
