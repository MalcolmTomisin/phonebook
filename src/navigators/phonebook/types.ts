import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type PhoneBookParams = {
  detail: {
    index: number;
  };
  list: undefined;
};

export type DetailScreenProps = NativeStackScreenProps<
  PhoneBookParams,
  'detail'
>;
export type ListScreenProps = NativeStackScreenProps<PhoneBookParams, 'list'>;
