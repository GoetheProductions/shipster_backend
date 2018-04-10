export const URI = 'mongodb://localhost:56651/shipster';
export const ENDPOINT_PREFIX = '/api/v1';
export const ENDPOINTS = {
  users: `${ENDPOINT_PREFIX}/users`,
  orders: `${ENDPOINT_PREFIX}/orders`,
  user: `${ENDPOINT_PREFIX}/user=:token`,
  fb_data: 'https://graph.facebook.com/v2.5/me?fields=email,first_name,last_name,picture,birthday&access_token=',
};
