import bodyParser from 'body-parser';
import session from 'express-session';
import uuid from 'node-uuid';
import passport from 'passport';
import cors from 'cors';
import passportSetup from './passportSetup';
import { app, context } from '../server';

function authSetup() {
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
      resave: true, // verify these later:
      saveUninitialized: false, // https://github.com/expressjs/session#options
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.use(bodyParser.json());

  app.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user) => {
      if (err || !user) {
        return res
          .status(403)
          .json({
            success: false,
            message: err.message, // retornar mensagem dentro do err
          });
      }
      // Manually establish the session...
      req.login(user, () => { // verificar se pode dar erro
        if (err) return next(err);
        return res.json({
          success: true,
          message: 'user authenticated!',
        });
      });
      return next();
    })(req, res, next);
  });

  app.get('/logout', (req, res) => {
    req.logout();
    res.clearCookie('connect.sid');
    res.end();
    // res.redirect(`${process.env.WEB_URL}/`);
  });

  app.use('/graphql', (req, res, next) => {
    context.loggedUser = req.user;
    next();
  });
}

export default authSetup;
