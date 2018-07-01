import { Injectable } from '@angular/core';
import { Project } from '../properties/project';
import {PROJECTS} from '../mock-projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  getPictures(): Project[] {
    return PROJECTS;
  }
}
