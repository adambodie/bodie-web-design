import { Injectable } from '@angular/core';
import { Project } from './howManyDaysAgo/project';
import { PROJECTS } from './howManyDaysAgo/mock-projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
	getProjects(): Project[] {
		return PROJECTS;
	}
}
