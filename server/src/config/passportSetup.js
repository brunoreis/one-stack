import _dataSources from '../dataSources';
import db from '../db';

const LocalStrategy = require('passport-local').Strategy; // how to use 'import'?
// import { Strategy as LocalStrategy } from 'passport-local';
const dataSources = _dataSources({ db })();

function passportSetup(passport) {
  passport.use(
    'local',
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
      },
      (email, password, done) => {
        // data.user.checkPassword(email, password)
        dataSources.user.verifyPassword({ email, password })
          .then((IS_LOGIN_VALID) => {
            if (IS_LOGIN_VALID) return dataSources.user.getByEmail({ email });
            throw new Error('Não há usuário com essas credenciais.');
          })
          .then(user => done(null, user))
          .catch((err) => {
            done(err);
          });
      },
    ),
  );

  passport.serializeUser((user, done) => done(null, user.id));

  passport.deserializeUser(
    (id, done) => dataSources.user.getById({ id })
      .then((user, err) => done(err, user)),
  );
}

export default passportSetup;
