import React      from 'react';
import FilterLink from './FilterLink';

const VisibilityFilter = ({ currentFilter, handleClickFilter }) => {
  return (
    <p>
      Filter:
      {' '}
      <FilterLink
        filter='SHOW_ALL'
        handleClickFilter={handleClickFilter}
        currentFilter={currentFilter}
      >
        All items
      </FilterLink>
      {'  '}
      <FilterLink
        filter='SHOW_ACTIVE'
        handleClickFilter={handleClickFilter}
        currentFilter={currentFilter}
      >
        Active items
      </FilterLink>
      {'  '}
      <FilterLink
        filter='SHOW_COMPLETED'
        handleClickFilter={handleClickFilter}
        currentFilter={currentFilter}
      >
        Completed items
      </FilterLink>
    </p>
  );
}

export default VisibilityFilter;
