import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {type Contact} from 'react-native-contacts';

const initialState: Array<Contact & {favorite: boolean}> = [];
const FIRST_ITEM = 0;

const sortContacts = (arr: Array<Contact & {favorite: boolean}>) => {
  return arr.sort((a, b) => {
    if (!a.favorite && b.favorite) {
      return -1;
    }
    if (a.favorite && !b.favorite) {
      return 1;
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
    addToFavorite: (state, action: PayloadAction<number>) => {
      const clonedState = Array.from(state);
      if (clonedState.length > 1) {
        clonedState[FIRST_ITEM].favorite = false;
        clonedState[action.payload].favorite = true;
        const sorted = sortContacts(clonedState);
        state = [...sorted];
        return state;
      }
      return state;
    },
    hydrateContacts: (
      state,
      action: PayloadAction<Array<Contact & {favorite: boolean}>>,
    ) => {
      return action.payload;
    },
  },
});

export const {addToFavorite, hydrateContacts} = contactSlice.actions;
export default contactSlice.reducer;
