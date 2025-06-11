import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {PlusCircle} from 'phosphor-react-native';
import Header from '../../components/ui/Header';
import {APP_STRINGS} from '../../constants';
import {RootState} from '../../store';
import {TabsNavigatorRoutes} from '../../routes';
import {WatchlistScreenProps} from './watchlist.screen.types';
import styles from './watchlist.screen.styles';
import {removeFromWatchlist} from '../../store/watchlist/watchlist.slice';
import {Dispatch} from 'redux';
import {StockCard} from '../../components/StockCard';

class WatchlistScreen extends Component<WatchlistScreenProps> {
  handleNavigateToAddStock = () => {
    const {navigation} = this.props;
    navigation.navigate(TabsNavigatorRoutes.HOME_SCREEN);
  };

  render() {
    const {stocks, handleRemoveStock} = this.props;

    return (
      <View style={styles.container}>
        <Header
          title={APP_STRINGS.WATCH_LIST}
          rightIcon={<PlusCircle />}
          onRightIconPress={this.handleNavigateToAddStock}
        />
        <View style={styles.contentContainer}>
          <FlatList
            data={stocks}
            keyExtractor={item => item.symbol}
            contentContainerStyle={styles.listContent}
            renderItem={({item}) => (
              <StockCard {...item} onPressRemove={handleRemoveStock} />
            )}
            ListEmptyComponent={
              <Text style={styles.emptyListText}>
                {APP_STRINGS.NO_STOCKS_IN_WATCHLIST}
              </Text>
            }
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({watchlist}: RootState) => ({
  stocks: watchlist.stocks || [],
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleRemoveStock: (symbol: string) => dispatch(removeFromWatchlist(symbol)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WatchlistScreen);
