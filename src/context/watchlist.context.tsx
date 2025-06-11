import React, {Component, createContext} from 'react';
import {Alert} from 'react-native';
import {connect} from 'react-redux';
import {RootState} from '../store';
import {WatchlistMarketData, WatchListStock} from '../types';

type WatchlistMarketDataContextValue = {
  marketData: WatchlistMarketData[];
  watchlistStocks: WatchListStock[];
};

export const WatchlistMarketDataContext =
  createContext<WatchlistMarketDataContextValue>({
    marketData: [],
    watchlistStocks: [],
  });

type Props = {
  children: React.ReactNode;
  watchlistStocks: WatchListStock[];
};

type State = {
  marketData: WatchlistMarketData[];
};

class WatchlistMarketDataProvider extends Component<Props, State> {
  socket: WebSocket | null = null;
  lastPrices: {[symbol: string]: number} = {};
  alertedSymbols: Set<string> = new Set();

  state: State = {
    marketData: [],
  };

  componentDidMount() {
    this.connectWebSocket();
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.watchlistStocks !== this.props.watchlistStocks) {
      this.resubscribe();
    }
  }

  componentWillUnmount() {
    if (this.socket) {
      this.socket.close();
    }
  }

  connectWebSocket = () => {
    this.socket = new WebSocket(
      'wss://ws.finnhub.io?token=d14aup1r01qrqeat6rh0d14aup1r01qrqeat6rhg',
    );

    this.socket.addEventListener('open', () => {
      console.log('WebSocket connected');
      this.subscribeToSymbols();
    });

    this.socket.addEventListener('message', event => {
      const message = JSON.parse(event.data);
      if (message.type === 'trade' && Array.isArray(message.data)) {
        message.data.forEach((trade: any) => {
          this.handleNewTrade(trade.s, trade.p, trade.t);
        });
      }
    });

    this.socket.addEventListener('close', () => {
      console.log('WebSocket disconnected');
    });

    this.socket.addEventListener('error', error => {
      console.error('WebSocket error:', error);
    });
  };

  subscribeToSymbols = () => {
    this.props.watchlistStocks.forEach(stock => {
      this.socket?.send(
        JSON.stringify({type: 'subscribe', symbol: stock.stock.symbol}),
      );
    });
  };

  resubscribe = () => {
    this.state.marketData.forEach(data => {
      this.socket?.send(
        JSON.stringify({type: 'unsubscribe', symbol: data.symbol}),
      );
    });

    this.lastPrices = {};
    this.alertedSymbols.clear();
    this.setState({marketData: []}, () => {
      this.subscribeToSymbols();
    });
  };

  handleNewTrade = (symbol: string, price: number, timestampMs: number) => {
    this.lastPrices[symbol] = price;

    this.setState(prevState => {
      const updatedMarketData: WatchlistMarketData[] =
        this.props.watchlistStocks.map(watchStock => {
          const currentPrice = this.lastPrices[watchStock.stock.symbol] || 0;
          const percentageChange =
            ((currentPrice - watchStock.price) / watchStock.price) * 100;

          if (
            currentPrice > watchStock.price &&
            !this.alertedSymbols.has(watchStock.stock.symbol)
          ) {
            Alert.alert(
              'Price Alert',
              `${watchStock.stock.description} has exceeded your target price!`,
            );
            this.alertedSymbols.add(watchStock.stock.symbol);
          }

          const existingData =
            prevState.marketData.find(
              data => data.symbol === watchStock.stock.symbol,
            )?.chartData || [];

          const nextChartData = [
            ...existingData,
            {
              timestamp: timestampMs,
              value: currentPrice,
            },
          ].slice(-50);

          return {
            symbol: watchStock.stock.symbol,
            name: watchStock.stock.description,
            currentValue: currentPrice,
            percentageChange,
            chartData: nextChartData,
            targetPrice: watchStock.price,
          };
        });

      return {marketData: updatedMarketData};
    });
  };

  render() {
    return (
      <WatchlistMarketDataContext.Provider
        value={{
          marketData: this.state.marketData,
          watchlistStocks: this.props.watchlistStocks,
        }}>
        {this.props.children}
      </WatchlistMarketDataContext.Provider>
    );
  }
}

const mapStateToProps = ({watchlist}: RootState) => ({
  watchlistStocks: watchlist.stocks || [],
});

export default connect(mapStateToProps)(WatchlistMarketDataProvider);
