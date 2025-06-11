import {Alert} from 'react-native';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {WatchlistState} from './watchlist.slice.types';
import {WatchListStock} from '../../types';

const initialState: WatchlistState = {
  stocks: [],
};

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    addToWatchlist: (state, action: PayloadAction<WatchListStock>) => {
      const {stock} = action.payload;
      const isAlreadyAdded = state.stocks.some(
        currentStock => currentStock.stock.symbol === stock.symbol,
      );
      console.log('Adding stock to watchlist:', stock, isAlreadyAdded);
      if (isAlreadyAdded) {
        Alert.alert(
          'Already in Watchlist',
          `The stock ${stock.symbol} is already in your watchlist.`,
        );
        return;
      } else {
        state.stocks.push(action.payload);
        Alert.alert(
          'Added to Watchlist',
          `The stock ${stock.symbol} has been added to your watchlist.`,
        );
      }
    },
    removeFromWatchlist: (state, action: PayloadAction<string>) => {
      state.stocks = state.stocks.filter(
        stock => stock.stock.displaySymbol !== action.payload,
      );
    },
  },
});

export const {addToWatchlist, removeFromWatchlist} = watchlistSlice.actions;
export default watchlistSlice.reducer;
