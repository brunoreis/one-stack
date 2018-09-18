// import passport from 'passport';

import data from '../data';

const LocalStrategy = require('passport-local').Strategy; // how to use 'import'?

function passportSetup(passport) {
  passport.use(
    'local',
    new LocalStrategy(
      (username, password, done) => {
        const checkPassword = data.user.checkPassword(username, password);
        checkPassword
          .then((IS_LOGIN_VALID) => {
            if (IS_LOGIN_VALID) return data.user.getByName('', { username });
            throw new Error('invalid username or password');
          })
          .then(user => done(null, user))
          .catch(err => done(err));
      },
    ),
  );

  passport.serializeUser((user, done) => done(null, user.id));

  passport.deserializeUser(
    (id, done) => data.user.get('', { id })
      .then((user, err) => done(err, user)),
  );
}

export default passportSetup;
