import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {todoReducer} from './reducers/todo'
import {helperReducer} from './reducers/helper'

const rootReducer = combineReducers({
  todo: todoReducer,
  helper: helperReducer
})

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))