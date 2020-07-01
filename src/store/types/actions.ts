import {ITodo, Todos} from './types'

export type SetTodoAction = {
  type: typeof Todos.SET_TODO
  payload: ITodo[]
}

export type SetTodoImpAction = {
  type: typeof Todos.SET_TODO_IMPORTANT
  payload: ITodo[]
}

// ADD
export type AddTodoAction = {
  type: typeof Todos.ADD_TODO,
  payload: ITodo
}

export type AddTodoImpAction = {
  type: typeof Todos.ADD_TODO_IMPORTANT,
  payload: ITodo
}

// DELETE
export type DeleteTodoAction = {
  type: typeof Todos.DELETE_TODO,
  payload: string
}

export type DeleteFromImpAction = {
  type: typeof Todos.DELETE_FROM_IMP,
  payload: string
}

// TOGGLE Todo Completed
export type ToggleTodoCompletedAction = {
  type: typeof Todos.TOGGLE_TODO_COMPLETED,
  payload: string
}

export type ToggleTodoCompletedImpAction = {
  type: typeof Todos.TOGGLE_TODO_COMPLETED_IMP,
  payload: string
}

// TOGGLE STAR(IMP)
export type ToggleImpTodoAction = {
  type: typeof Todos.TOGGLE_IMP_TODO,
  payload: string
}

// SORT 
export type SortByTitleAction = {
  type: typeof Todos.SORT_BY_TITLE,
  payload: string
}

export type SortByImpAction = {
  type: typeof Todos.SORT_BY_IMP,
  payload: string
}

export type SortByCompletedAction = {
  type: typeof Todos.SORT_BY_DONE,
  payload: string
}

export type SortByDateAction = {
  type: typeof Todos.SORT_BY_DATE,
  payload: string
}

export type TodoAction = SetTodoAction 
| SetTodoImpAction 
| AddTodoAction 
| AddTodoImpAction
| DeleteTodoAction 
| DeleteFromImpAction 
| ToggleTodoCompletedAction
| ToggleTodoCompletedImpAction 
| ToggleImpTodoAction 
| SortByTitleAction
| SortByImpAction
| SortByCompletedAction
| SortByDateAction
