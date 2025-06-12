import {useAuth0} from 'react-native-auth0';
import {Button} from '../ui/Button';
import {Alert} from 'react-native';
import {APP_STRINGS} from '../../constants';

export const AuthButton = () => {
  const {authorize, user, isLoading, clearSession} = useAuth0();

  const handlePressAction = async () => {
    try {
      if (user) {
        await clearSession();
      } else {
        await authorize();
      }
    } catch (error) {
      console.error('Login failed:', error);
      Alert.alert(
        'Authentication Error',
        'An error occurred while trying to log in. Please try again later.',
      );
    }
  };

  return (
    <Button
      isLoading={isLoading}
      onPress={handlePressAction}
      title={user ? APP_STRINGS.LOGOUT : APP_STRINGS.LOGIN}
    />
  );
};
