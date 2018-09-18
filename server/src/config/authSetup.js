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

  app.use(bodyParser.json());

  app.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user) => {
      if (!user) {
        return res.json(403, {
          message: 'no user found with given credentials.', // retornar mensagem dentro do err
        });
      }
      if (err) return next(err);
      // Manually establish the session...
      req.login(user, () => { // verificar se pode dar erro
        if (err) return next(err);
        return res.json({
          message: 'user authenticated!',
        });
      });
      return next();
    })(req, res, next);
  });

  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect(`${process.env.WEB_URL}/`);
  });

  app.use('/graphql', (req, res, next) => {
    context.req = req;
    context.loggedUser = req.user;
    next();
  });
}

export default authSetup;
