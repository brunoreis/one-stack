import bcrypt from 'bcrypt';
import getByName from './getByName';

export default async (username, password) => {
  const user = await getByName(null, { username });
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
