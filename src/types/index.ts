import {Stock} from '../data/api/stocks/entities/Stock.dto';

export interface WatchListStock {
  stock: Stock;
  price: number;
}
