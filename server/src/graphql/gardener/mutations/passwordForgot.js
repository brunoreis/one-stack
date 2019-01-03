import crypto from 'crypto';
import nodemailer from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport';

function setupMailTransport() {
  return nodemailer.createTransport(
    sgTransport({
      auth: {
        api_key: process.env.MAIL_API,
      },
    }),
  );
}

export default async (
  _,
  args,
  {
    dataSources,
  },
) => {
  const email = args.input.email;
  const user = await dataSources.user.getByEmail({ email });
  if (!user) {
    // does not send mail, but does not tell user email is invalid
    return {
      message: `Email sent to ${email}. Please check your inbox.`,
      success: true,
    };
  }

  // set reset token and expire
  const token = crypto.randomBytes(20).toString('hex');

  const expireDate = new Date();
  expireDate.setHours(expireDate.getHours() + 1);
  const expireString = expireDate.toISOString();

  dataSources.user.update({
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
      process.env.WEB_URL + '/reset/' + token + '\n\n' +
      'If you did not request this, please ignore this email and your password will remain unchanged.\n'
  };

  smtpTransport.sendMail(mailOptions);
  return {
    message: `Email sent to ${email}. Please check your inbox.`,
    success: true,
  };

};
