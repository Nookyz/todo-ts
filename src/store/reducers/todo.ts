import {Todos} from '../types/types'
import {ITodoState} from '../types/types'
import {ITodo} from '../types/types'
import {sortBy} from 'lodash'
import {TodoAction} from '../types/actions'

const initialState: ITodoState = {
  todos: [],
  impTodos: []
}

export const todoReducer = (state = initialState, action: TodoAction) => {

  switch(action.type){
    case Todos.SET_TODO:
      return {
        ...state,
        todos: action.payload
      }
    case Todos.SET_TODO_IMPORTANT:
      return {
        ...state,
        impTodos: action.payload
      }
    case Todos.ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      }
    case Todos.ADD_TODO_IMPORTANT:
      return {
        ...state,
        impTodos: [action.payload, ...state.impTodos]
      }
    case Todos.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
        impTodos: state.impTodos.filter(todo => todo.id !== action.payload),
      }
    case Todos.DELETE_FROM_IMP:
      return {
        ...state,
        impTodos: state.impTodos.filter(todo => todo.id !== action.payload),
      }
    case Todos.TOGGLE_TODO_COMPLETED:
      return {
        ...state,
        todos: state.todos.map(todo =>{
          if(todo.id === action.payload){
            todo.completed = !todo.completed
          }
          return todo
        })
      }
    case Todos.TOGGLE_TODO_COMPLETED_IMP:
      return {
        ...state,
        impTodos: state.impTodos.map(todo =>{
          if(todo.id === action.payload){
            todo.completed = !todo.completed
          }
          return todo
        })
      }
    case Todos.TOGGLE_IMP_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>{
          if(todo.id === action.payload){
            todo.imp = !todo.imp
          }
          return todo
        }),
        impTodos: state.impTodos.map(todo =>{
          if(todo.id === action.payload){
            todo.imp = !todo.imp
          }
          return todo
        })
      }
    case Todos.SORT_BY_TITLE:
      if(action.payload === 'asc'){
        return {
          ...state,
          todos: sortBy(state.todos, [(o: ITodo) => o.title])
        }
      }
      return {
        ...state,
        todos: sortBy(state.todos, [(o: ITodo) => o.title]).reverse()
      }
    case Todos.SORT_BY_IMP:
      if(action.payload === 'asc'){
        return {
          ...state,
          todos: sortBy(state.todos, [(o: ITodo) => o.imp])
        }
      }
      return {
        ...state,
        todos: sortBy(state.todos, [(o: ITodo) => o.imp]).reverse()
      }
    case Todos.SORT_BY_DONE:
      if(action.payload === 'asc'){
        return {
          ...state,
          todos: sortBy(state.todos, [(o: ITodo) => o.completed])
        }
      }
      return {
        ...state,
        todos: sortBy(state.todos, [(o: ITodo) => o.completed]).reverse()
      }
    case Todos.SORT_BY_DATE:
      if(action.payload === 'asc'){
        return {
          ...state,
          todos: sortBy(state.todos, [(o: ITodo) => o.date])
        }
      }
      return {
        ...state,
        todos: sortBy(state.todos, [(o: ITodo) => o.date]).reverse()
      }
    default:
      return state
  }
}