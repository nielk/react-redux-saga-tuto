import React from 'react'
import Link from './Link'

const Footer = () => (
  <p>
    Show:
    {" "}
    <Link>
      All
    </Link>
    {", "}
    <Link>
      Completed
    </Link>
  </p>
)

export default Footer
