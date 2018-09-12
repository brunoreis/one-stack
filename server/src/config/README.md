# password reset setup

To setup password reset, you will need an mail service. We will go through a couple of ways to configure an email service in your application.

## Configuring email service

This apps uses nodemail to send email users password reset related emails.

Nodemail requires you to set up a transport layer. To do so, you need to choose an email service provider. We will go through a couple of options.

### Gmail

You can your your gmail account with nodemailer in the following manner:

* Go to server/src/config/passwordReset.js
* Edit 'setupMailTransport' in the following manner:
```js
function setupMailTransport() {
  return nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });
}
```
* Add the environment variables (GMAIL_USER and GMAIL_PASS) to your .env file
* OBS: if you are having authorization problems with gmail. you might have to allow less secure apps to your google account. To do so, go to https://myaccount.google.com/lesssecureapps.

### SendGrid

An alternative would be to use a business email service like [SendGrid](https://sendgrid.com/). To do so:
* Setup a SendGrid account
* Create a API key (you can follow [this guide](https://app.sendgrid.com/guide/integrate)). Remember to choose the Web API method
* Go to server/src/config/passwordReset.js
* Edit 'setupMailTransport' in the following manner:
```js
function setupMailTransport() {
  return nodemailer.createTransport(
    sgTransport({
      auth: {
        api_key: process.env.MAIL_API,
      },
    }),
  );
}
```
* Add MAIL_API to your .env file
