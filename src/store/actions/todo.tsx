import {Todos} from '../types'
import {ITodo} from '../types'

export const setTodo = (todos: ITodo[]) => ({
  type: Todos.SET_TODO,
  payload: todos
})

export const setTodoImp = (todos: ITodo[]) => ({
  type: Todos.SET_TODO_IMPORTANT,
  payload: todos
})

export const addTodo = (todos: ITodo) => ({
  type: Todos.ADD_TODO,
  payload: todos
})

export const addTodoImp = (todos: ITodo) => ({
  type: Todos.ADD_TODO_IMPORTANT,
  payload: todos
})

export const deleteTodo = (id: string) => ({
  type: Todos.DELETE_TODO,
  payload: id
})

export const deleteFromImp = (id: string) => ({
  type: Todos.DELETE_FROM_IMP,
  payload: id
})

export const toggleTodo = (id: string) => ({
  type: Todos.TOGGLE_TODO,
  payload: id
})

export const toggleImpTodo = (id: string) => ({
  type: Todos.TOGGLE_IMP_TODO,
  payload: id
})