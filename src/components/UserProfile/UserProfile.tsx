import {Image, Text, View} from 'react-native';
import {useAuth0} from 'react-native-auth0';
import styles from './UserProfile.styles';

export const UserProfile = () => {
  const {user} = useAuth0();

  if (!user) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image source={{uri: user.picture}} style={styles.image} />
      <View>
        <Text style={styles.nameText}>Hello, {user?.name}</Text>
        <Text style={styles.descriptionText}>Start searching for stocks!</Text>
      </View>
    </View>
  );
};
