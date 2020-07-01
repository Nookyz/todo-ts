import React, { ReactElement, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import { ITodo, IHelperState } from '../store/types/types'
import { TodoToolbar } from '../components/TodoToolbar/TodoToolbar'
import { addTodo } from '../store/actions/todo'
import TodoList from '../components/TodoList/TodoList'
import TodoInput from '../components/TodoInput/TodoInput'
import { MyPage } from './page.styled'
import TodoSort from '../components/TodoSort/TodoSort'
import { AppState } from '../store/configureStore'

interface IHomeProps {
  
}

const Home = (props: IHomeProps): ReactElement => {
  
  const [title] = useState<string>('Задачи')
  const [sortBy, setSortBy] = useState<boolean>(false)
  
  const [sortText, setSortText] = useState<string>('')
  const openMenu = useSelector<AppState, IHelperState['openMenu']>(state => state.helper.openMenu)
  const dispatch = useDispatch()

  const todoItem = (title: string) => ({
    id: uuid(),
    title: title,
    date: new Date(Date.now()),
    completed: false,
    imp: false
  })

  const addTodoHandler = (todo: ITodo) => dispatch(addTodo(todo)) 
  
  useEffect(() => {
    document.title = title
  })

  return (
    <MyPage open={openMenu}>
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

export default Home
