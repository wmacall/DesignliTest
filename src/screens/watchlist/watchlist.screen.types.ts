import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TabsNavigatorRouter, TabsNavigatorRoutes} from '../../routes';
import {WatchListStock} from '../../types';

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  TabsNavigatorRouter,
  TabsNavigatorRoutes.WATCH_LIST_SCREEN
>;

export interface WatchlistScreenProps {
  stocks: WatchListStock[];
  navigation: HomeScreenNavigationProp;
  handleRemoveStock: (symbol: string) => void;
}
