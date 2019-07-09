import React from 'react'
import FilterLink from '../containers/FilterLink.jsx'

const Footer = () => ( //return 생략
  <p>
      Show:
      <h1>hello redux</h1>
      {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
)

export default Footer