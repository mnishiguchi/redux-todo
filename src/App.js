import React         from 'react'
import { Provider }  from 'react-redux'

// Redux store
import store   from './TodoApp/store'

// Components
import MainLayout from './MainLayout'
import TodoApp    from './TodoApp/TodoApp'

class App extends React.Component {
  render() {
    return (
      <MainLayout>
        <Provider store={store}>
          <TodoApp />
        </Provider>
      </MainLayout>
    )
  }
}

export default App
