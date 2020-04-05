import getById from './getById';
import getAll from './getAll';
import getByEmail from './getByEmail';
import getByResetToken from './getByResetToken';

import update from './update';
import create from './create';
import del from './del';

import updatePassword from './updatePassword';
import verifyPassword from './verifyPassword';

const TABLE_NAME = 'users';

export default ({ db }) => ({
  getById: getById({ db, tableName: TABLE_NAME }),
  getAll: getAll({ db, tableName: TABLE_NAME }),
  getByEmail: getByEmail({ db, tableName: TABLE_NAME }),
  getByResetToken: getByResetToken({ db, tableName: TABLE_NAME }),

  create: create({ db, tableName: TABLE_NAME }),
  del: del({ db, tableName: TABLE_NAME }),
  update: update({ db, tableName: TABLE_NAME }),

  updatePassword: updatePassword({ db, tableName: TABLE_NAME }),
  verifyPassword: verifyPassword({ db, tableName: TABLE_NAME }),
});
