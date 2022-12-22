jest.mock('react-native-vector-icons/Feather', () => 'Icon');
jest.mock('react-native-paper', () => 'Switch');
jest.mock('react-native-paper', () => 'Avatar');
jest.mock('react-native-paper', () => 'Badge');
jest.mock('react-native-vector-icons/Entypo', () => 'Icon');
jest.mock('react-native-vector-icons/Foundation', () => 'Icon');
jest.mock('react-native-vector-icons/Ionicons', () => 'Icon');
jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');
jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon');
jest.mock('react-native-vector-icons/Octicons', () => 'Icon');
jest.mock('react-native-vector-icons/SimpleLineIcons', () => 'Icon');
jest.mock('react-native-vector-icons/Zocial', () => 'Icon');
jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon');
jest.mock('react-native-vector-icons/FontAwesome5', () => 'Icon');
jest.mock('react-native-vector-icons/FontAwesome5Pro', () => 'Icon');
jest.mock('react-native-vector-icons/Fontisto', () => 'Icon');
jest.mock('react-native-vector-icons/AntDesign', () => 'Icon');
jest.mock('react-native-contacts', () => 'Contacts');

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
