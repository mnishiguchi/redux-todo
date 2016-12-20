import React      from 'react';
// import classNames from 'classnames';

class FilterLink extends React.Component {

  render() {
    const { filter, children, handleClickFilter, currentFilter } = this.props;

    // Active link
    if (filter === currentFilter) {
      return (
        <span>{children}{/* Label */}</span>
      );
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
        {children}{/* Label */}
      </a>
    )
  };
}

export default FilterLink;
