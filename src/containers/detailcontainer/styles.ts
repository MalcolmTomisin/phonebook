import {colors} from 'config';
import {StyleSheet} from 'react-native';

export default (darkTheme?: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: darkTheme ? colors.grey : colors.lightgrey,
    },
  });
