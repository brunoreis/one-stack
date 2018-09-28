import nodemailer from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport';
import bcrypt from 'bcrypt';

import getByReset from './getByReset';
import updatePassword from './updatePassword';

function setupMailTransport() {
  return nodemailer.createTransport(
    sgTransport({
      auth: {
        api_key: process.env.MAIL_API,
      },
    }),
  );
}

export default async (token, password) => {
  // get user with token
  const user = await getByReset(token);
  if (!user) {
    return {
      message: 'Error: password reset token is invalid or has expired.',
      success: false,
    };
  }
  // set user password
  const result = await updatePassword(
    user.email,
    bcrypt.hashSync(password, 10),
  );

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

  return {
    message: 'Your password has been reset!',
    success: true,
  };
};
