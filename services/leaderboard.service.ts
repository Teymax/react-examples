import { customAxios } from '@core';
import { AxiosPromise } from 'axios';
import { CHALK_URL } from '@core/axios';

interface IFetchLeaderboardPayload {
  seriesNames?: string;
  gameNames?: string;
  gameIds?: string;
  playerIds?: string;
}

export const fetchLeaderboard = (
  options: IFetchLeaderboardPayload
): AxiosPromise<any[]> => {
  return customAxios.get(`${CHALK_URL}/leaderboard`, {
    params: options,
  });
};
