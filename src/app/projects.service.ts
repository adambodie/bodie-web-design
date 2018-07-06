import { Injectable } from '@angular/core';
import { Project } from '../properties/project';
import {PROJECTS} from '../mock-projects';
import {MOBILEPROJECTS} from '../mock-projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  getProjects(): Project[] {
    return PROJECTS;
  }
  getMobileProjects(): Project[] {
    return MOBILEPROJECTS;
  }  
}
