import create from './create';
import update from './update';
import getById from './getById';
import getAll from './getAll';

const TABLE_NAME = 'plant';

export default ({ db }) => ({
  create: create({ db, tableName: TABLE_NAME }),
  update: update({ db, tableName: TABLE_NAME }),
  getById: getById({ db, tableName: TABLE_NAME }),
  getAll: getAll({ db, tableName: TABLE_NAME }),
});
