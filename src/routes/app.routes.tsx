import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AppStackRouter,
  AppStackRoutes,
  TabsNavigatorRouter,
  TabsNavigatorRoutes,
} from './app.routes.types';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {TabBar} from '../components/ui/TabBar';
import {HomeScreen} from '../screens';

const AppNavigator = createNativeStackNavigator<AppStackRouter>();
const TabsNavigator = createBottomTabNavigator<TabsNavigatorRouter>();

const renderTabBar = (props: BottomTabBarProps) => <TabBar {...props} />;

const TabsRoutes = () => (
  <TabsNavigator.Navigator
    initialRouteName={TabsNavigatorRoutes.HOME_SCREEN}
    tabBar={renderTabBar}
    screenOptions={{
      headerShown: false,
    }}>
    <TabsNavigator.Screen
      name={TabsNavigatorRoutes.HOME_SCREEN}
      component={HomeScreen}
    />
    <TabsNavigator.Screen
      name={TabsNavigatorRoutes.WATCH_LIST_SCREEN}
      component={HomeScreen}
    />
  </TabsNavigator.Navigator>
);

export const AppRoutes = () => (
  <AppNavigator.Navigator
    initialRouteName={AppStackRoutes.TABS_NAVIGATOR}
    screenOptions={{
      headerShown: false,
    }}>
    <AppNavigator.Screen
      name={AppStackRoutes.TABS_NAVIGATOR}
      component={TabsRoutes}
    />
    <AppNavigator.Screen
      name={AppStackRoutes.DETAIL_SCREEN}
      component={HomeScreen}
    />
  </AppNavigator.Navigator>
);
