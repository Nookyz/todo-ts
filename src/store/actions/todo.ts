import {Todos, ITodo} from '../types/types'
import {TodoAction} from '../types/actions'

// SET
export const setTodo = (todos: ITodo[]): TodoAction => ({
  type: Todos.SET_TODO,
  payload: todos
})

export const setTodoImp = (todos: ITodo[]): TodoAction => ({
  type: Todos.SET_TODO_IMPORTANT,
  payload: todos
})

// ADD
export const addTodo = (todos: ITodo): TodoAction => ({
  type: Todos.ADD_TODO,
  payload: todos
})

export const addTodoImp = (todos: ITodo): TodoAction => ({
  type: Todos.ADD_TODO_IMPORTANT,
  payload: todos
})

// DELETE
export const deleteTodo = (id: string): TodoAction => ({
  type: Todos.DELETE_TODO,
  payload: id
})

export const deleteFromImp = (id: string): TodoAction => ({
  type: Todos.DELETE_FROM_IMP,
  payload: id
})

// TOGGLE Todo Completed
export const toggleTodoCompleted = (id: string): TodoAction => ({
  type: Todos.TOGGLE_TODO_COMPLETED,
  payload: id
})

export const toggleTodoCompletedImp = (id: string): TodoAction => ({
  type: Todos.TOGGLE_TODO_COMPLETED_IMP,
  payload: id
})

// TOGGLE IPM(STAR)
export const toggleImpTodo = (id: string): TodoAction => ({
  type: Todos.TOGGLE_IMP_TODO,
  payload: id
})

// SORT 
export const sortByTitle = (orderBy: string): TodoAction => ({
  type: Todos.SORT_BY_TITLE,
  payload: orderBy
})

export const sortByImp = (orderBy: string): TodoAction => ({
  type: Todos.SORT_BY_IMP,
  payload: orderBy
})

export const sortByCompleted = (orderBy: string): TodoAction => ({
  type: Todos.SORT_BY_DONE,
  payload: orderBy
})

export const sortByDate = (orderBy: string): TodoAction => ({
  type: Todos.SORT_BY_DATE,
  payload: orderBy
})