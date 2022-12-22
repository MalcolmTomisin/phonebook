import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleProp,
  ViewStyle,
  View,
  Text,
  useColorScheme,
  TextStyle,
} from 'react-native';
import useStyle from './styles';

const IconTiles = ({
  name,
  label,
  containerStyle,
  color,
  labelStyle,
  onPress,
  testID,
}: React.ComponentProps<typeof Icon> & {
  containerStyle?: StyleProp<ViewStyle>;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
}) => {
  const styles = useStyle(useColorScheme() === 'dark');
  return (
    <View style={[styles.tile, containerStyle]}>
      <Icon
        testID={testID}
        name={name}
        size={30}
        color={color}
        onPress={onPress}
      />
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </View>
  );
};

export default IconTiles;
