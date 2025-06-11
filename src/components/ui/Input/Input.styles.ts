import {StyleSheet} from 'react-native';
import {COLORS} from '../../../assets';
import {resize} from '../../../utils';

export default StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  input: {
    width: '100%',
    backgroundColor: COLORS.BLUSH,
    borderRadius: resize.scaleWidth(16),
    height: resize.scaleHeight(42),
    paddingLeft: resize.scaleWidth(16),
    fontSize: resize.scaleFont(14),
    paddingRight: resize.scaleWidth(36),
    color: COLORS.ORANGE,
  },
  iconContainer: {
    position: 'absolute',
    right: resize.scaleWidth(14),
  },
});
