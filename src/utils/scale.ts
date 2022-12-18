import {Platform, Dimensions, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const ratio = SCREEN_WIDTH / 375;
const hRatio = SCREEN_HEIGHT / 812;

export default function scale(size: number, scaleHeight?: boolean) {
  const newSize = size * (scaleHeight ? hRatio : ratio);
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}
