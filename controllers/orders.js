import Order from '../models/order';

export default async (req, res) => {
  Order.find((err, docs) => res.json({ data: docs }));
};
