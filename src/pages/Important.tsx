import React, { ReactElement, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import { ITodo, IHelperState } from '../store/types/types'
import { TodoToolbar } from '../components/TodoToolbar/TodoToolbar'
import TodoInput from '../components/TodoInput/TodoInput'
import TodoListImp from '../components/TodoList/TodoListImp'
import { addTodo, } from '../store/actions/todo'
import { MyPage } from './page.styled'
import { AppState } from '../store/configureStore'


interface IImportantProps {

}

const Important = (props: IImportantProps): ReactElement => {

  const [title] = useState<string>('Важно')
  const openMenu = useSelector<AppState, IHelperState['openMenu']>(state => state.helper.openMenu)
  const dispatch = useDispatch()
  

  const todoItem = (title: string) => ({
    id: uuid(),
    title: title,
    date: new Date(Date.now()),
    completed: false,
    imp: true
  })

  const addTodoHandler = (todo: ITodo) => {
    dispatch(addTodo(todo))
  }

  useEffect(() => {
    document.title = title
  })

  return (
    <MyPage open={openMenu}>
      <TodoToolbar title={title}/>
      <TodoInput addTodo={addTodoHandler} todoItem={todoItem}/>
      <TodoListImp/>
    </MyPage>
  )
}

export default Important