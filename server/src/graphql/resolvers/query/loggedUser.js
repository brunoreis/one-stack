export default async (_, args, context) => {
  const loggedUser = context.loggedUser;
  if (loggedUser) {
    return context.data.user.getLoggedUser('', loggedUser);
  }
  console.log('not logged in');
  return null;
};
