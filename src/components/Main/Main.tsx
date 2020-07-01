import React, { ReactElement, useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {setTodo, setTodoImp} from '../../store/actions/todo'
import Menu from '../Menu/Menu'
import Home from '../../pages/Home'
import Important from '../../pages/Important'
import { ITodoState } from '../../store/types/types'
import { ITodo } from '../../store/types/types'
import { MyMain } from './Main.styled'
import { AppState } from '../../store/configureStore'


interface IMainProps {

}

const Main: React.FC<IMainProps> = (props): ReactElement => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  const todos = useSelector<AppState, ITodoState['todos']>(state => state.todo.todos)
  const impTodos = useSelector<AppState, ITodoState['impTodos']>(state => state.todo.impTodos)
  
  const dispatch = useDispatch()
  

  useEffect(() => {
    const savedMenu: boolean = JSON.parse(localStorage.getItem('openMenu') || 'false')
    setOpenMenu(savedMenu)
    const todos: ITodo[] = JSON.parse(localStorage.getItem('todos') || '[]')
    dispatch(setTodo(todos))
    const todosImp: ITodo[] = JSON.parse(localStorage.getItem('todosImp') || '[]')
    dispatch(setTodoImp(todosImp))
  }, [dispatch, setOpenMenu])

  useEffect(() => {
    localStorage.setItem('openMenu', JSON.stringify(openMenu))
    localStorage.setItem('todos', JSON.stringify(todos))
    localStorage.setItem('todosImp', JSON.stringify(impTodos))
  }, [openMenu, todos, impTodos])

  return (
    <MyMain>
      <Menu
        openMenu={openMenu} 
        setOpenMenu={setOpenMenu} 
        todos={todos} 
        impTodos={impTodos}
      />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/important' component={Important}/>
      </Switch>
    </MyMain>
  )
}

export default Main