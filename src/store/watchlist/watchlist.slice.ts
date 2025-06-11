import {Alert} from 'react-native';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {WatchlistState} from './watchlist.slice.types';
import {Stock} from '../../data/api/stocks/entities/Stock.dto';

const initialState: WatchlistState = {
  stocks: [],
};

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    addToWatchlist: (state, action: PayloadAction<Stock>) => {
      const isAlreadyAdded = state.stocks.some(
        stock => stock.symbol === action.payload.symbol,
      );
      if (isAlreadyAdded) {
        Alert.alert(
          'Already in Watchlist',
          `The stock ${action.payload.symbol} is already in your watchlist.`,
        );
        return;
      }
      state.stocks.push(action.payload);
    },
    removeFromWatchlist: (state, action: PayloadAction<string>) => {
      state.stocks = state.stocks.filter(
        stock => stock.symbol !== action.payload,
      );
    },
  },
});

export const {addToWatchlist, removeFromWatchlist} = watchlistSlice.actions;
export default watchlistSlice.reducer;
