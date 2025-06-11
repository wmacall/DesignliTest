import {SafeAreaView, StyleSheet, View} from 'react-native';
import {AppRoutes} from '../../routes';

export const SplashScreen = () => {
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
