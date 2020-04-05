import bcrypt from 'bcryptjs';

export default ({ db, tableName }) => async ({
  email,
  password,
}) => {
  const user = await db
    .first()
    .table(tableName)
    .where('email', email);
  if (user) {
    if (bcrypt.compareSync(password, user.password)) {
      // login successful
      return true;
    }
    // wrong password
  }
  // user not found
  return false;
};
