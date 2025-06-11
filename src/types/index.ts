import {Stock} from '../data/api/stocks/entities/Stock.dto';

export interface WatchListStock {
  stock: Stock;
  price: number;
}

export interface WatchlistMarketData {
  symbol: string;
  name: string;
  currentValue: number;
  percentageChange: number;
  chartData: WatchlistMarketDataChart[];
  targetPrice: number;
}

export interface WatchlistMarketDataChart {
  timestamp: number;
  value: number;
}
