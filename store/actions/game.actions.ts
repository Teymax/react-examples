import { ThunkAction } from 'redux-thunk'
import { RootState } from 'store/reducers'
import { AppDispatch } from 'store'
import { Action } from 'redux'
import { customAxios } from 'core'
import {
  GAME_MULTIPLE_ADD,
  IAddMultipleGamePayload,
  GAME_FETCH,
  IFetchGamePayload,
} from '@store/types/game.types'
import { gameService } from '@services'

const actions = {
  addGames({ games }: IAddMultipleGamePayload) {
    return {
      type: GAME_MULTIPLE_ADD,
      payload: { games },
    }
  },
  setGames({ games }: IAddMultipleGamePayload) {
    return {
      type: GAME_FETCH,
      payload: { games },
    }
  },
  fetchMultipleGames({ games }: IFetchGamePayload) {
    return {
      type: GAME_FETCH,
      payload: { games },
    }
  },
  fetchMultipleGamesRequest(): ThunkAction<void, RootState, unknown, Action<void>> {
    return async (dispatch: AppDispatch) => {
      try {
        const res = await gameService.fetchGames()

        const games = res.data

        console.log(games)

        dispatch(actions.setGames({ games }))
      } catch (e) {
        console.error(e)
      }
    }
  },
}

export default actions
