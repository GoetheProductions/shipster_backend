import User from '../models/user';

export default (req, res) => {
  User.find((err, docs) => res.json({
    data: docs,
  }));
};
