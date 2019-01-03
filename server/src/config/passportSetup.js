import _dataSources from '../dataSources';
import db from '../db';

const LocalStrategy = require('passport-local').Strategy; // how to use 'import'?
// import { Strategy as LocalStrategy } from 'passport-local';
const dataSources = _dataSources({ db })();

const passportSetup = (passport) => {
  passport.use(
    'local',
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
      },
      async (email, password, done) => {
        const IS_LOGIN_VALID = await dataSources.user.verifyPassword({ email, password });
        if (!IS_LOGIN_VALID)
          throw new Error('Não há usuário com essas credenciais.');
        const user = await dataSources.user.getByEmail({ email });
        done(null, user);
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
