import React from 'react';
import {Text, useColorScheme, TouchableOpacity, View} from 'react-native';
import {Avatar, Badge} from 'react-native-paper';
import type {Contact} from 'react-native-contacts';
import FastImage from 'react-native-fast-image';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import useStyle from './styles';
import type {PhoneBookParams} from 'navigators/phonebook/types';
import {useNavigation} from '@react-navigation/native';
import {colors, navigationRoutes} from 'config';
import Icon from 'react-native-vector-icons/FontAwesome';
import {hydrateCurrentContact, setCurrentIndex} from 'store/features';
import {useDispatch} from 'react-redux';

const ContactItem = ({
  item,
  index,
}: {
  item: Contact & {favorite: boolean};
  index: number;
}) => {
  const styles = useStyle(useColorScheme() === 'dark');
  const navigation =
    useNavigation<NativeStackNavigationProp<PhoneBookParams, 'list'>>();
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(setCurrentIndex(index));
        dispatch(hydrateCurrentContact(item));
        navigation.navigate(navigationRoutes.detail);
      }}
      style={styles.itemContainer}
      testID="listItem"
      key={item.recordID}>
      {item.hasThumbnail ? (
        <FastImage style={styles.avatar} source={{uri: item.thumbnailPath}} />
      ) : (
        <View>
          <Avatar.Text
            label={`${item.givenName.charAt(0)}${
              item?.familyName ? item?.familyName.charAt(0) : ''
            }`}
            style={styles.avatar}
          />
          {item.favorite && (
            <Badge style={styles.absolute}>
              <Icon name="heart" color={colors.white} />
            </Badge>
          )}
        </View>
      )}
      <Text style={styles.givenName}>
        {item.givenName}
        {item?.familyName ? (
          <Text style={styles.familyName}>{' ' + item.familyName}</Text>
        ) : (
          ''
        )}
      </Text>
    </TouchableOpacity>
  );
};

export default ContactItem;
