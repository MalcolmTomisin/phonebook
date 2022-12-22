import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import ContactItem from '../contactitem';
import {type Contact} from 'react-native-contacts';

const ContactList = ({
  contacts,
}: {
  contacts: Array<Contact & {favorite: boolean}>;
}) => {
  const ITEM_HEIGHT = 76;
  const getItemLayout = (
    data: Array<Contact & {favorite: boolean}>,
    index: number,
  ) => {
    return {
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * data.length,
      index,
    };
  };
  const _renderItem: ListRenderItem<Contact & {favorite: boolean}> = ({
    item,
    index,
  }) => <ContactItem item={item} index={index} />;
  return (
    <FlatList
      getItemLayout={getItemLayout}
      data={contacts}
      renderItem={_renderItem}
    />
  );
};

export default ContactList;
