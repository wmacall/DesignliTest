import {FC, ReactNode} from 'react';
import {TextInput, TextInputProps, View} from 'react-native';
import {COLORS} from '../../../assets';
import styles from './Input.styles';

interface InputProps extends TextInputProps {
  icon?: ReactNode;
}

export const Input: FC<InputProps> = ({
  value,
  onChangeText,
  keyboardType = 'default',
  icon,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor={COLORS.LAVENDER}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        {...rest}
      />
      {icon ? <View style={styles.iconContainer}>{icon}</View> : null}
    </View>
  );
};
