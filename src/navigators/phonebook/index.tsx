import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {List, Detail} from 'containers';
import type {PhoneBookParams} from './types';
import {navigationRoutes} from 'config';

const Stack = createNativeStackNavigator<PhoneBookParams>();

const PhoneBookNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={navigationRoutes.list} component={List} />
    <Stack.Screen name={navigationRoutes.detail} component={Detail} />
  </Stack.Navigator>
);

export default PhoneBookNavigator;
