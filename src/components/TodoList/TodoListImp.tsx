import React, { ReactElement } from 'react'
import { connect } from 'react-redux'
import { ITodo } from '../../store/types'
import {
  deleteTodo, 
  deleteFromImp,
  toggleTodo,
  toggleImpTodo
} from '../../store/actions/todo'
import {
  MyTodoList,
  MyTodo,
  MyTodoContent
} from './TodoList.styled'


interface ITodoListImpProps {
  impTodos: ITodo[]
  deleteTodo(id: string): ITodo[]
  deleteFromImp(id: string): ITodo[]
  toggleTodo(id: string): ITodo[]
  toggleImpTodo(id: string): ITodo[]
}

const TodoListImp = (props: ITodoListImpProps): ReactElement => {
  const {impTodos, deleteTodo, deleteFromImp, toggleTodo, toggleImpTodo} = props

  const deleteFromImpHandler = (id: string) => {
    deleteFromImp(id)
    toggleImpTodo(id)
  }
  return (
    <MyTodoList>
      {impTodos.map((todo: any) => (
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
            <span className="material-icons" onClick={() => deleteFromImpHandler(todo.id)}>
              star
            </span>
            :
            <span className="material-icons star" onClick={() => deleteFromImpHandler(todo.id)}>
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
  impTodos: state.todo.impTodos
})
const mapDispatchToProps = (dispatch: any) => ({
  deleteTodo: (id: string) => dispatch(deleteTodo(id)),
  deleteFromImp: (id: string) => dispatch(deleteFromImp(id)),
  toggleTodo: (id: string) => dispatch(toggleTodo(id)),
  toggleImpTodo: (id: string) => dispatch(toggleImpTodo(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoListImp)
