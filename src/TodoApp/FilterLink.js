import React      from 'react';

const FilterLink = (props) => {
  const {
    filter,             // Name of this filter
    currentFilter,      // Name of currently active filter
    children,           // To be a lable of thie link
    handleClickFilter,  // Handles a click on this component
  } = props

  // Active link
  if (filter === currentFilter) {
    return <b>{children}</b>;
  }

  // The other links
  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        handleClickFilter(filter)
      }}
    >
      {children}
    </a>
  )
};

export default FilterLink;
