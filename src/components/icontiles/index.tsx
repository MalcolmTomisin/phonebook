import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {StyleProp, ViewStyle, View, Text, useColorScheme} from 'react-native';
import useStyle from './styles';

const IconTiles = ({
  name,
  label,
  containerStyle,
}: React.ComponentProps<typeof Icon> & {
  containerStyle: StyleProp<ViewStyle>;
  label?: string;
}) => {
  const styles = useStyle(useColorScheme() === 'dark');
  return (
    <View style={[styles.tile, containerStyle]}>
      <Icon name={name} size={20} />
      <Text>{label}</Text>
    </View>
  );
};

export default IconTiles;
