import React, { ReactElement } from 'react'
import { connect } from 'react-redux'
import { ITodo } from '../../store/types/types'
import {
  deleteTodo, 
  deleteFromImp,
  toggleImpTodo,
  toggleTodoCompletedImp,
  toggleTodoCompleted
} from '../../store/actions/todo'
import {
  MyTodoList,
  MyTodo,
  MyTodoContent
} from './TodoList.styled'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

interface ITodoListImpProps {
  impTodos: ITodo[]
  deleteTodo: (id: string) => ITodo[]
  deleteFromImp: (id: string) => ITodo[]
  toggleImpTodo: (id: string) => ITodo[]
  toggleTodoCompletedImp: (id: string) => ITodo[]
}

const TodoListImp: React.FC<ITodoListImpProps> = (props): ReactElement => {

  const {
    impTodos, deleteTodo, deleteFromImp, 
    toggleImpTodo, toggleTodoCompletedImp,
  } = props

  const deleteFromImpHandler = (id: string) => {
    deleteFromImp(id)
    toggleImpTodo(id)
  }
  return (
    <MyTodoList>
      <TransitionGroup>
        {impTodos.map((todo: any) => (
          <CSSTransition 
          key={todo.id}
          timeout={500}
          classNames='todo'
          >
            <MyTodo key={todo.id}>
              {todo.completed ?
                <span className="material-icons" onClick={() => toggleTodoCompletedImp(todo.id)}>
                  check_box
                </span>
                :
                <span className="material-icons checkbox" onClick={() => toggleTodoCompletedImp(todo.id)}>
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
          </CSSTransition>
        ))}
      </TransitionGroup>
    </MyTodoList>
  )
}

const mapStateToProps= (state: any) => ({
  impTodos: state.todo.impTodos
})
const mapDispatchToProps = (dispatch: any) => ({
  deleteTodo: (id: string) => dispatch(deleteTodo(id)),
  deleteFromImp: (id: string) => dispatch(deleteFromImp(id)),
  toggleImpTodo: (id: string) => dispatch(toggleImpTodo(id)),
  toggleTodoCompletedImp: (id: string) => dispatch(toggleTodoCompletedImp(id)),
  toggleTodoCompleted: (id: string) => dispatch(toggleTodoCompleted(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoListImp)
