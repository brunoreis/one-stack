import bodyParser from 'body-parser';
import session from 'express-session';
import uuid from 'node-uuid';
import passport from 'passport';
import cors from 'cors';
import passportSetup from './passportSetup';

function authSetup(app, context) {
  passportSetup(passport);


  const corsOptions = {
    origin: true,
    credentials: true,
  };
  app.use(cors(corsOptions));

  app.use(
    session({
      genid: req => uuid.v4(),
      secret: 'Z3]GJW!?9uP"/Kpe',
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.use('/login', bodyParser.urlencoded({ extended: true }));
  app.use('/api-login', bodyParser.json());

  app.post('/api-login', (req, res, next) => {
    passport.authenticate('local', (err, user) => {
      if (err) return next(err);
      if (!user) {
        return res.json(403, {
          message: 'no user found',
        });
      }
      // Manually establish the session...
      req.login(user, () => {
        if (err) return next(err);
        return res.json({
          message: 'user authenticated',
        });
      });
      return next();
    })(req, res, next);
  });

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
