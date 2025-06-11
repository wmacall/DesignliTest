import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets';
import {resize} from '../../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: resize.scaleWidth(16),
  },
  emptyListText: {
    textAlign: 'center',
    fontSize: resize.scaleFont(16),
    color: COLORS.LAVENDER,
    paddingVertical: resize.scaleHeight(32),
  },
  stockItem: {
    paddingVertical: resize.scaleHeight(12),
    borderBottomWidth: 1,
    borderBottomColor: COLORS.LAVENDER,
  },
  displayName: {
    fontSize: resize.scaleFont(14),
    color: COLORS.LAVENDER,
  },
  stockSymbol: {
    fontSize: resize.scaleFont(16),
    fontWeight: 'bold',
    color: COLORS.WHITE,
  },
});
