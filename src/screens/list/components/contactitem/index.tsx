import React from 'react';
import {Text, useColorScheme, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-paper';
import type {Contact} from 'react-native-contacts';
import FastImage from 'react-native-fast-image';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import useStyle from './styles';
import type {PhoneBookParams} from 'navigators/phonebook/types';
import {useNavigation} from '@react-navigation/native';
import {navigationRoutes} from 'config';

const ContactItem = ({item, index}: {item: Contact; index: number}) => {
  const styles = useStyle(useColorScheme() === 'dark');
  const navigation =
    useNavigation<NativeStackNavigationProp<PhoneBookParams, 'list'>>();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(navigationRoutes.detail, {index});
      }}
      style={styles.itemContainer}
      key={item.recordID}>
      {item.hasThumbnail ? (
        <FastImage style={styles.avatar} source={{uri: item.thumbnailPath}} />
      ) : (
        <Avatar.Text
          label={`${item.givenName.charAt(0)}${
            item?.familyName ? item?.familyName.charAt(0) : ''
          }`}
          style={styles.avatar}
        />
      )}
      <Text style={styles.givenName}>
        {item.givenName}{' '}
        {item?.familyName ? (
          <Text style={styles.familyName}>{item.familyName}</Text>
        ) : (
          ''
        )}
      </Text>
    </TouchableOpacity>
  );
};

export default ContactItem;
