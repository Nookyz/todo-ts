import React, { ReactElement, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import { connect } from 'react-redux'
import { ITodo } from '../store/types'
import { TodoToolbar } from '../components/TodoToolbar/TodoToolbar'
import { addTodo } from '../store/actions/todo'
import TodoList from '../components/TodoList/TodoList'
import TodoInput from '../components/TodoInput/TodoInput'
import { MyPage } from './page.styled'

interface IHomeProps {
  addTodo(todo: ITodo): ITodo[]
}

const Home = (props: IHomeProps): ReactElement => {
  
  const {addTodo} = props

  const todoItem = (title: string) => ({
    id: uuid(),
    title: title,
    completed: false,
    imp: false
  })

  const addTodoHandler = (todo: ITodo) => {
    addTodo(todo) 
  }
  
  useEffect(() => {
    document.title = `Задачи`
  })

  return (
    <MyPage>
      <TodoToolbar title='Задачи'/>
      <TodoInput addTodo={addTodoHandler} todoItem={todoItem}/>
      <TodoList/>
    </MyPage>
  )
}

const mapDispatchToProps = (dispatch: any) => ({
  addTodo: (todos: ITodo) => dispatch(addTodo(todos)),
})

export default connect(null, mapDispatchToProps)(Home)
