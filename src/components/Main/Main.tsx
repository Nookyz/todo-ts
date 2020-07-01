import React, { ReactElement, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {setTodo} from '../../store/actions/todo'
import Menu from '../Menu/Menu'
import Home from '../../pages/Home'
import Important from '../../pages/Important'
import { ITodoState, IHelperState } from '../../store/types/types'
import { ITodo } from '../../store/types/types'
import { MyMain } from './Main.styled'
import { AppState } from '../../store/configureStore'

interface IMainProps {

}

const Main: React.FC<IMainProps> = (props): ReactElement => {

  const todos = useSelector<AppState, ITodoState['todos']>(state => state.todo.todos)
  const openMenu = useSelector<AppState, IHelperState['openMenu']>(state => state.helper.openMenu)
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    const todos: ITodo[] = JSON.parse(localStorage.getItem('todos') || '[]')
    dispatch(setTodo(todos))
  }, [dispatch])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [openMenu, todos])

  return (
    <MyMain>
      <Menu
        openMenu={openMenu} 
        todos={todos}
      />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/important' component={Important}/>
      </Switch>
    </MyMain>
  )
}

export default Main