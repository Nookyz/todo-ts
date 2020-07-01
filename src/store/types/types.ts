export interface ITodo {
  id: string
  title: string
  date: Date
  imp: boolean
  completed: boolean
}

export interface ITodoState {
  todos: ITodo[]
}

export enum Todos {
  SET_TODO = 'SET_TODO',
  ADD_TODO = 'ADD_TODO',
  DELETE_TODO = 'DELETE_TODO',
  TOGGLE_TODO_COMPLETED = 'TOGGLE_TODO_COMPLETED',
  TOGGLE_IMP_TODO = 'TOGGLE_IMP_TODO',

  SORT_BY_TITLE = 'SORT_BY_TITLE',
  SORT_BY_IMP = 'SORT_BY_IMP',
  SORT_BY_DONE = 'SORT_BY_DONE',
  SORT_BY_DATE = 'SORT_BY_DATE'
}

export interface IHelperState {
  openMenu: boolean
}

export enum Helpers {
  TOGGLE_MENU = 'TOGGLE_MENU'
}