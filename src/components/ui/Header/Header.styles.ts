import {StyleSheet} from 'react-native';
import {COLORS} from '../../../assets';
import {resize} from '../../../utils';

export default StyleSheet.create({
  safeArea: {
    backgroundColor: COLORS.WHITE,
  },
  container: {
    height: resize.scaleHeight(40),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: resize.scaleWidth(16),
    backgroundColor: COLORS.WHITE,
  },
  leftIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: resize.scaleWidth(36),
    position: 'absolute',
    left: resize.scaleWidth(16),
  },
  title: {
    fontSize: resize.scaleFont(18),
    fontWeight: '600',
    textAlign: 'center',
    color: COLORS.BLACK,
  },
  rightIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: resize.scaleHeight(36),
    width: resize.scaleWidth(36),
    position: 'absolute',
    right: resize.scaleWidth(16),
  },
});
