import getByCode from './getByCode';
import getAll from './getAll';
import update from './update';
import create from './create';
import del from './del';

const TABLE_NAME = 'countries';

export default ({ db }) => ({
  getByCode: getByCode({ db, tableName: TABLE_NAME }),
  getAll: getAll({ db, tableName: TABLE_NAME }),
  update: update({ db, tableName: TABLE_NAME }),
  create: create({ db, tableName: TABLE_NAME }),
  del: del({ db, tableName: TABLE_NAME }),
});
