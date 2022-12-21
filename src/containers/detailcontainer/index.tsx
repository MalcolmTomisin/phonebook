import React from 'react';
import {useColorScheme} from 'react-native';
import {globalStyles} from 'globalstyles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Detail} from 'screens';
import useStyles from './styles';

export default function DetailContainer() {
  const styles = useStyles(useColorScheme() === 'dark');
  return (
    <SafeAreaView style={[globalStyles.containers, styles.container]}>
      <Detail />
    </SafeAreaView>
  );
}
