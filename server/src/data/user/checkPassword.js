import bcrypt from 'bcryptjs';
import getByEmail from './getByEmail';

export default async (email, password) => {
  const user = await getByEmail(email);
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
