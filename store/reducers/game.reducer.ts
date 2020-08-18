import {
  IGame,
  GAME_MULTIPLE_ADD,
  GAME_ONE_ADD,
  GAME_FETCH,
  GameActionType,
} from '@store/types/game.types';

interface IGameState {
  games: Array<IGame>;
}

const initialState: IGameState = {
  games: [],
};

const reducer = (
  state: IGameState = initialState,
  action: GameActionType
): IGameState => {
  switch (action.type) {
    case GAME_ONE_ADD:
      return {
        ...state,
        games: [...state.games, action.payload.game],
      };
    case GAME_MULTIPLE_ADD:
      return {
        ...state,
        games: [...state.games, ...action.payload.games],
      };
    case GAME_FETCH:
      return {
        ...state,
        games: action.payload.games,
      };
    case GAME_MULTIPLE_ADD:
      return {
        ...state,
        games: [...state.games, ...action.payload.games],
      };

    default:
      return state;
  }
};

export default reducer;
