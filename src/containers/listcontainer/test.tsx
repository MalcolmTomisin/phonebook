import React from 'react';
import ListContainer from '.';
import {fireEvent, render} from '@testing-library/react-native';
import {hydrateContacts} from 'store/features';
import {Provider} from 'react-redux';
import {store} from 'store';
import {navigationRoutes} from 'config';
import type {Contact} from 'react-native-contacts';

jest.useFakeTimers();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

const mockedNavigate = jest.fn();

describe('list contacts to screen', () => {
  let mockContacts = {
    recordID: (Date.now() / Math.random()).toString(),
    backTitle: '',
    company: '',
    emailAddresses: [
      {
        label: 'work',
        email: 'carl-jung@example.com',
      },
    ],
    familyName: 'Jung',
    givenName: 'Carl',
    middleName: '',
    jobTitle: '',
    phoneNumbers: [
      {
        label: 'mobile',
        number: '(555) 555-5555',
      },
    ],
    hasThumbnail: true,
    thumbnailPath: 'content://com.android.contacts/display_photo/3',
    postalAddresses: [
      {
        label: 'home',
        formattedAddress: '',
        street: '123 Fake Street',
        pobox: '',
        neighborhood: '',
        city: 'Sample City',
        region: 'CA',
        state: 'CA',
        postCode: '90210',
        country: 'USA',
      },
    ],
    prefix: 'MR',
    suffix: '',
    department: '',
    birthday: {year: 1988, month: 1, day: 1},
    imAddresses: [
      {username: '0123456789', service: 'ICQ'},
      {username: 'johndoe123', service: 'Facebook'},
      ,
    ],
    isStarred: false,
    favorite: false,
  };

  const contacts = new Array<Contact & {favorite: boolean}>(10).fill(
    mockContacts,
  );

  test('renders list of contacts correctly', () => {
    store.dispatch(hydrateContacts(contacts));
    const {getAllByTestId} = render(
      <Provider store={store}>
        <ListContainer />
      </Provider>,
    );

    const listItems = getAllByTestId('listItem');
    expect(store.getState().contacts.contacts.length).toEqual(10);
    expect(listItems.length).toEqual(10);
  });

  test('correctly navigates to appropriate screen', () => {
    store.dispatch(hydrateContacts(contacts));
    const {getAllByTestId} = render(
      <Provider store={store}>
        <ListContainer />
      </Provider>,
    );

    const listItems = getAllByTestId('listItem');
    expect(store.getState().contacts.contacts.length).toEqual(10);
    expect(listItems.length).toEqual(10);
    fireEvent.press(listItems[0]);
    expect(mockedNavigate).toBeCalledWith(navigationRoutes.detail);
    expect(store.getState().contacts.currentContact.recordID).toEqual(
      contacts[0].recordID,
    );
  });
});
