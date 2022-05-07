import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunkMiddleWare from 'redux-thunk'

import books from './reducers/books'
import cart from './reducers/cart'
import filter from './reducers/filter'

export type RootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({ books, cart, filter })

const composeEnhancers = process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleWare)))

export default store
