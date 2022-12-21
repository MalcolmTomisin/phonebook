import Contacts, {type Contact} from 'react-native-contacts';
import {Platform} from 'react-native';

const isAndroidAndLessThan26 =
  Platform.OS === 'android' && Platform.Version < 26;

const fetchOrderedContacts: () => Promise<
  Array<Contact & {favorite: boolean}>
> = async () => {
  try {
    const _contacts = await Contacts.getAll();
    const _orderderedContacts = Array.from(
      _contacts.sort((a, b) => {
        return isAndroidAndLessThan26
          ? a.givenName.localeCompare(b.givenName, 'en', {
              sensitivity: 'base',
            })
          : a.givenName.localeCompare(b.givenName, 'en', {
              sensitivity: 'base',
            });
      }),
    );

    return transformContacts(_orderderedContacts);
  } catch (e) {
    return Promise.reject(e);
  }
};

const transformContacts = (
  contacts: Array<Contact>,
): Array<Contact & {favorite: boolean}> => {
  return contacts.map(v => ({...v, favorite: false}));
};

const ContactAdapter = {
  fetchOrderedContacts,
  transformContacts,
};

export default ContactAdapter;
