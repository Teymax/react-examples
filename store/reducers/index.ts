import gameReducer from './game.reducer'
import authReducer from './auth.reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  game: gameReducer,
  auth: authReducer,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
