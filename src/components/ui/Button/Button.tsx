import React, {PureComponent} from 'react';
import {ActivityIndicator, Pressable, Text} from 'react-native';
import styles from './Button.styles';
import {COLORS} from '../../../assets';

interface ButtonProps {
  title?: string;
  onPress?: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
}

export class Button extends PureComponent<ButtonProps> {
  static defaultProps = {
    isLoading: false,
  };

  render() {
    const {onPress, title, isDisabled, isLoading} = this.props;

    return (
      <Pressable
        disabled={isDisabled || isLoading}
        style={[styles.button, isDisabled ? styles.buttonDisabled : {}]}
        onPress={onPress}>
        {isLoading ? (
          <ActivityIndicator size="small" color={COLORS.WHITE} />
        ) : (
          <Text style={styles.buttonText}>{title}</Text>
        )}
      </Pressable>
    );
  }
}
