import React      from 'react'
import Link       from './Link'

// We import this so that we can use dispatch function.
import store   from './store'

// Delegates the rendering to the Link component.
class FilterLink extends React.Component {
  render() {
    const props = this.props
    const state = store.getState()

    return (
      <Link
        active={props.filter === state.visibilityFilter}
        handleClickFilter={() =>
          store.dispatch({
            type   : 'SET_VISIBILITY_FILTER',
            filter : props.filter,
          })
        }
      >
        {props.children}
      </ Link>
    )
  }
}

export default FilterLink
