import React from 'react';
import {ContactsList} from './components';
import {type Contact} from 'react-native-contacts';

export default function List({contacts}: {contacts: Array<Contact>}) {
  return <ContactsList contacts={contacts} />;
}
