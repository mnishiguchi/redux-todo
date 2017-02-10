import React  from 'react'
import logo   from './logo.svg'

const AppHeader = () => {
  return (
    <div className="App-header">
      <img
        src={logo}
        className="App-logo"
        alt="logo"
      />
      <h2>Redux todo app</h2>
      <button
        classname="btn btn-secondary"
        onClick={
        e => {
          e.preventDefault()
          localStorage.clear()
        }
      }>
        Clear local storage
      </button>
    </div>
  )
}

export default AppHeader
