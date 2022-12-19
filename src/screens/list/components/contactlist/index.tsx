import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import ContactItem from '../contactitem';
import {type Contact} from 'react-native-contacts';

const ContactList = ({contacts}: {contacts: Array<Contact>}) => {
  const _renderItem: ListRenderItem<Contact> = ({item}) => (
    <ContactItem item={item} />
  );
  return <FlatList data={contacts} renderItem={_renderItem} />;
};

export default ContactList;
