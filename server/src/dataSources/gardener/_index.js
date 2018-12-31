import getById from './getById';
import getAll from './getAll';

const TABLE_NAME = 'gardener';

export default ({ db }) => ({
  getById: getById({ db, tableName: TABLE_NAME }),
  getAll: getAll({ db, tableName: TABLE_NAME }),
});
