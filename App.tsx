/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {useColorScheme} from 'react-native';
import {PhoneBookNavigator} from 'navigators';

import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {CombinedDefaultTheme, CombinedDarkTheme} from 'config';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from 'store';
import {hydrateContacts} from 'store/features';
import {ContactAdapter} from 'adapters';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? CombinedDarkTheme : CombinedDefaultTheme;

  const _getContacts = () => {
    ContactAdapter.fetchOrderedContacts()
      .then(values => {
        store.dispatch(hydrateContacts(Array.from(values)));
      })
      .catch(e => {
        console.log('error', e);
      });
  };

  React.useEffect(() => {
    _getContacts();
  }, []);

  return (
    <PaperProvider theme={theme}>
      <Provider store={store}>
        <SafeAreaProvider>
          <NavigationContainer theme={theme}>
            <PhoneBookNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    </PaperProvider>
  );
};

store.subscribe(() => {
  console.log('state update', store.getState());
});

export default App;
