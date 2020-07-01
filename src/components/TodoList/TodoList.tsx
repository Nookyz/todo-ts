import React, { ReactElement } from 'react'
import { connect } from 'react-redux'
import { ITodo } from '../../store/types/types'
import {
  deleteTodo,
  deleteFromImp,
  toggleImpTodo,
  addTodoImp,
  toggleTodoCompleted
} from '../../store/actions/todo'
import {
  MyTodoList,
  MyTodo,
  MyTodoContent
} from './TodoList.styled'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import { TodoEmpty } from '../TodoEmpty/TodoEmpty'

interface ITodoListProps {
  todos: ITodo[]
  deleteTodo: (id: string) => ITodo[]
  deleteFromImp: (id: string) => ITodo[]
  toggleImpTodo: (id: string) => ITodo[]
  addTodoImp: (todos: ITodo) => ITodo[]
  toggleTodoCompleted: (id: string) => ITodo[]
}

const TodoList: React.FC<ITodoListProps> = (props): ReactElement => {
  const {
    todos, deleteTodo, deleteFromImp,
    toggleImpTodo, addTodoImp, toggleTodoCompleted
  } = props
  
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
      <TransitionGroup>
        {todos.length &&
          todos.map((todo: any) => (
            <CSSTransition 
            key={todo.id}
            timeout={500}
            classNames='todo'
            >
              <MyTodo >
                {todo.completed ? 
                  <span className="material-icons" onClick={() => toggleTodoCompleted(todo.id)}>
                    check_box
                  </span>
                  :
                  <span className="material-icons checkbox" onClick={() => toggleTodoCompleted(todo.id)}>
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
            </CSSTransition>
          ))
        }
      </TransitionGroup>

      {!todos.length && <TodoEmpty/>}
      
    </MyTodoList>
  )
}

const mapStateToProps= (state: any) => ({
  todos: state.todo.todos
})
const mapDispatchToProps = (dispatch: any) => ({
  deleteTodo: (id: string) => dispatch(deleteTodo(id)),
  deleteFromImp: (id: string) => dispatch(deleteFromImp(id)),
  toggleImpTodo: (id: string) => dispatch(toggleImpTodo(id)),
  addTodoImp: (todos: ITodo) => dispatch(addTodoImp(todos)),
  toggleTodoCompleted: (id: string) => dispatch(toggleTodoCompleted(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

