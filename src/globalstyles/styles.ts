import {StyleSheet} from 'react-native';
import {scale} from 'utils';
import dimens from './dimens';

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    paddingHorizontal: scale(dimens.CONTAINER_PADDING),
  },
  flex_1: {flex: 1},
  center_item: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rows_sb: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
