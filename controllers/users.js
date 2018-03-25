import User from '../models/user';

export default async (req, res) => {
  User.find((err, data) => res.json({ data }));
};
