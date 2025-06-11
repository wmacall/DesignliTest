import {AxiosResponse} from 'axios';
import {dispatchRequest} from '..';
import {StockSearchResponse} from './entities/Stock.dto';

export const searchStocks = async (
  query: string,
): Promise<AxiosResponse<StockSearchResponse>> =>
  dispatchRequest({
    url: 'search',
    method: 'GET',
    params: {
      q: query,
    },
  });
