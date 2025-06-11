import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TabsNavigatorRouter, TabsNavigatorRoutes} from '../../routes';
import {Stock} from '../../data/api/stocks/entities/Stock.dto';

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  TabsNavigatorRouter,
  TabsNavigatorRoutes.WATCH_LIST_SCREEN
>;

export interface WatchlistScreenProps {
  stocks: Stock[];
  navigation: HomeScreenNavigationProp;
}
