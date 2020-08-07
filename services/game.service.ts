import { customAxios } from '@core'
import { AxiosPromise } from 'axios'
import { IGame } from '@store/types/game.types'
import { CHALK_URL } from '@core/axios'

export const fetchGames = (): AxiosPromise<IGame[]> => {
  return customAxios.get(`${CHALK_URL}/games`)
}

export const fetchOneGame = (id: string | number): AxiosPromise<IGame> => {
  return customAxios.get(`${CHALK_URL}/games/${id}`)
}
