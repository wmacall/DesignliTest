import {StyleSheet} from 'react-native';
import {resize} from '../../../utils';
import {COLORS} from '../../../assets';

export default StyleSheet.create({
  container: {
    position: 'relative',
  },
  suggestionsContainer: {
    backgroundColor: COLORS.WHITE,
    height: resize.scaleHeight(300),
    width: '100%',
    position: 'absolute',
    bottom: -resize.scaleHeight(312),
    zIndex: 1,
    borderRadius: resize.scaleWidth(16),
    overflow: 'hidden',
  },
  stockItem: {
    padding: resize.scaleHeight(16),
    borderBottomWidth: resize.scaleHeight(0.5),
    borderBottomColor: COLORS.BLUSH,
  },
  stockText: {
    fontSize: resize.scaleFont(16),
    color: COLORS.ORANGE,
  },
});
