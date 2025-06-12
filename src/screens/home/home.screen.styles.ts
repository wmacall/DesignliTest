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
  containerButton: {
    gap: resize.scaleHeight(16),
    marginBottom: resize.scaleHeight(16),
  },
});
