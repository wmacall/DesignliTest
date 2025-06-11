import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackRouter, AppStackRoutes} from '../../routes';
import {WatchListStock} from '../../types';

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  AppStackRouter,
  AppStackRoutes.DETAIL_SCREEN
>;

export interface WatchlistScreenProps {
  stocks: WatchListStock[];
  navigation: HomeScreenNavigationProp;
  handleRemoveStock: (symbol: string) => void;
}
