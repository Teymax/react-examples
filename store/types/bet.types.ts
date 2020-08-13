import { IAction } from '@interfaces'

export interface IBet {
  id: number | string
}

export const BET_SET = 'BET_SET'

export interface ISetBetPayload {
  bets: IBet[]
}

interface ISetBetAction extends IAction {
  type: typeof BET_SET
  payload: ISetBetPayload
}

export type BetActionType = ISetBetAction
