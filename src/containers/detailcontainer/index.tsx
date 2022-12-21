import React from 'react';
import {useColorScheme} from 'react-native';
import {globalStyles} from 'globalstyles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Detail} from 'screens';
import useStyles from './styles';
import {type DetailScreenProps} from 'navigators/phonebook/types';
import {useSelector} from 'react-redux';
import {type RootState} from 'store';

export default function DetailContainer({route}: DetailScreenProps) {
  const contacts = useSelector((state: RootState) => state.contacts);
  const {index} = route.params;
  const styles = useStyles(useColorScheme() === 'dark');
  return (
    <SafeAreaView style={[globalStyles.containers, styles.container]}>
      <Detail {...contacts[index]} />
    </SafeAreaView>
  );
}
