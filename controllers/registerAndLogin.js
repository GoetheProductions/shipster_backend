import request from 'request';
import { ENDPOINTS } from '../constants';

export default User => async (req, res) => {
  try {
    await request(`${ENDPOINTS.fb_data}${req.body.token}`, (reqError, response, body) => {
      if (reqError) res.json({ error: reqError, method: 'GET' });
      const user = JSON.parse(body);
      User.find({ email: user.email }, (qErr, data) => {
        if (qErr) res.json({ error: qErr });

        if (data.length === 0) {
          User.create({
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
            image: user.picture,
          }, (err, created) => {
            if (err) res.json({ error: err });
            res.json({ data: created, token: req.body.token });
          });
        } else {
          res.json({ data, token: req.body.token });
        }
      });
    });
  } catch (error) {
    res.json({ error });
  }
};
