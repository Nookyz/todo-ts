export interface ITodo {
  id: string
  title: string
  imp: boolean
  completed: boolean
}

export interface ITodoState {
  readonly todos: ITodo[]
  readonly impTodos: ITodo[]
}

export enum Todos {
  SET_TODO = 'SET_TODO',
  SET_TODO_IMPORTANT = 'SET_TODO_IMPORTANT',
  ADD_TODO = 'ADD_TODO',
  ADD_TODO_IMPORTANT = 'ADD_TODO_IMPORTANT',
  DELETE_TODO = 'DELETE_TODO',
  DELETE_FROM_IMP = 'DELETE_FROM_IMP',
  TOGGLE_TODO = 'TOGGLE_TODO',
  TOGGLE_IMP_TODO = 'TOGGLE_IMP_TODO',
}