import {colors} from 'config';
import {StyleSheet} from 'react-native';
import {scale} from 'utils';

export default (darkTheme?: boolean) =>
  StyleSheet.create({
    tile: {
      backgroundColor: darkTheme ? colors.black : colors.white,
      padding: scale(12),
      borderRadius: scale(10),
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    label: {
      fontSize: scale(12),
      //fontFamily: fonts.MEDIUM,
      color: colors.blueprimary,
    },
  });
