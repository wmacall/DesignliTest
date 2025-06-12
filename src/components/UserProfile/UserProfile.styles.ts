import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets';
import {resize} from '../../utils';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: resize.scaleWidth(16),
    paddingVertical: resize.scaleHeight(16),
  },
  image: {
    width: resize.scaleWidth(50),
    height: resize.scaleHeight(50),
    borderRadius: resize.scaleWidth(25),
    backgroundColor: COLORS.BLUSH,
  },
  nameText: {
    fontSize: resize.scaleFont(16),
    fontWeight: 'bold',
    color: COLORS.MAUVE,
  },
  descriptionText: {
    fontSize: resize.scaleFont(14),
    color: COLORS.LAVENDER,
  },
});
