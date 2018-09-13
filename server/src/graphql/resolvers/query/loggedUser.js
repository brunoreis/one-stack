export default async (_, args, context) => {
  const loggedUser = context.loggedUser;
  if (loggedUser) {
    return context.data.user.getLoggedUser('', loggedUser);
  }
  // not logged in
  return null;
};
