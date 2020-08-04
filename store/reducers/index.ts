import gameReducer from './game.reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  game: gameReducer,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
