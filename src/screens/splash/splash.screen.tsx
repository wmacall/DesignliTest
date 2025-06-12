import {SafeAreaView, StyleSheet, View} from 'react-native';
import BootSplash from 'react-native-bootsplash';
import {AppRoutes} from '../../routes';
import {useEffect} from 'react';

export const SplashScreen = () => {
  const hideBootSplash = async () => {
    await BootSplash.hide({fade: true});
  };

  useEffect(() => {
    hideBootSplash();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <AppRoutes />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
