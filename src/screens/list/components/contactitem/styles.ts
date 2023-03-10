import {colors} from 'config';
import {StyleSheet} from 'react-native';
import {scale} from 'utils';

export default (darkTheme?: boolean) =>
  StyleSheet.create({
    itemContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingVertical: scale(8),
    },
    givenName: {
      fontSize: scale(14),
      //fontFamily: fonts.MEDIUM,
      color: darkTheme ? colors.lightgrey : colors.grey,
    },
    familyName: {
      fontSize: scale(14),
      //fontFamily: fonts.BOLD,
      color: darkTheme ? colors.white : colors.black,
      fontWeight: '700',
    },
    avatar: {
      marginRight: scale(8),
      width: scale(60),
      height: scale(60),
      borderRadius: scale(60 * 0.9),
    },
    absolute: {position: 'absolute'},
  });
