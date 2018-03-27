import FacebookStrategy from 'passport-facebook';
import GoogleStrategy from 'passport-google-oauth20';
import { google, facebook } from '../config';

/* Streamlining Facebooks and Googles profile data */
const transformFacebookProfile = ({ name, picture }) => ({
  name,
  avatar: picture.data.url,
});

const transformGoogleProfile = ({ displayName, image }) => ({
  name: displayName,
  avatar: image.url,
});

export default class passportMiddleware {
  static facebookStrategy() {
    return new FacebookStrategy(
      facebook,
      async (accessToken, refreshToken, profile, done) =>
        done(null, transformFacebookProfile(profile._json)),
    );
  }

  static googleStrategy() {
    return new GoogleStrategy(
      google,
      async (accessToken, refreshToken, profile, done) =>
        done(null, transformGoogleProfile(profile._json)),
    );
  }
}
