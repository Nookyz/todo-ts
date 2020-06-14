import React, { ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../store/reducers/root'
import { GlobalStyle } from './App.styled'
import { Header } from '../Header/Header'
import Main from '../Main/Main'

const App = (): ReactElement => { 
  return (
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle/>
        <Header/>
        <Main/>
      </Provider> 
    </BrowserRouter>
  )
}

export default App
