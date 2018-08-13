module.exports = (_, args) => {
  console.log(args);
  const authToken = {
    token: 'secretToken',
  };

  if (args.password === 'senha') {
    return authToken;
  }
  throw new Error('Invalid password');
};
