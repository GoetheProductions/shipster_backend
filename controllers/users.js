import Realm from 'realm';
import UserSchema from '../models/user';


export const index = (req, res, next) => {
  Realm.open({ schema: [UserSchema] })
    .then(realm => {
      return res.json({ data: realm })
    })

  // try {
  //   const users = Realm.objects('User');
  //   return res.json({ users, error: null });
  // } catch (e) {
  //   return res.json({ users: [], error: e });
  // }

  // next();
};
