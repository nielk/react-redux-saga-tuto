// actions.js

const ACTIONS = {
	ADD_TODO: 'ADD_TODO',
	TOGGLE_TODO: 'TOGGLE_TODO',
	SHOW_ALL_TODO: 'SHOW_ALL_TODO',
	SHOW_COMPLETED_TODO: 'SHOW_COMPLETED_TODO'
}

const addTodo = text => ({ type: ACTIONS.ADD_TODO, text })
const toggleTodo = index => ({ type: ACTIONS.TOGGLE_TODO, index })
const showAllTodo = () => ({ type: ACTIONS.SHOW_ALL_TODO })
const showCompletedTodo = () => ({ type: ACTIONS.SHOW_COMPLETED_TODO })

export {
	ACTIONS,
	addTodo,
	toggleTodo,
	showAllTodo,
	showCompletedTodo
}
