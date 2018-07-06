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
}
