import React from 'react';
import {FlatList} from 'react-native';
import ContactItem from '../contactitem';

const ContactList = ({data}) => {
  const _renderItem = () => <ContactItem />;
  return <FlatList data={data} renderItem={_renderItem} />;
};

export default ContactList;
