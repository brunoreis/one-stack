import getById from './getById';
import getAll from './getAll';
import update from './update';
import create from './create';
import del from './del';

const TABLE_NAME = 'entities';

export default ({ db }) => ({
  getById: getById({ db, tableName: TABLE_NAME }),
  getAll: getAll({ db, tableName: TABLE_NAME }),
  update: update({ db, tableName: TABLE_NAME }),
  create: create({ db, tableName: TABLE_NAME }),
  del: del({ db, tableName: TABLE_NAME }),
});
