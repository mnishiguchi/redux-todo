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
    </div>
  )
}

export default AppHeader
