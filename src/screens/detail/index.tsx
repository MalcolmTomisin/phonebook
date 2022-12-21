import React from 'react';
import {View, Text, useColorScheme} from 'react-native';
import {Avatar} from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import {type Contact} from 'react-native-contacts';
import {IconTiles} from 'components';
import {colors} from 'config';
import useStyles from './styles';
import {globalStyles} from 'globalstyles';

export default function Detail(props: Contact & {favorite: boolean}) {
  const styles = useStyles(useColorScheme() === 'dark');
  return (
    <View style={globalStyles.flex_1}>
      <View style={styles.thumb_container}>
        {props?.hasThumbnail ? (
          <FastImage
            style={styles.image}
            resizeMode={FastImage.resizeMode.contain}
            source={{uri: props?.thumbnailPath}}
          />
        ) : (
          <Avatar.Text
            label={`${props?.givenName?.charAt(0)}${
              props?.familyName ? props?.familyName?.charAt(0) : ''
            }`}
          />
        )}
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
