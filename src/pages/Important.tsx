import React, { ReactElement, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { useDispatch } from 'react-redux'
import { ITodo } from '../store/types/types'
import { TodoToolbar } from '../components/TodoToolbar/TodoToolbar'
import TodoInput from '../components/TodoInput/TodoInput'
import TodoListImp from '../components/TodoList/TodoListImp'
import { addTodo, } from '../store/actions/todo'
import { MyPage } from './page.styled'


interface IImportantProps {

}

const Important = (props: IImportantProps): ReactElement => {

  const [title] = useState<string>('Важно')
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
    <MyPage>
      <TodoToolbar title={title}/>
      <TodoInput addTodo={addTodoHandler} todoItem={todoItem}/>
      <TodoListImp/>
    </MyPage>
  )
}

export default Important