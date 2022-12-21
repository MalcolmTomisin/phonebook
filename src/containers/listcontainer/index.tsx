import React from 'react';
import {globalStyles} from 'globalstyles';
import {List} from 'screens';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {type RootState} from 'store';

export default function ListContainer() {
  const contacts = useSelector((state: RootState) => state.contacts);

  return (
    <SafeAreaView edges={['top', 'bottom']} style={globalStyles.containers}>
      <List contacts={contacts} />
    </SafeAreaView>
  );
}
