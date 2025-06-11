import React, {Component} from 'react';
import {Alert, Pressable, SafeAreaView, Text, View} from 'react-native';
import {CurrencyDollar} from 'phosphor-react-native';
import {COLORS} from '../../assets';
import {Input} from '../../components/ui/Input';
import Header from '../../components/ui/Header';
import {SearchInput} from '../../components/ui/SearchInput';
import {searchStocks} from '../../data/api/stocks';
import {Stock} from '../../data/api/stocks/entities/Stock.dto';
import {mapStockFromApi} from '../../data/api/stocks/adapters/Stock.adapter';
import {connect} from 'react-redux';
import {addToWatchlist} from '../../store/watchlist/watchlist.slice';
import styles from './home.screen.styles';
import {Dispatch} from 'redux';

interface HomeScreenProps {
  addStockToWatchlist: (stock: Stock) => void;
}
interface HomeScreenState {
  searchQuery: string;
  price: string;
  stocks: Stock[];
}

let debounceTimeout: NodeJS.Timeout;

class HomeScreen extends Component<HomeScreenProps, HomeScreenState> {
  state: HomeScreenState = {
    searchQuery: '',
    price: '',
    stocks: [],
  };

  handleGetStock = async (query: string) => {
    try {
      const stock = await searchStocks(query);
      this.setState({stocks: mapStockFromApi(stock.data.result)});
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch stocks. Please try again later.');
    }
  };

  handleSearchQueryChange = (text: string) => {
    this.setState({searchQuery: text});
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }
    if (text.trim() !== '') {
      debounceTimeout = setTimeout(() => {
        this.handleGetStock(text);
      }, 500);
    } else {
      this.setState({stocks: []});
    }
  };

  handlePriceChange = (text: string) => {
    this.setState({price: text});
  };

  handlePressStock = (stock: Stock) => {
    this.props.addStockToWatchlist(stock);
  };

  render() {
    const {searchQuery, price, stocks} = this.state;

    return (
      <View style={styles.container}>
        <Header title="Add Alert" />
        <View style={styles.containerContent}>
          <View style={styles.containerInput}>
            <SearchInput
              stocks={stocks}
              onSearchQueryChange={this.handleSearchQueryChange}
              searchQuery={searchQuery}
              onPressItem={this.handlePressStock}
            />
            <Input
              value={price}
              onChangeText={this.handlePriceChange}
              keyboardType="number-pad"
              returnKeyType="done"
              placeholder="Price"
              icon={<CurrencyDollar color={COLORS.LAVENDER} />}
            />
          </View>
          <SafeAreaView>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Add Alert</Text>
            </Pressable>
          </SafeAreaView>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addStockToWatchlist: (stock: Stock) => dispatch(addToWatchlist(stock)),
});

export default connect(null, mapDispatchToProps)(HomeScreen);
