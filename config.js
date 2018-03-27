export const facebook = {
  clientID: '220874675315438',
  clientSecret: 'fd7f2ab382544ae0cf8cef4b345aac56',
  callbackURL: 'https://localhost:3000/api/v1/auth/user/facebook/callback',
  profileFields: ['id', 'name', 'displayName', 'picture', 'email'],
};

export const google = {
  clientID: '963613594777-4tn5h4bqdrhnvdri6tmdetb35rcq0dmm.apps.googleusercontent.com',
  clientSecret: 'fbNzBpyFrtrIv3ehFRJiQI_M',
  callbackURL: 'https://localhost:3000/api/v1/auth/user/google/callback',
};
