import React, {PureComponent, ReactNode} from 'react';
import {Text, TouchableOpacity, View, SafeAreaView} from 'react-native';
import {X} from 'phosphor-react-native';
import styles from './Header.styles';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {AppNavigationProp} from '../../../routes';

interface HeaderProps {
  title: string;
  rightIcon?: ReactNode;
  onRightIconPress?: () => void;
  showBackButton?: boolean;
  navigation: NavigationProp<AppNavigationProp>;
}

class HeaderComponent extends PureComponent<HeaderProps> {
  static defaultProps = {
    showBackButton: false,
  };

  handleBackPress = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };

  render() {
    const {title, rightIcon, onRightIconPress, showBackButton} = this.props;

    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {showBackButton ? (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={this.handleBackPress}
              style={styles.leftIconContainer}>
              <X weight="bold" size={24} />
            </TouchableOpacity>
          ) : null}
          <Text style={styles.title}>{title}</Text>
          {rightIcon && (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onRightIconPress}
              style={styles.rightIconContainer}>
              {rightIcon}
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    );
  }
}

export default function (props: Omit<HeaderProps, 'navigation'>) {
  const navigation = useNavigation<NavigationProp<AppNavigationProp>>();

  return <HeaderComponent {...props} navigation={navigation} />;
}
