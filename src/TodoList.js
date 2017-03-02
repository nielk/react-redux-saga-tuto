import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from './actions'
import Todo from './Todo'

const TodoList = ({ todos, dispatch }) => (
  <ul>
    {todos.map((todo, index) =>
      <Todo
        key={index}
        {...todo}
        onClick={() => { dispatch(toggleTodo(index)) }}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func
}

export default connect()(TodoList)
