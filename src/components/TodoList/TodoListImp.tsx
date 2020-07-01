import React, { ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  deleteTodo, 
  toggleImpTodo,
  toggleTodoCompleted
} from '../../store/actions/todo'
import {
  MyTodoList,
  MyTodo,
  MyTodoContent
} from './TodoList.styled'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {AppState} from '../../store/configureStore'
import {ITodoState} from '../../store/types/types'
import {ITodo} from '../../store/types/types'

interface ITodoListImpProps {

}

const TodoListImp: React.FC<ITodoListImpProps> = (props): ReactElement => {

  const todos = useSelector<AppState, ITodoState['todos']>(state => state.todo.todos)

  const dispatch = useDispatch()

  const deleteFromImpHandler = (id: string) => {
    dispatch(toggleImpTodo(id))
  }
  const toggleTodoCompletedHandler = (id: string) => {
    dispatch(toggleTodoCompleted(id))
  }
  const deleteTodoHandler = (id: string) => {
    dispatch(deleteTodo(id))
  }
  return (
    <MyTodoList>
      <TransitionGroup>
        {todos.filter((todo: ITodo) => todo.imp).map((todo: ITodo)=>(
          <CSSTransition 
          key={todo.id}
          timeout={500}
          classNames='todo'
          >
            <MyTodo>
              {todo.completed ?
                <span className="material-icons" onClick={() => toggleTodoCompletedHandler(todo.id)}>
                  check_box
                </span>
                :
                <span className="material-icons checkbox" onClick={() => toggleTodoCompletedHandler(todo.id)}>
                  check_box_outline_blank
                </span>
              }
              
              <MyTodoContent completed={todo.completed}>
                {todo.title}
              </MyTodoContent>
              {todo.imp &&
                <span className="material-icons" onClick={() => deleteFromImpHandler(todo.id)}>
                  star
                </span>
              }
              
              <span className="material-icons delete" onClick={() => deleteTodoHandler(todo.id)}>
                delete
              </span>
            </MyTodo>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </MyTodoList>
  )
}

export default TodoListImp
