import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {type Contact} from 'react-native-contacts';

const dummyContact = {
  recordID: '6b2237ee0df85980',
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

const initialState: {
  contacts: Array<Contact & {favorite: boolean}>;
  currentContact: Contact & {favorite: boolean};
  currentIndex: number;
} = {contacts: [], currentIndex: -1};
const FIRST_ITEM = 0;

const sortContacts = (arr: Array<Contact & {favorite: boolean}>) => {
  return arr.sort((a, b) => {
    if (!a.favorite && b.favorite) {
      return 1;
    }
    if (a.favorite && !b.favorite) {
      return -1;
    }
    return a.givenName.localeCompare(b.givenName, 'en', {
      sensitivity: 'base',
    });
  });
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    hydrateContacts: (
      state,
      action: PayloadAction<Array<Contact & {favorite: boolean}>>,
    ) => {
      return {...state, contacts: action.payload};
    },
    hydrateCurrentContact: (
      state,
      action: PayloadAction<Contact & {favorite: boolean}>,
    ) => {
      return {...state, currentContact: action.payload};
    },
    toggleFavorite: (state, action: PayloadAction<number>) => {
      let newState = JSON.parse(JSON.stringify(state));
      if (newState.contacts[action.payload].favorite) {
        newState.contacts[action.payload].favorite =
          !newState.contacts[action.payload].favorite;
        const current = newState.contacts[action.payload];
        const sorted = Array.from(sortContacts(newState.contacts));
        const currentIndex = sorted.findIndex(
          val => val.recordID === current.recordID,
        );
        return {contacts: [...sorted], currentContact: current, currentIndex};
      }
      newState.contacts[action.payload].favorite =
        !newState.contacts[action.payload].favorite;
      newState.contacts[FIRST_ITEM].favorite =
        FIRST_ITEM === action.payload ? true : false;
      const sorted = Array.from(sortContacts(newState.contacts));
      return {
        contacts: [...sorted],
        currentContact: sorted[FIRST_ITEM],
        currentIndex: FIRST_ITEM,
      };
    },
    setCurrentIndex: (state, action: PayloadAction<number>) => {
      return {...state, currentIndex: action.payload};
    },
  },
});

export const {
  hydrateContacts,
  toggleFavorite,
  hydrateCurrentContact,
  setCurrentIndex,
} = contactSlice.actions;
export default contactSlice.reducer;
