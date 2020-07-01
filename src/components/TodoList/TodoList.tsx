import React, { ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ITodo } from '../../store/types/types'
import {
  deleteTodo,
  toggleImpTodo,
  toggleTodoCompleted,
} from '../../store/actions/todo'
import {
  MyTodoList,
  MyTodo,
  MyTodoContent
} from './TodoList.styled'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import { TodoEmpty } from '../TodoEmpty/TodoEmpty'
import {AppState} from '../../store/configureStore'
import {ITodoState} from '../../store/types/types'

interface ITodoListProps {

}

const TodoList: React.FC<ITodoListProps> = (props): ReactElement => {

  const todos = useSelector<AppState, ITodoState['todos']>(state => state.todo.todos)
  
  const dispatch = useDispatch()

  const addToImpHandler = (todo: ITodo) => {
    dispatch(toggleImpTodo(todo.id))
  }
  const delFromImpHandler = (id: string) => {
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
        {todos.length &&
          todos.map((todo: ITodo) => (
            <CSSTransition 
            key={todo.id}
            timeout={500}
            classNames='todo'
            >
              <MyTodo >
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
                {todo.imp ?
                  <span className="material-icons" onClick={() => delFromImpHandler(todo.id)}>
                    star
                  </span>
                  :
                  <span className="material-icons star" onClick={() => addToImpHandler(todo)}>
                    star_border
                  </span>
                }
                
                <span className="material-icons delete" onClick={() => deleteTodoHandler(todo.id)}>
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

export default TodoList