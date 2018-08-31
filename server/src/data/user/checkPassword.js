import bcrypt from 'bcrypt';
import getByName from './getByName';

export default async (username, password) => {
  const user = await getByName(null, { username });
  if (user) {
    console.log('user: ', user);
    if (bcrypt.compareSync(password, user.password)) {
      console.log('login successful');
      return true;
    }
    console.log('login failed: wrong password');
    return false;
  }
  console.log('login failed: user not found');
  return false;
};
