import {StyleSheet} from 'react-native';
import {COLORS} from '../../../assets';
import {resize} from '../../../utils';

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.WHITE,
    height: resize.scaleHeight(78),
    flexDirection: 'row',
    borderTopColor: COLORS.LIGHT_ORANGE,
    borderTopWidth: resize.scaleHeight(1),
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: resize.scaleWidth(8),
  },
  icon: {
    width: resize.scaleWidth(20),
    height: resize.scaleHeight(20),
  },
  text: {
    fontSize: resize.scaleFont(12),
    fontWeight: '500',
  },
});
