import {colors} from 'config';
import {StyleSheet} from 'react-native';
import {scale} from 'utils';

export default (darkTheme?: boolean) =>
  StyleSheet.create({
    tiles: {
      borderRadius: scale(10),
      backgroundColor: darkTheme ? colors.black : colors.white,
      padding: scale(12),
      marginVertical: scale(8),
      justifyContent: 'space-between',
    },
    labels: {
      color: darkTheme ? colors.white : colors.black,
      fontSize: scale(12),
      lineHeight: scale(18),
    },
    values: {
      color: colors.blueprimary,
      fontSize: scale(16),
      lineHeight: scale(22),
    },
    thumb_container: {
      flex: 0.2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title_text: {textAlign: 'center', margin: 20, fontSize: 25},
    icon_container: {
      //flex: 0.1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: scale(12),
    },
    icon_spacing: {flex: 0.5, marginHorizontal: 8},
    image: {
      width: scale(50),
      height: scale(50),
      borderRadius: scale(50 * 0.9),
    },
  });
