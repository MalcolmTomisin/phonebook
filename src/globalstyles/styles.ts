import {StyleSheet} from 'react-native';
import {scale} from 'utils';
import dimens from './dimens';

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    paddingHorizontal: scale(dimens.CONTAINER_PADDING),
  },
});

export default styles;
