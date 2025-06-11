import {FC, useEffect} from 'react';
import {View, Text, Pressable, ScrollView} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {MagnifyingGlass} from 'phosphor-react-native';
import {Input} from '../Input';
import {COLORS} from '../../../assets';
import {Stock} from '../../../data/api/stocks/entities/Stock.dto';
import styles from './SearchInput.styles';

interface SearchInputProps {
  searchQuery: string;
  onSearchQueryChange: (text: string) => void;
  stocks?: Stock[];
  onPressItem?: (stock: Stock) => void;
}

export const SearchInput: FC<SearchInputProps> = ({
  onSearchQueryChange,
  searchQuery,
  stocks = [],
  onPressItem,
}) => {
  const animationValue = useSharedValue(0);

  useEffect(() => {
    animationValue.value = stocks.length > 0 ? 1 : 0;
  }, [stocks, animationValue]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(animationValue.value, {duration: 300}),
      transform: [
        {
          translateY: withTiming(animationValue.value === 1 ? 0 : -20, {
            duration: 300,
          }),
        },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Input
        value={searchQuery}
        onChangeText={onSearchQueryChange}
        autoCapitalize="none"
        autoCorrect={false}
        autoComplete="off"
        returnKeyType="search"
        placeholder="Search"
        icon={<MagnifyingGlass color={COLORS.LAVENDER} />}
      />
      <Animated.View style={[styles.suggestionsContainer, animatedStyle]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {stocks.map((stock, index) => (
            <Pressable
              key={`${stock.symbol}-${index}`}
              style={styles.stockItem}
              onPress={() => onPressItem?.(stock)}>
              <Text style={styles.stockText}>
                {stock.displaySymbol} - {stock.description}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </Animated.View>
    </View>
  );
};
