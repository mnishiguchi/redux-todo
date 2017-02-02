import React      from 'react'
import FilterLink from './FilterLink'

const FilterBox = () => {
  return (
    <p>
      Filter:
      {' '}
      <FilterLink
        filter='SHOW_ALL'
      >
        All items
      </FilterLink>
      {'  '}
      <FilterLink
        filter='SHOW_ACTIVE'
      >
        Active items
      </FilterLink>
      {'  '}
      <FilterLink
        filter='SHOW_COMPLETED'
      >
        Completed items
      </FilterLink>
    </p>
  )
}

export default FilterBox
