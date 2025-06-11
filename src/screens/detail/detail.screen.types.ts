import {RouteProp} from '@react-navigation/native';
import {AppStackRouter, AppStackRoutes} from '../../routes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type DetailScreenNavigationProp = NativeStackNavigationProp<
  AppStackRouter,
  AppStackRoutes.DETAIL_SCREEN
>;

export type DetailScreenRouteProp = RouteProp<
  AppStackRouter,
  AppStackRoutes.DETAIL_SCREEN
>;

export interface DetailScreenProps {
  navigation: DetailScreenNavigationProp;
  route: DetailScreenRouteProp;
}
