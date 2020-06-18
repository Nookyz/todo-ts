import React, { ReactElement, useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import {setTodo, setTodoImp} from '../../store/actions/todo'
import Menu from '../Menu/Menu'
import Home from '../../pages/Home'
import Important from '../../pages/Important'
import { ITodo } from '../../store/types'
import { MyMain } from './Main.styled'

interface IMainProps {
  todos: ITodo[]
  impTodos: ITodo[]
  setTodo: (todos: ITodo[]) => any
  setTodoImp: (todos: ITodo[]) => any
}

const Main: React.FC<IMainProps> = (props): ReactElement => {
  const {todos, impTodos, setTodo, setTodoImp} = props

  const [openMenu, setOpenMenu] = useState<boolean>(false)

  useEffect(() => {
    const savedMenu: boolean = JSON.parse(localStorage.getItem('openMenu') || 'false')
    setOpenMenu(savedMenu)
    const todos: ITodo[] = JSON.parse(localStorage.getItem('todos') || '[]')
    setTodo(todos)
    const todosImp: ITodo[] = JSON.parse(localStorage.getItem('todosImp') || '[]')
    setTodoImp(todosImp)
  }, [setTodo, setTodoImp])

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

const mapStateToProps= (state: any) => ({
  todos: state.todo.todos,
  impTodos: state.todo.impTodos
})

const mapDispatchToProps = (dispatch: any) => ({
  setTodo: (todos: ITodo[]) => dispatch(setTodo(todos)),
  setTodoImp: (todos: ITodo[]) => dispatch(setTodoImp(todos))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)