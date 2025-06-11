import {StyleSheet} from 'react-native';
import {COLORS} from '../../../assets';
import {resize} from '../../../utils';

export default StyleSheet.create({
  button: {
    backgroundColor: COLORS.PEACH,
    borderRadius: resize.scaleWidth(24),
    alignItems: 'center',
    justifyContent: 'center',
    height: resize.scaleHeight(48),
    marginVertical: resize.scaleHeight(12),
  },
  buttonText: {
    color: COLORS.WHITE,
    fontSize: resize.scaleFont(16),
    fontWeight: '600',
  },
  buttonDisabled: {
    backgroundColor: COLORS.LAVENDER,
    opacity: 0.6,
  },
});
