import Realm from 'realm';
import { STRING, INT } from './constants';

const UserSchema = {
  name: 'User',
  properties: {
    firstName: { type: STRING },
    lastName: { type: STRING },
    age: { type: INT }
  }
};

export default UserSchema;
