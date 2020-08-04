import { customAxios } from '@core'
import { AxiosPromise } from 'axios'
import { IGame } from '@store/types/game.types'

export const fetchGames = (): AxiosPromise<IGame[]> => {
  return customAxios.get('/games')
}

export const fetchOneGame = (id: string | number): AxiosPromise<IGame> => {
  return customAxios.get(`/games/${id}`)
}
