import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import {globalDimens} from 'globalstyles';
import colors from './colors';

const theme = {
  ...PaperDefaultTheme,
  roundness: (8 / 375) * globalDimens.DEVICE_WIDTH,
  colors: {
    ...PaperDefaultTheme.colors,
    primary: colors.blueprimary,
    accent: '#A08673',
    primaryInactive: '#E88C51',
    background: '#FFFFFF',
  },
};

const darkTheme = {
  ...PaperDarkTheme,
  roundness: (8 / 375) * globalDimens.DEVICE_WIDTH,
  colors: {
    ...PaperDarkTheme.colors,
    primary: colors.blueprimary,
    accent: '#A08673',
    primaryInactive: '#E88C51',
  },
};

export const CombinedDefaultTheme = {
  ...NavigationDefaultTheme,
  ...theme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...theme.colors,
  },
};
export const CombinedDarkTheme = {
  ...NavigationDarkTheme,
  ...darkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...darkTheme.colors,
    background: '#000000',
  },
};
