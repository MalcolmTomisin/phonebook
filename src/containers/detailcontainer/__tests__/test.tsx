import React from 'react';
import DetailContainer from '../';
import {fireEvent, render} from '@testing-library/react-native';
import {
  hydrateContacts,
  hydrateCurrentContact,
  setCurrentIndex,
} from 'store/features';
import {Provider} from 'react-redux';
import {store} from 'store';
import type {Contact} from 'react-native-contacts';

jest.useFakeTimers();

const mockNames = [
  'Rand',
  'Mohammed',
  'Jeffrey',
  'Katie',
  'Vlad',
  'Koffie',
  'Daniel',
  'Zayn',
  'Andre',
  'Sue',
];

describe('detail screen', () => {
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

  test('renders details correctly', () => {
    store.dispatch(hydrateContacts(contacts));
    store.dispatch(hydrateCurrentContact(contacts[3]));
    const screen = render(
      <Provider store={store}>
        <DetailContainer />
      </Provider>,
    );

    expect(screen).toBeTruthy();
    expect(store.getState().contacts.currentContact.recordID).toEqual(
      contacts[3].recordID,
    );
  });

  test('favorite action works as expected', () => {
    store.dispatch(hydrateContacts(contacts));
    store.dispatch(hydrateCurrentContact(contacts[3]));
    store.dispatch(setCurrentIndex(3));
    const {getByTestId} = render(
      <Provider store={store}>
        <DetailContainer />
      </Provider>,
    );

    const favoriteButton = getByTestId('icon-favorite');
    fireEvent.press(favoriteButton);
    const badge = getByTestId('badge-icon');
    expect(badge).toBeTruthy();
    expect(store.getState().contacts.currentIndex).toBe(0);
  });

  test('overwrite favorite', () => {
    const newContacts = contacts.map((v, i) => {
      if (i === 0) {
        return {
          ...v,
          favorite: !v.favorite,
          givenName: mockNames[i],
          recordID: `${i}`,
        };
      }
      return {...v, givenName: mockNames[i], recordID: `${i}`};
    });
    const record = newContacts[0].recordID;
    store.dispatch(hydrateContacts(newContacts));
    store.dispatch(hydrateCurrentContact(newContacts[0]));
    store.dispatch(setCurrentIndex(0));
    const {getByTestId} = render(
      <Provider store={store}>
        <DetailContainer />
      </Provider>,
    );

    const favoriteButton = getByTestId('icon-favorite');
    fireEvent.press(favoriteButton);
    const currentContacts = store.getState().contacts.contacts;
    expect(
      currentContacts.findIndex(v => v.recordID === record),
    ).toBeGreaterThan(0);
    fireEvent.press(favoriteButton);
    expect(
      store.getState().contacts.contacts.findIndex(v => v.recordID === record),
    ).toEqual(0);
  });
});
