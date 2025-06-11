import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets';
import {resize} from '../../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
  },
  containerContent: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: resize.scaleWidth(16),
  },
  containerInput: {
    gap: resize.scaleHeight(16),
    marginTop: resize.scaleHeight(16),
  },
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
});
