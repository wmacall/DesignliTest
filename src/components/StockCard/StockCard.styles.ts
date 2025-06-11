import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets';
import {resize} from '../../utils';

export default StyleSheet.create({
  stockItem: {
    backgroundColor: COLORS.WHITE,
    borderRadius: resize.scaleWidth(16),
    padding: resize.scaleWidth(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stockInfo: {
    flexDirection: 'column',
  },
  stockDetails: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  alertText: {
    color: COLORS.MAUVE,
  },
  priceText: {
    color: COLORS.MAUVE,
  },
  percentageText: {
    fontSize: 14,
  },
  percentagePositive: {
    color: COLORS.GREEN,
  },
  percentageNegative: {
    color: COLORS.ORANGE,
  },
  percentageNeutral: {
    color: COLORS.LAVENDER,
  },
  percentageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  stockSymbol: {
    fontSize: resize.scaleFont(16),
    fontWeight: 'bold',
    color: COLORS.MAUVE,
  },
  displayName: {
    fontSize: resize.scaleFont(14),
    color: COLORS.LAVENDER,
  },
  deleteButton: {
    height: resize.scaleHeight(32),
    width: resize.scaleHeight(32),
    borderRadius: resize.scaleHeight(16),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.LIGHT_ORANGE,
  },
});
