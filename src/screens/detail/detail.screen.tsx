import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import {LineChart} from 'react-native-wagmi-charts';
import {StockCard} from '../../components/StockCard';
import Header from '../../components/ui/Header';
import {WatchlistMarketDataContext} from '../../context/watchlist.context';
import {DetailScreenProps} from './detail.screen.types';
import styles from './detail.screen.styles';

export default class DetailScreen extends Component<DetailScreenProps> {
  static contextType = WatchlistMarketDataContext;
  // @ts-ignore
  context!: React.ContextType<typeof WatchlistMarketDataContext>;

  render() {
    const {symbol} = this.props.route.params;
    const {marketData, watchlistStocks} = this.context;
    const stockData = marketData.find(data => data.symbol === symbol);
    const currentStock = watchlistStocks.find(
      stock => stock.stock.symbol === symbol,
    );

    return (
      <View style={styles.container}>
        <Header title={`Detail ${symbol}`} showBackButton />
        <ScrollView>
          <LineChart.Provider data={stockData?.chartData || []}>
            <LineChart>
              <LineChart.Path />
              <LineChart.CursorCrosshair>
                <LineChart.Tooltip />
              </LineChart.CursorCrosshair>
            </LineChart>
          </LineChart.Provider>
          <View style={styles.containerContent}>
            {currentStock ? (
              <StockCard canDelete={false} {...currentStock} />
            ) : null}
          </View>
        </ScrollView>
      </View>
    );
  }
}
