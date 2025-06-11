import {FC} from 'react';
import {Pressable, Text, View} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {House, ChartLine} from 'phosphor-react-native';
import {COLORS} from '../../../assets';
import {APP_STRINGS} from '../../../constants';
import {TabsNavigatorRoutes} from '../../../routes';
import styles from './TabBar.styles';

const tabs = [
  {
    name: APP_STRINGS.HOME,
    route: TabsNavigatorRoutes.HOME_SCREEN,
    Icon: House,
  },
  {
    name: APP_STRINGS.WATCH_LIST,
    route: TabsNavigatorRoutes.WATCH_LIST_SCREEN,
    Icon: ChartLine,
  },
];

interface TabBarProps extends BottomTabBarProps {}

export const TabBar: FC<TabBarProps> = ({state, navigation}) => {
  const handleNavigate = (route: string) => navigation.navigate(route);

  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => {
        const isActive = index === state.index;
        const Icon = tab.Icon;
        return (
          <Pressable
            key={tab.route}
            style={styles.tab}
            onPress={() => handleNavigate(tab.route)}>
            <View style={styles.icon}>
              <Icon color={isActive ? COLORS.ORANGE : COLORS.LAVENDER} />
            </View>
            <Text
              style={[
                styles.text,
                {
                  color: isActive ? COLORS.ORANGE : COLORS.LAVENDER,
                },
              ]}>
              {tab.name}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};
