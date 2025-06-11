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
  listContent: {
    gap: resize.scaleHeight(8),
    paddingVertical: resize.scaleHeight(16),
  },
});
