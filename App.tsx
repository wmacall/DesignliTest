import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {SplashScreen} from './src/screens/splash';
import {persistor, store} from './src/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import WatchlistPriceProvider from './src/context/watchlist.context';
import {Auth0Provider} from 'react-native-auth0';

function App(): React.JSX.Element {
  return (
    <Auth0Provider
      domain="dev-hh37nwm0tvkwtfzm.us.auth0.com"
      clientId="Pcb0RyHudOd98fBCPtHPjGVAJYKHzwXW">
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
    </Auth0Provider>
  );
}

export default App;
