import Realm from 'realm';
import UserSchema from './models/user';
import data from './dummy';

Realm.open({ schema: [UserSchema] })
  .then(realm => {
    data.map((point, i) => {
      try {
        realm.write(() => {
          realm.create('User', point);
        });
      } catch (e) {
        console.log(`ERROR: ${e} ON: ${point}-${i}`);
      }
    });

    console.log('realm ', realm)
  })
