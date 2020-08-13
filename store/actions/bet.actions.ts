import { ISetBetPayload, BET_SET } from '@store/types/bet.types'
import { ThunkAction } from 'redux-thunk'
import { AppDispatch } from '@store'
import { betService } from '@services'
import { RootState } from '@store/reducers'
import { Action } from 'redux'

const actions = {
  setBets({ bets }: ISetBetPayload) {
    return {
      type: BET_SET,
      payload: { bets },
    }
  },
  fetchBetsRequest(): ThunkAction<void, RootState, unknown, Action<void>> {
    return async (dispatch: AppDispatch) => {
      try {
        const res = await betService.fetch()

        const bets = res.data

        dispatch(actions.setBets({ bets }))
      } catch (e) {
        console.error(e)
      }
    }
  },
}

export default actions
