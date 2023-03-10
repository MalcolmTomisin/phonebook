import React from 'react';
import {View, Text, useColorScheme} from 'react-native';
import {Avatar, Badge} from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import {type Contact} from 'react-native-contacts';
import {IconTiles} from 'components';
import {colors} from 'config';
import useStyles from './styles';
import {globalStyles} from 'globalstyles';
import {toggleFavorite} from 'store/features';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Detail(
  props: Contact & {favorite: boolean; currentIndex: number},
) {
  const styles = useStyles(useColorScheme() === 'dark');
  const dispatch = useDispatch();
  return (
    <View style={globalStyles.flex_1}>
      <View style={styles.thumb_container}>
        <View>
          {props?.hasThumbnail ? (
            <>
              <FastImage
                style={styles.image}
                resizeMode={FastImage.resizeMode.contain}
                source={{uri: props?.thumbnailPath}}
                testID="avatar"
              />
              <Badge
                testID="badge"
                visible={props.favorite}
                style={{position: 'absolute'}}>
                <Icon testID="badge-icon" name="heart" color={colors.white} />
              </Badge>
            </>
          ) : (
            <>
              <Avatar.Text
                label={`${props?.givenName?.charAt(0)}${
                  props?.familyName ? props?.familyName?.charAt(0) : ''
                }`}
              />
              <Badge
                testID="badge"
                visible={props.favorite}
                style={{position: 'absolute'}}>
                <Icon testID="badge-icon" name="heart" color={colors.white} />
              </Badge>
            </>
          )}
        </View>
      </View>
      <Text style={styles.title_text}>{`${props?.givenName} ${
        props?.familyName ? props?.familyName : ''
      }`}</Text>
      <View style={styles.icon_container}>
        <IconTiles
          containerStyle={styles.icon_spacing}
          name="wechat"
          size={30}
          color={colors.blueprimary}
          label="chat"
        />
        <IconTiles
          containerStyle={styles.icon_spacing}
          name="phone"
          size={30}
          color={colors.blueprimary}
          label="call"
        />
        <IconTiles
          containerStyle={styles.icon_spacing}
          name="video-camera"
          size={30}
          color={colors.blueprimary}
          label="face"
        />
        <IconTiles
          containerStyle={styles.icon_spacing}
          name="heart"
          size={30}
          color={colors.blueprimary}
          label="favorite"
          testID="icon-favorite"
          onPress={() => {
            dispatch(toggleFavorite(props.currentIndex));
          }}
        />
      </View>
      {props.emailAddresses.map((v, i) => (
        <View key={i} style={styles.tiles}>
          <Text style={styles.labels}>{v.label}</Text>
          <Text style={styles.values}>{v.email}</Text>
        </View>
      ))}
      {props.phoneNumbers.map((v, i) => (
        <View key={i} style={styles.tiles}>
          <Text style={styles.labels}>{v.label}</Text>
          <Text style={styles.values}>{v.number}</Text>
        </View>
      ))}
    </View>
  );
}
