import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {SplashScreen} from './src/screens/splash';
import {persistor, store} from './src/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <SplashScreen />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
