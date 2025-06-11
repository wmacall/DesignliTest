import {Pressable, SafeAreaView, Text, View} from 'react-native';
import {CurrencyDollar, MagnifyingGlass} from 'phosphor-react-native';
import {COLORS} from '../../assets';
import {Header} from '../../components/ui/Header';
import {Input} from '../../components/ui/Input';
import styles from './home.screen.styles';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Add Alert" showBackButton={false} />
      <View style={styles.containerContent}>
        <View style={styles.containerInput}>
          <Input
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="off"
            returnKeyType="search"
            placeholder="Search"
            icon={<MagnifyingGlass color={COLORS.LAVENDER} />}
          />
          <Input
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
};
