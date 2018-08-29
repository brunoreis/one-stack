import bcrypt from 'bcrypt';
import getByName from './getByName';

export default async (username, password) => {
  const user = await getByName(null, { username });
  console.log('user: ', user);
  if (bcrypt.compareSync(password, user.password)) {
    console.log('loggin successful');
    return true;
  }
  console.log('loggin failed: wrong password');
  return false;
};
