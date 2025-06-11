import React, {Component} from 'react';
import {Pressable, SafeAreaView, Text, View} from 'react-native';
import {CurrencyDollar, MagnifyingGlass} from 'phosphor-react-native';
import {COLORS} from '../../assets';
import {Input} from '../../components/ui/Input';
import {searchStocks} from '../../data/api/stocks';
import styles from './home.screen.styles';
import Header from '../../components/ui/Header';

interface HomeScreenProps {}
interface HomeScreenState {
  searchQuery: string;
  price: string;
}

export class HomeScreen extends Component<HomeScreenProps, HomeScreenState> {
  state: HomeScreenState = {
    searchQuery: '',
    price: '',
  };

  handleGetStock = async () => {
    try {
      const stock = await searchStocks('tes');
      console.log('Stock data:', JSON.stringify(stock.data.result));
    } catch (error) {
      console.error('Error fetching stock data:', error);
    }
  };

  handleSearchQueryChange = (text: string) => {
    this.setState({searchQuery: text});
  };

  handlePriceChange = (text: string) => {
    this.setState({price: text});
  };

  render() {
    const {searchQuery, price} = this.state;

    return (
      <View style={styles.container}>
        <Header title="Add Alert" />
        <View style={styles.containerContent}>
          <View style={styles.containerInput}>
            <Input
              value={searchQuery}
              onChangeText={this.handleSearchQueryChange}
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="off"
              returnKeyType="search"
              placeholder="Search"
              icon={<MagnifyingGlass color={COLORS.LAVENDER} />}
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
