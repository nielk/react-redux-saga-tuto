import React from 'react'
import Footer from './Footer'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

const todos = [
  {id: 1, completed: true, text: 'Lorem ipsum'},
  {id: 2, completed: true, text: 'Ipsum loreat sit amet'},
  {id: 3, completed: true, text: 'sit amet loreat ipsum'},
  {id: 4, completed: true, text: 'Amet sit ipsum loreat'},
]

const App = () => (
  <div>
    <AddTodo />
    <TodoList todos={todos}/>
    <Footer />
  </div>
)

export default App
