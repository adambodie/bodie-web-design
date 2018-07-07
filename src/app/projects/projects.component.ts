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

  ngOnInit() {
    this.getProjects();
  }
  getProjects(): void {
    this.projects = this.projectsService.getProjects().slice().reverse();
    this.mobileProjects = this.projectsService.getMobileProjects().slice().reverse();
  }
  updates = [
    {
      title: "Read Your Fortune Cookie",
      description: "Upgraded to Angular & TypeScript, January 28, 2018"
    },
    {
      title: "NFL Passer Rating",
      description: "Reconfigured components to allow flexibility of button colors, January 7, 2018"
    },      
    {
      title: "Dreidel Duel",
      description: "Added new feature, converted syntax to ES6, January 1, 2018"
    },       
    {
      title: "Reno Nice 'n' Cool",
      description: "Launched version 2.0 December 11, 2017, built with Vue.js"
    },      
    {
      title: "Adam's Adventures",
      description: "Launched November 23, 2017, built with React"
    },
    {
      title: "Adam's Wild Wild West",
      description: "Launched October 1, 2017, built with React"
    }
  ]
}
