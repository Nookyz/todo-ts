import React, { ReactElement, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { connect } from 'react-redux'
import { ITodo } from '../store/types'
import { TodoToolbar } from '../components/TodoToolbar/TodoToolbar'
import { addTodo } from '../store/actions/todo'
import TodoList from '../components/TodoList/TodoList'
import TodoInput from '../components/TodoInput/TodoInput'
import { MyPage } from './page.styled'
import TodoSort from '../components/TodoSort/TodoSort'

interface IHomeProps {
  addTodo(todo: ITodo): ITodo[]
}

const Home = (props: IHomeProps): ReactElement => {
  
  const {addTodo} = props

  const [title] = useState<string>('Задачи')
  const [sortBy, setSortBy] = useState<boolean>(false)
  
  const [sortText, setSortText] = useState<string>('')

  const todoItem = (title: string) => ({
    id: uuid(),
    title: title,
    date: new Date(Date.now()),
    completed: false,
    imp: false
  })

  const addTodoHandler = (todo: ITodo) => addTodo(todo) 
  
  useEffect(() => {
    document.title = title
  })

  useEffect(() => {
    const savedSort: boolean = JSON.parse(localStorage.getItem('savedSort') || 'false')  
    setSortBy(savedSort)
    const savedTextSort: string = JSON.parse(localStorage.getItem('savedTextSort') || '')  
    setSortText(savedTextSort)
  }, [])

  useEffect(() => {
    localStorage.setItem('savedSort', JSON.stringify(sortBy))
    localStorage.setItem('savedTextSort', JSON.stringify(sortText))
  }, [sortBy, sortText])

  return (
    <MyPage>
      <TodoToolbar 
      title={title}
      setSortBy={setSortBy}
      setSortText={setSortText}
      />
      {sortBy ? <TodoSort setSortBy={setSortBy} sortText={sortText}/> : null}
      <TodoInput 
      addTodo={addTodoHandler} 
      todoItem={todoItem}
      />
      <TodoList/>
    </MyPage>
  )
}

const mapDispatchToProps = (dispatch: any) => ({
  addTodo: (todos: ITodo) => dispatch(addTodo(todos)),
})

export default connect(null, mapDispatchToProps)(Home)
