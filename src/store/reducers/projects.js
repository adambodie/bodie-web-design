import { PROJECTS } from '../constants/projects'

export const selectRandomProjects = (state = '') => {
	const banners = []
	let projectCopy = Object.assign([], PROJECTS)
	for (let i = 0; i < 3; i++) {
		let random = Math.floor(Math.random() * projectCopy.length)
		let project = projectCopy[random]
		banners.push(project)
		projectCopy.splice(random, 1)
	}
	state = banners
	return state
}
