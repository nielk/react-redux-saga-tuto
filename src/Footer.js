import React from 'react'
import Link from './Link'

const Footer = () => (
  <p>
    Show:
    {" "}
    <Link filter="SHOW_ALL">
      All
    </Link>
    {", "}
    <Link filter="SHOW_COMPLETED">
      Completed
    </Link>
  </p>
)

export default Footer
