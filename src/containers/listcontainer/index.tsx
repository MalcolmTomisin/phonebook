import React from 'react';
import {globalStyles} from 'globalstyles';
import {List} from 'screens';
import {ContactAdapter} from 'adapters';
import {Contact} from 'react-native-contacts';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function ListContainer() {
  const [contacts, setContacts] = React.useState<Array<Contact>>([]);

  const _getContacts = () => {
    ContactAdapter.fetchOrderedContacts()
      .then(values => {
        setContacts(Array.from(values));
      })
      .catch(e => {
        console.log('error', e);
      });
  };

  React.useEffect(() => {
    _getContacts();
  }, []);

  return (
    <SafeAreaView edges={['top', 'bottom']} style={globalStyles.containers}>
      <List contacts={contacts} />
    </SafeAreaView>
  );
}
