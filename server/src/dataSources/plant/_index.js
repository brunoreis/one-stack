import create from './create';
import update from './update';

const TABLE_NAME = 'plant';

export default ({ db }) => ({
  create: create({ db, tableName: TABLE_NAME }),
  update: update({ db, tableName: TABLE_NAME }),
});
