import React, { PropTypes } from 'react'
import Todo from './Todo'

const TodoList = ({ todos }) => (
  <ul>
    {todos.map((todo, index) =>
      <Todo
        key={index}
        {...todo}
        onClick={() => { console.log('on todo click…')}}
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

export default TodoList
