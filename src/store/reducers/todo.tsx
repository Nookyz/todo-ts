import {Todos} from '../types'
import {ITodoState} from '../types'

const initialState: ITodoState = {
  todos: [],
  impTodos: []
} 

export const todoReducer = (state = initialState, action: any) => {

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
    case Todos.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>{
          if(todo.id === action.payload){
            todo.completed = !todo.completed
          }
          return todo
        }),
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
    default:
      return state
  }
}