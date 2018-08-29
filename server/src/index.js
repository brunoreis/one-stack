import { ApolloServer } from 'apollo-server-express';

// setup passport
import bodyParser from 'body-parser';
import express from 'express';
import passport from 'passport';
import session from 'express-session';
import uuid from 'node-uuid';
import flash from 'connect-flash';

import data from './data';
import mocks from './mocks';
import resolvers from './graphql/resolvers';
// import debugExtensions from './extensions/debugExtensions';
import typeDefs from './graphql/schema';

const LocalStrategy = require('passport-local').Strategy;

const context = { mocks, data };

passport.use(
  'local',
  new LocalStrategy(
    { passReqToCallback: true },
    (req, username, password, done) => {
      const checkPassword = data.user.checkPassword(username, password);
      const getUser = checkPassword
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

// set passport midleware
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
    failureRedirect: '/login',
    failureFlash: true,
  }),
);

app.use('/graphql', (req, res, next) => {
  context.loggedUser = req.user; // sets user in context
  next();
});

// teste do express
app.get('/', (req, res) => {
  console.log('homepage');
  res.send('homepage');
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  // extensions: [
  //   () => debugExtensions,
  // ],
  // introspection: true,
  // playground: true,
});

server.applyMiddleware({ app });

app.listen({ port: process.env.PORT || 4000 },
  () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
