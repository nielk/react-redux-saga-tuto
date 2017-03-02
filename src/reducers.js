import { ACTIONS } from './actions'

const initialState = {
  show: 'ALL', // 'COMPLETED'
  todos: [
    {completed: true, text: 'Lorem ipsum'},
    {completed: true, text: 'Ipsum loreat sit amet'},
    {completed: true, text: 'sit amet loreat ipsum'},
    {completed: true, text: 'Amet sit ipsum loreat'}
  ]
}

function todos(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat({
          text: action.text,
          completed: false
        })
      }
    case ACTIONS.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            })
          }
          return todo
        })
      }
    case ACTIONS.SHOW_ALL_TODO:
      return {
        ...state,
        show: 'ALL'
      }
    case ACTIONS.SHOW_COMPLETED_TODO:
      return {
        ...state,
        show: 'COMPLETED'
      }
    default:
      return state
  }
}

export default todos
