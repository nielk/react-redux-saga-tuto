import React from 'react'
import { render } from 'react-dom'
import App from './App'
import './index.css';


render(
  <App />,
  document.getElementById('root')
)

// [ ] draw App schema

// @TODO:
// [ ] define actions "name"
// [ ] implement action creators
// [ ] add todo action
// [ ] complete todo action
// [ ] show All, Completed
// [ ] Create initial state
// [ ] Create reducers
// [ ] Add store in index.js
// [ ] Inject store into app
// [ ] Add action to AddTodo (container?)
// [ ] VisibleTodoList container
// [ ] Footer connect() + showAllTodo et showCompletedTodo

// res: http://redux.js.org/docs/basics/

// # define actions
// ==============================
// ADD_TODO
// TOGGLE_TODO
// SHOW_COMPLETED_TODO
// SHOW_ALL_TODO

// actions.js

// const ACTIONS = {
//   ADD_TODO: 'ADD_TODO',
//   TOGGLE_TODO: 'TOGGLE_TODO',
//   SHOW_ALL_TODO: 'SHOW_ALL_TODO',
//   SHOW_COMPLETED_TODO: 'SHOW_COMPLETED_TODO'
// }
//

// # implement action creators
// ==============================
// addTodo()
// toggleTodo()
// showAllTodo()
// showCompletedTodo()
//
// import { ACTIONS } from './actions'
//
// const initialState = {
//   show: 'ALL', // 'COMPLETED'
//   todos: [
//     {id: 1, completed: true, text: 'Lorem ipsum'},
//     {id: 2, completed: true, text: 'Ipsum loreat sit amet'},
//     {id: 3, completed: true, text: 'sit amet loreat ipsum'},
//     {id: 4, completed: true, text: 'Amet sit ipsum loreat'}
//   ]
// }
//
// function todos(state = initialState, action) {
//   switch (action.type) {
//     case ACTIONS.ADD_TODO:
//       return {
//         ...state,
//         todos: state.todos.push({
//           text: action.text,
//           completed: false
//         })
//       }
//     case ACTIONS.TOGGLE_TODO:
//       return {
//         ...state,
//         todos: state.todos.map(todo => {
//           if (todo.id === action.id) {
//             return Object.assign({}, todo, {
//               completed: !todo.completed
//             })
//           }
//           return todo
//         })
//       }
//     case ACTIONS.SHOW_ALL_TODO:
//       return {
//         ...state,
//         show: 'ALL'
//       }
//     case ACTIONS.SHOW_COMPLETED_TODO:
//       return {
//         ...state,
//         show: 'COMPLETED'
//       }
//     default:
//       return state
//   }
// }
//
// export default todos
//
// # Designing the State shape & reducers
// ==============================
//

// import ACTIONS from './actions'
//
// const initialState = {
//   show: 'ALL', // 'COMPLETED'
//   todos: [
//     {id: 1, completed: true, text: 'Lorem ipsum'},
//     {id: 2, completed: true, text: 'Ipsum loreat sit amet'},
//     {id: 3, completed: true, text: 'sit amet loreat ipsum'},
//     {id: 4, completed: true, text: 'Amet sit ipsum loreat'}
//   ]
// }
//
// function todos(state = initialState, action) {
//   switch (action.type) {
//     case ADD_TODO:
//       return {
//         ...state,
//         todos: state.todos.push({
//           text: action.text,
//           completed: false
//         })
//       }
//     case TOGGLE_TODO:
//       return {
//         ...state,
//         todos: state.todos.map(todo => {
//           if (todo.id === action.id) {
//             return Object.assign({}, todo, {
//               completed: !todo.completed
//             })
//           }
//           return todo
//         })
//       }
//     case SHOW_ALL_TODO:
//       return {
//         ...state,
//         show: 'ALL'
//       }
//     case SHOW_COMPLETED_TODO:
//       return {
//         ...state,
//         show: 'COMPLETED'
//       }
//     default:
//       return state
//   }
// }
//
// export default todos


// # Add store to index.js
// ==============================
// yarn add redux
//
// import { createStore } from 'redux'
// import todos from './reducers'
// let store = createStore(todos)


// # Inject store into app
// ==============================
// yarn add react-redux
//
// import { Provider } from 'react-redux'
//
// <Provider store={store}>
//   <App />
// </Provider>

// # Add action to AddTodo
// ==============================
//
// import { connect } from 'react-redux'
// import { addTodo } from './actions'
//
// const AddTodo = ({ dispatch }) => {
//   dispatch(addTodo(input.value))
// }
// export default connect()(AddTodo)
