import React   from 'react'

/**
 * Only concerned with rendering.
 * Does not know anything about filters.
 */
const Link = ({ active, children, handleClickFilter }) => {
  if (active) {
    return (
      <span>{children}</span>
    )
  }

  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault()
        handleClickFilter()
      }}
    >
      {children}
    </a>
  )
}

export default Link
