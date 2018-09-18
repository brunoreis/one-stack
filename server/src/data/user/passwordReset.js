import nodemailer from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport';

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

export default async (context, args) => {
  // get user with token
  const user = await getByReset(context, args);
  if (!user) {
    return {
      message: 'Error: password reset token is invalid or has expired.',
      success: false,
    };
  }
  // set user password
  updatePassword({
    email: user.email,
    password: args.password,
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
  return {
    message: 'Your password has been reset!',
    success: true,
  };
};
