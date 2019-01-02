import getById from './getById';
import getAll from './getAll';
import update from './update';

const TABLE_NAME = 'gardener';

export default ({ db }) => ({
  getById: getById({ db, tableName: TABLE_NAME }),
  getAll: getAll({ db, tableName: TABLE_NAME }),
  update: update({ db, tableName: TABLE_NAME }),
});
