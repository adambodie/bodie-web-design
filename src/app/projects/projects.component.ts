import { Component, OnInit } from '@angular/core';
import {ProjectsService} from '../projects.service';
import {Project} from '../../properties/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.pug',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private projectsService: ProjectsService) { }
  projects: Project[];

  ngOnInit() {
    this.getProjects();
  }
  getProjects(): void {
    this.projects = this.projectsService.getPictures().slice().reverse();
  }
}
