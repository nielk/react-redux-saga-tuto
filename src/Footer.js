import React from 'react'
import { connect } from 'react-redux'
import { showAllTodo, showCompletedTodo } from './actions'
import Link from './Link'

const Footer = ({ dispatch }) => (
  <p>
    Show:
    {" "}
    <Link onClick={ () => dispatch(showAllTodo()) }>
      All
    </Link>
    {", "}
    <Link onClick={ () => dispatch(showCompletedTodo()) }>
      Completed
    </Link>
  </p>
)

export default connect()(Footer)
