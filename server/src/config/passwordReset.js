import crypto from 'crypto';
import nodemailer from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport';

import User from '../db/queryBuilders/user';

function setupMailTransport() {
  return nodemailer.createTransport(
    sgTransport({
      auth: {
        api_key: process.env.MAIL_API,
      },
    }),
  );
}

function passwordReset(app) {
  app.post('/forgot', async (req, res) => {
    const user = await User.getByEmail(req.body.email);
    if (!user) {
      // console.log('error', 'No account with that email address exists.');
      // return res.redirect(`${process.env.WEB_URL}/forgot`);
      return res.json(403, {
        message: 'Error: no account found for this email address.',
      });
    }
    // set reset token and expire
    const token = crypto.randomBytes(20).toString('hex');

    const expireDate = new Date();
    expireDate.setHours(expireDate.getHours() + 1);
    const expireString = expireDate.toISOString();

    User.update({
      id: user.id,
      resetPasswordToken: token,
      resetPasswordExpires: expireString,
    });

    // send mail
    const smtpTransport = setupMailTransport();

    const mailOptions = {
      to: user.email,
      from: 'passwordreset@onestack.com',
      subject: 'Node.js Password Reset',
      text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
        'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
        'http://localhost:3000/reset/' + token + '\n\n' +
        'If you did not request this, please ignore this email and your password will remain unchanged.\n'
    };
    smtpTransport.sendMail(mailOptions);
    return res.json({
      message: 'Email sent. Please check your inbox.',
    });
  });

  app.get('/reset/:token', async (req, res) => {
    const user = await User.getByReset(req.params.token);
    if (!user) {
      return res.json(403, {
        message: 'Error: Password reset token is invalid or has expired.',
      });
    }
    return res.json({
      message: 'valid reset',
    });
  });

  app.post('/reset/:token', async (req, res) => {
    // get user with token
    const user = await User.getByReset(req.params.token);
    if (!user) {
      return res.json(403, {
        message: 'Error: Password reset token is invalid or has expired.',
      });
    }
    // set user password
    User.updatePassword({
      email: user.email,
      password: req.body.password,
    });

    // send mail
    const smtpTransport = setupMailTransport();
    const mailOptions = {
      to: user.email,
      from: 'passwordreset@demo.com',
      subject: 'Your password has been changed',
      text: 'Hello,\n\n' +
          'This is a confirmation that the password for your account ' + 
          user.email + 
          ' has just been changed.\n'
    };
    smtpTransport.sendMail(mailOptions);
    return res.json({
      message: 'Your password has been reset!',
    });
  });
}

export default passwordReset;
