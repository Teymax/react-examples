import { IAction } from '@interfaces';

export interface IGame {
  name: string;
  id: number | string;
}

export const GAME_ONE_ADD = 'GAME_ONE_ADD';
export const GAME_MULTIPLE_ADD = 'GAME_MULTIPLE_ADD';
export const GAME_FETCH = 'GAME_FETCH';

export interface IAddOneGamePayload {
  game: IGame;
}

interface IAddOneGameAction extends IAction {
  type: typeof GAME_ONE_ADD;
  payload: IAddOneGamePayload;
}

export interface IAddMultipleGamePayload {
  games: IGame[];
}

interface IAddMultipleGameAction extends IAction {
  type: typeof GAME_MULTIPLE_ADD;
  payload: IAddMultipleGamePayload;
}

export interface IFetchGamePayload {
  games: IGame[];
}

interface IFetchGameAction extends IAction {
  type: typeof GAME_FETCH;
  payload: IFetchGamePayload;
}

export type GameActionType =
  | IAddOneGameAction
  | IAddMultipleGameAction
  | IFetchGameAction;
