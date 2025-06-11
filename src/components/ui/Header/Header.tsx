import React, {FC, ReactNode} from 'react';
import {Text, TouchableOpacity, View, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {X} from 'phosphor-react-native';
import styles from './Header.styles';

interface HeaderProps {
  title: string;
  rightIcon?: ReactNode;
  onRightIconPress?: () => void;
  showBackButton?: boolean;
}

export const Header: FC<HeaderProps> = ({
  title,
  rightIcon,
  onRightIconPress,
  showBackButton = true,
}) => {
  const {goBack} = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {showBackButton ? (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={goBack}
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
};
