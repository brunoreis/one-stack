import express from 'express';
import fs from 'fs';

import user from '../db/queryBuilders/user';

const forgot = require('password-reset')({
  uri: 'http://localhost:4000/reset',
  from: 'password-robot@localhost',
  host: 'localhost',
  port: 25,
});

function passwordReset(app) {
  app.use(forgot.middleware);

  app.post('/forgot', express.bodyParser(), (req, res) => {
    const email = req.body.email;
    const reset = forgot(email, (err) => {
      if (err) res.end(`Error sending message: ${err}`);
      else res.end('Check your inbox for a password reset message.');
    });

    reset.on('request', (req_, res_) => {
      req_.session.reset = { email: email, id: reset.id };
      fs.createReadStream(__dirname + '/forgot.html').pipe(res_);
    });
  });

  app.post('/reset', express.bodyParser(), (req, res) => {
    if (!req.session.reset) return res.end('reset token not set');

    console.log('email? ', req.body.email);
    const email = req.body.email;
    const password = req.body.password;
    const confirm = req.body.confirm;
    if (password !== confirm) return res.end('passwords do not match');

    // update the user db here
    console.log('update user password');
    user.passwordReset({ password, email });

    forgot.expire(req.session.reset.id);
    delete req.session.reset;
    res.end('password reset');
  });
}

export default passwordReset;
