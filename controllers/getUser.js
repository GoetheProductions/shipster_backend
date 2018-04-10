import request from 'request';
import { ENDPOINTS } from '../constants';

export default User => async (req, res) => {
  try {
    // res.set('Authorization', req.params.token);
    // res.json({ data: 'some derrb' });

    // find out if user exists
    // if not, save user
    // return user data
    // const response = await req.get(ENDPOINTS.fb_data);

    await request(`${ENDPOINTS.fb_data}${req.params.token}`, (reqError, response, body) => {
      if (reqError) res.json({ error: reqError, method: 'GET' });

      const user = JSON.parse(body);

      User.find({ email: user.email }, (qErr, data) => {
        if (qErr) res.json({ error: qErr });
        if (!data) {
          User.create({
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
            image: user.picture,
          }, (err, created) => {
            if (err) console.log(err);

            res.json({ data: created });
          });
        } else {
          res.json({ data });
        }
      });
    });
  } catch (error) {
    res.json({ error });
  }
};
