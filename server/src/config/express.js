import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import uuid from 'node-uuid';
import flash from 'connect-flash';
import passport from './passport';

function appSetup(data, context) {
  const app = express();
  app.use(flash());
  // passport's session piggy-backs on express-session
  app.use(
    session({ // TODO: entender melhor isso
      genid: function (req) {
        return uuid.v4();
      },
      secret: 'Z3]GJW!?9uP"/Kpe',
    }),
  );

  // Provide authentication and user information to all routes
  app.use(passport.initialize());
  app.use(passport.session());

  // login route for passport
  app.use('/login', bodyParser.urlencoded({ extended: true }));
  app.post(
    '/login',
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/bla',
      failureFlash: true,
    }),
  );

  app.use('/graphql', (req, res, next) => {
    context.loggedUser = req.user; // TODO: how to deal with context scope?
    next();
  });

  // teste do express
  app.get('/', (req, res) => {
    console.log('homepage');
    res.send('homepage');
  });
  app.post('/', (req, res) => {
    console.log('homepage');
    res.send('homepage');
  });

  return app;
}

export default appSetup;
