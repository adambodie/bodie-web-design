import { COUNTER } from '../constants'
import { PROJECTS } from '../constants/projects'

export function filterList(state = 11, action) {
	switch (action.type) {
		case COUNTER:
			let newCount = 0
			const language = action.text
			for (let item of PROJECTS) {
				if (language === '') {
					for (let item of PROJECTS) {
						item.visible = true
					}
					state = 11
					return state
					}
				for (let x of item.languages) {
					if (x.name === language) {
						newCount++
						item.visible = true
						break
					} else {
						item.visible = false
					}
				}
			}
			state = newCount
			return state
		default:
			return state
	}
}
