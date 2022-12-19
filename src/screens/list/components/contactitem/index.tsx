import React from 'react';
import {View, Text} from 'react-native';
import {Avatar} from 'react-native-paper';
import type {Contact} from 'react-native-contacts';
import FastImage from 'react-native-fast-image';

const ContactItem = ({item}: {item: Contact}) => (
  <View key={item.recordID}>
    {item.hasThumbnail ? (
      <FastImage source={{uri: item.thumbnailPath}} />
    ) : (
      <Avatar.Text label={item.givenName} />
    )}
    <Text>{item.givenName}</Text>
  </View>
);

export default ContactItem;
