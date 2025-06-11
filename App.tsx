import {NavigationContainer} from '@react-navigation/native';
import {SplashScreen} from './src/screens/splash';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <SplashScreen />
    </NavigationContainer>
  );
}

export default App;
