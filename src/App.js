import React from 'react'
import { connect } from 'react-redux'
import Footer from './Footer'
import AddTodo from './AddTodo'
import TodoList from './TodoList'


const App = (props) => {
  return (
    <div>
      <AddTodo />
      <TodoList todos={props.todos}/>
      <Footer />
    </div>
  )
}

const filterTodos = (todos, mode) => {
  switch (mode) {
    case 'ALL':
      return todos
    case 'COMPLETED':
      return todos.filter(todo => todo.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    todos: filterTodos(state.todos, state.show)
  }
}

export default connect(mapStateToProps)(App)
