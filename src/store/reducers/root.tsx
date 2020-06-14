import {createStore, combineReducers} from 'redux'
import {todoReducer} from './todo'

const rootReducer = combineReducers({
  todo: todoReducer
})

export const store = createStore(rootReducer)