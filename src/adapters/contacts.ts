import Contacts, {type Contact} from 'react-native-contacts';
import {Platform} from 'react-native';

const fetchOrderedContacts: () => Promise<Array<Contact>> = async () => {
  try {
    const _contacts = await Contacts.getAll();
    const _orderderedContacts = Array.from(
      _contacts.sort((a, b) => {
        return Platform.OS === 'android' && Platform.Version < 26
          ? a.givenName.localeCompare(b.givenName, 'en', {
              sensitivity: 'base',
            })
          : a.displayName.localeCompare(b.displayName, 'en', {
              sensitivity: 'base',
            });
      }),
    );

    return _orderderedContacts;
  } catch (e) {
    return Promise.reject(e);
  }
};

const ContactAdapter = {
  fetchOrderedContacts,
};

export default ContactAdapter;
