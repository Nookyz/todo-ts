import {ITodo, Todos} from './types'

// SET TODOS
export type SetTodoAction = {
  type: typeof Todos.SET_TODO
  payload: ITodo[]
}

// ADD
export type AddTodoAction = {
  type: typeof Todos.ADD_TODO,
  payload: ITodo
}

// DELETE
export type DeleteTodoAction = {
  type: typeof Todos.DELETE_TODO,
  payload: string
}

// TOGGLE Todo Completed
export type ToggleTodoCompletedAction = {
  type: typeof Todos.TOGGLE_TODO_COMPLETED,
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
| AddTodoAction 
| DeleteTodoAction 
| ToggleTodoCompletedAction
| ToggleImpTodoAction 
| SortByTitleAction
| SortByImpAction
| SortByCompletedAction
| SortByDateAction
