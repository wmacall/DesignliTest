import {Dimensions, PixelRatio, Platform} from 'react-native';

const FIGMA_WIDTH = 390;
const FIGMA_HEIGHT = 844;
const dimensionType = Platform.OS === 'ios' ? 'screen' : 'window';
const screen = Dimensions.get(dimensionType);

const widthToDp = (givenWidth: number): number => {
  let widthValue = (givenWidth * 100) / FIGMA_WIDTH;
  widthValue = widthValue / 100;
  widthValue = screen.width * widthValue;
  return PixelRatio.roundToNearestPixel(widthValue);
};
const heightToDp = (givenHeight: number): number => {
  let heightValue = (givenHeight * 100) / FIGMA_HEIGHT;
  heightValue = heightValue / 100;
  heightValue = screen.height * heightValue;
  return PixelRatio.roundToNearestPixel(heightValue);
};

export const {width: BASE_WIDTH, height: BASE_HEIGHT} =
  Dimensions.get(dimensionType);

export const resize = {
  scaleWidth: (figmaUnits: number): number => widthToDp(figmaUnits),
  scaleHeight: (figmaUnits: number): number => heightToDp(figmaUnits),
  scaleFont: (figmaUnits: number): number => heightToDp(figmaUnits),
};
