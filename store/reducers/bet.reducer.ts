import { IBet, BET_SET, BetActionType } from '@store/types/bet.types';

interface IBetState {
  bets: Array<IBet>;
}

const initialState: IBetState = {
  bets: [],
};

const reducer = (
  state: IBetState = initialState,
  action: BetActionType
): IBetState => {
  switch (action.type) {
    case BET_SET:
      return {
        ...state,
        bets: action.payload.bets,
      };

    default:
      return state;
  }
};

export default reducer;
