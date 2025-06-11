import {View} from 'react-native';
import {Header} from '../../components/ui/Header';
import {APP_STRINGS} from '../../constants';
import styles from './watchlist.screen.styles';

export const WatchlistScreen = () => {
  return (
    <View style={styles.container}>
      <Header title={APP_STRINGS.WATCH_LIST} />
    </View>
  );
};
