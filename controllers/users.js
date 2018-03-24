import User from '../models/user';

export default async (req, res) => {
  User.find((err, docs) => res.json({
    data: docs,
  }));
};
