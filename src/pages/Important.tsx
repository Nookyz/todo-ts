import React, { ReactElement, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { connect } from 'react-redux'
import { ITodo } from '../store/types'
import { TodoToolbar } from '../components/TodoToolbar/TodoToolbar'
import TodoInput from '../components/TodoInput/TodoInput'
import TodoListImp from '../components/TodoList/TodoListImp'
import { 
  addTodo, 
  addTodoImp
} from '../store/actions/todo'
import { MyPage } from './page.styled'


interface IImportantProps {
  addTodo(todo: ITodo): ITodo[],
  addTodoImp(todo: ITodo): ITodo[]
}

const Important = (props: IImportantProps): ReactElement => {
  
  const {addTodo, addTodoImp} = props

  const [title] = useState<string>('Важно')

  const todoItem = (title: string) => ({
    id: uuid(),
    title: title,
    completed: false,
    imp: true
  })

  const addTodoHandler = (todo: ITodo) => {
    addTodo(todo)
    addTodoImp(todo)
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
const mapDispatchToProps = (dispatch: any) => ({
  addTodo: (todos: ITodo) => dispatch(addTodo(todos)),
  addTodoImp: (todos: ITodo) => dispatch(addTodoImp(todos))
})
export default connect(null, mapDispatchToProps)(Important)
