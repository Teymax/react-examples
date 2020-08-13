import { customAxios } from '@core'
import { AxiosPromise } from 'axios'
import { IGame } from '@store/types/game.types'
import { CHALK_URL } from '@core/axios'
import { IBet } from '@store/types/bet.types'

export const fetch = (): AxiosPromise<IBet[]> => {
  return customAxios.get(`${CHALK_URL}/bets`)
}
