import { compose, createStore } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'

// let finalCreateStore = compose()(createStore)

export default function configureStore( initialState = {
  todos: []
}) {
  return createStore( reducer, initialState)
}

