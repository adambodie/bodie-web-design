import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects/projects.service';
import { Project } from '../projects/howManyDaysAgo/project';

@Component({
	selector: 'app-feature',
	templateUrl: './feature.component.pug',
	styleUrls: ['./feature.component.scss'],
	providers: [ProjectsService]
})
export class FeatureComponent implements OnInit {
	constructor(private projectsService: ProjectsService) { }
	projects: Project[];  
	randomImage;
	randomLink;
	randomTitle;

	ngOnInit() {
		this.getProjects();
	}
  
	getProjects(): void {
		this.projects = this.projectsService.getProjects().slice().reverse();
		let random = Math.floor(Math.random() * this.projects.length);
		this.randomImage = this.projects[random].image;
		this.randomLink = this.projects[random].link;
		this.randomTitle = this.projects[random].title;
	}
}
