import React, { ReactElement } from 'react'
import { connect } from 'react-redux'
import { ITodo } from '../../store/types'
import {
  deleteTodo,
  deleteFromImp,
  toggleTodo,
  toggleImpTodo,
  addTodoImp
} from '../../store/actions/todo'
import {
  MyTodoList,
  MyTodo,
  MyTodoContent
} from './TodoList.styled'


interface ITodoListProps {
  todos: ITodo[]
  deleteTodo(id: string): ITodo[]
  deleteFromImp(id: string): ITodo[]
  toggleTodo(id: string): ITodo[]
  toggleImpTodo(id: string): ITodo[]
  addTodoImp(todos: ITodo): ITodo[]
}

const TodoList = (props: ITodoListProps): ReactElement => {
  const {todos, deleteTodo, deleteFromImp, toggleTodo, toggleImpTodo, addTodoImp} = props
  
  const addToImpHandler = (todo: any) => {
    toggleImpTodo(todo.id)
    addTodoImp(todo)
  }
  const delFromImpHandler = (todo: any) => {
    deleteFromImp(todo.id)
    toggleImpTodo(todo.id)
  }
  return (
    <MyTodoList>
      {todos.map((todo: any) => (
        <MyTodo key={todo.id}>
          {todo.completed ? 
            <span className="material-icons" onClick={() => toggleTodo(todo.id)}>
              check_box
            </span>
            :
            <span className="material-icons checkbox" onClick={() => toggleTodo(todo.id)}>
              check_box_outline_blank
            </span>
          }
          
          <MyTodoContent completed={todo.completed}>
            {todo.title}
          </MyTodoContent>
          {todo.imp ?
            <span className="material-icons" onClick={() => delFromImpHandler(todo)}>
              star
            </span>
            :
            <span className="material-icons star" onClick={() => addToImpHandler(todo)}>
              star_border
            </span>
          }
          
          <span className="material-icons delete" onClick={() => deleteTodo(todo.id)}>
            delete
          </span>
        </MyTodo>
      ))}
      
    </MyTodoList>
  )
}

const mapStateToProps= (state: any) => ({
  todos: state.todo.todos
})
const mapDispatchToProps = (dispatch: any) => ({
  deleteTodo: (id: string) => dispatch(deleteTodo(id)),
  deleteFromImp: (id: string) => dispatch(deleteFromImp(id)),
  toggleTodo: (id: string) => dispatch(toggleTodo(id)),
  toggleImpTodo: (id: string) => dispatch(toggleImpTodo(id)),
  addTodoImp: (todos: ITodo) => dispatch(addTodoImp(todos))
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

