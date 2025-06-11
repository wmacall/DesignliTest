import React, {PureComponent} from 'react';
import {View, Text, Pressable} from 'react-native';
import {ChartLineDown, ChartLineUp, Trash} from 'phosphor-react-native';
import {COLORS} from '../../assets';
import {WatchListStock} from '../../types';
import {WatchlistMarketDataContext} from '../../context/watchlist.context';
import styles from './StockCard.styles';

interface StockCardProps extends WatchListStock {
  onPressRemove: (symbol: string) => void;
  onPressCard: (symbol: string) => void;
}

export class StockCard extends PureComponent<StockCardProps> {
  static contextType = WatchlistMarketDataContext;
  // @ts-ignore
  context!: React.ContextType<typeof WatchlistMarketDataContext>;

  handleRemoveStock = () => {
    const {onPressRemove, stock} = this.props;
    onPressRemove(stock.symbol);
  };

  handlePressCard = () => {
    const {onPressCard, stock} = this.props;
    onPressCard(stock.symbol);
  };

  render() {
    const {stock} = this.props;
    const {marketData} = this.context;
    const stockData = marketData.find(data => data.symbol === stock.symbol);

    const currentValue = stockData ? stockData.currentValue.toFixed(2) : '...';
    const percentageChange = stockData
      ? `${stockData.percentageChange.toFixed(2)} %`
      : '...';

    const percentageStyle = stockData
      ? stockData.percentageChange >= 0
        ? styles.percentagePositive
        : styles.percentageNegative
      : styles.percentageNeutral;

    return (
      <Pressable onPress={this.handlePressCard} style={styles.stockItem}>
        <View style={styles.stockInfo}>
          <View style={styles.stockDetails}>
            <View>
              <Text style={styles.stockSymbol}>{stock.symbol}</Text>
              <Text style={styles.displayName}>{stock.description}</Text>
            </View>
            <Text style={styles.alertText}>
              Alert at: ${stockData?.targetPrice.toFixed(2) || '...'}
            </Text>
          </View>
          <View style={styles.stockDetails}>
            <View>
              <Text style={styles.priceText}>Price: ${currentValue}</Text>
              <View style={styles.percentageContainer}>
                {stockData && stockData.percentageChange >= 0 ? (
                  <ChartLineUp size={16} color={COLORS.GREEN} />
                ) : (
                  <ChartLineDown size={16} color={COLORS.ORANGE} />
                )}
                <Text style={[styles.percentageText, percentageStyle]}>
                  {percentageChange}
                </Text>
              </View>
            </View>
            <Pressable
              style={styles.deleteButton}
              onPress={this.handleRemoveStock}>
              <Trash size={20} color={COLORS.ORANGE} />
            </Pressable>
          </View>
        </View>
      </Pressable>
    );
  }
}
