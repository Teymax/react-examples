import gameReducer from './game.reducer'
import authReducer from './auth.reducer'
import betReducer from './bet.reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  game: gameReducer,
  auth: authReducer,
  bet: betReducer,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
