import { createStore, compose, applyMiddleware, CombinedState } from 'redux'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { MakeStore, createWrapper } from 'next-redux-wrapper'
import { persistStore } from 'redux-persist'
import rootReducer from './reducers'

const middlewareArray = [loggerMiddleware, thunkMiddleware]

const composeEnhancers =
  // @ts-ignore
  (process.browser && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const makeConfiguredStore = (reducer: any) =>
  createStore(
    reducer,
    undefined,
    composeEnhancers(applyMiddleware(...middlewareArray))
  )

// @ts-ignore
const makeStore: MakeStore<CombinedState<any>> = ({ isServer }) => {
  if (isServer) return makeConfiguredStore(rootReducer)

  const store = makeConfiguredStore(rootReducer)

  // @ts-ignore
  store.__persistor = persistStore(store)

  return store
}

export const wrapper = createWrapper<CombinedState<any>>(makeStore)

export type AppDispatch = any
