import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets';
import {resize} from '../../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
  },
  containerContent: {
    paddingHorizontal: resize.scaleWidth(16),
    marginTop: resize.scaleHeight(16),
  },
  noDataText: {
    color: COLORS.LAVENDER,
    fontSize: resize.scaleFont(16),
    textAlign: 'center',
    marginBottom: resize.scaleHeight(16),
  },
});
