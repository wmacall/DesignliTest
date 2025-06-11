import {Stock} from '../entities/Stock.dto';

export const mapStockFromApi = (stocks: Stock[]): Stock[] =>
  stocks.map(stock => ({
    description: stock.description,
    displaySymbol: stock.displaySymbol,
    symbol: stock.symbol,
    type: stock.type,
  }));
