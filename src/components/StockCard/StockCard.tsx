import React, {PureComponent} from 'react';
import {View, Text, Pressable} from 'react-native';
import {Trash} from 'phosphor-react-native';
import {COLORS} from '../../assets';
import styles from './StockCard.styles';
import {WatchListStock} from '../../types';

interface StockCardProps extends WatchListStock {
  onPressRemove: (symbol: string) => void;
}

export class StockCard extends PureComponent<StockCardProps> {
  handleRemoveStock = () => {
    const {onPressRemove, stock} = this.props;
    onPressRemove(stock.symbol);
  };

  render() {
    const {symbol, description} = this.props.stock;

    return (
      <View style={styles.stockItem}>
        <View style={styles.stockInfo}>
          <Text style={styles.stockSymbol}>{symbol}</Text>
          <Text style={styles.displayName}>{description}</Text>
        </View>
        <Pressable style={styles.deleteButton} onPress={this.handleRemoveStock}>
          <Trash size={20} color={COLORS.ORANGE} />
        </Pressable>
      </View>
    );
  }
}
