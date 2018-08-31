import bodyParser from 'body-parser';
import session from 'express-session';
import uuid from 'node-uuid';
import passport from 'passport';
import passportSetup from './passportSetup';

function authSetup(app, context) {
  passportSetup(passport);

  app.use(
    session({
      genid: req => uuid.v4(),
      secret: 'Z3]GJW!?9uP"/Kpe',
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.use('/login', bodyParser.urlencoded({ extended: true }));
  app.post(
    '/login',
    passport.authenticate('local', {
      successRedirect: 'http://localhost:3000/loggedUser',
      failureRedirect: 'http://localhost:3000/',
    }),
  );

  app.use('/graphql', (req, res, next) => {
    context.loggedUser = req.user;
    next();
  });
}

export default authSetup;
