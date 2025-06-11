import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {SplashScreen} from './src/screens/splash';
import {persistor, store} from './src/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import WatchlistPriceProvider from './src/context/watchlist.context';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <WatchlistPriceProvider>
              <SplashScreen />
            </WatchlistPriceProvider>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;
