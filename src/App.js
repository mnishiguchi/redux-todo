import React        from 'react'
import { Provider } from 'react-redux'

// Redux store
import store   from './TodoApp/store'

// Components
import AppHeader from './AppHeader'
import TodoApp   from './TodoApp/TodoApp'

// Styles
require('bootstrap/dist/css/bootstrap.css')
require('./App.css')

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <AppHeader />

        <main className="container">

          <Provider store={store}>
            <TodoApp />
          </Provider>
          
        </main>
      </div>
    )
  }
}

export default App
