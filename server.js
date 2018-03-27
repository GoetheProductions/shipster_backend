import express from 'express';
import passport from 'passport';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './router';
import passportMiddleware from './middleware/passport';
import { URI } from './constants';

passport.use(passportMiddleware.facebookStrategy());
passport.use(passportMiddleware.googleStrategy());

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));


mongoose.connect(URI);

const app = express();

app.use(morgan('combined'));
app.use(passport.initialize());
app.use(passport.session());

app.get('/api/v1/auth/user/facebook', passport.authenticate('facebook'));

app.get(
  '/api/v1/auth/user/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/auth/facebook' }),
  (req, res) => res.redirect(`OAuthLogin://login?user=${JSON.stringify(req.user)}`),
);

app.get('/api/v1/auth/user/google', passport.authenticate('google', { scope: ['profile'] }));

app.get(
  '/api/v1/auth/user/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/google' }),
  (req, res) => res.redirect(`OAuthLogin://login?user=${JSON.stringify(req.user)}`),
);

app.use('/api/v1', router);


const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
