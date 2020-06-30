import {Todos} from '../types'
import {ITodo} from '../types'

// SET
export const setTodo = (todos: ITodo[]) => ({
  type: Todos.SET_TODO,
  payload: todos
})

export const setTodoImp = (todos: ITodo[]) => ({
  type: Todos.SET_TODO_IMPORTANT,
  payload: todos
})

// ADD
export const addTodo = (todos: ITodo) => ({
  type: Todos.ADD_TODO,
  payload: todos
})

export const addTodoImp = (todos: ITodo) => ({
  type: Todos.ADD_TODO_IMPORTANT,
  payload: todos
})

// DELETE
export const deleteTodo = (id: string) => ({
  type: Todos.DELETE_TODO,
  payload: id
})

export const deleteFromImp = (id: string) => ({
  type: Todos.DELETE_FROM_IMP,
  payload: id
})

// TOGGLE Todo Completed
export const toggleTodoCompleted = (id: string) => ({
  type: Todos.TOGGLE_TODO_COMPLETED,
  payload: id
})

export const toggleTodoCompletedImp = (id: string) => ({
  type: Todos.TOGGLE_TODO_COMPLETED_IMP,
  payload: id
})

// TOGGLE STAR(IMP)
export const toggleImpTodo = (id: string) => ({
  type: Todos.TOGGLE_IMP_TODO,
  payload: id
})

// SORT 
export const sortByTitle = (orderBy: string) => ({
  type: Todos.SORT_BY_TITLE,
  payload: orderBy
})

export const sortByImp = (orderBy: string) => ({
  type: Todos.SORT_BY_IMP,
  payload: orderBy
})

export const sortByDone = (orderBy: string) => ({
  type: Todos.SORT_BY_DONE,
  payload: orderBy
})

export const sortByDate = (orderBy: string) => ({
  type: Todos.SORT_BY_DATE,
  payload: orderBy
})