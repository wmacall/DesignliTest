import {Stock} from '../../data/api/stocks/entities/Stock.dto';

export interface HomeScreenProps {
  addStockToWatchlist: (stock: Stock, price: number) => void;
}
export interface HomeScreenState {
  searchQuery: string;
  price: string;
  stocks: Stock[];
  selectedStock: Stock | null;
}
