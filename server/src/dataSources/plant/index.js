import create from './create';
import load from './load';

export default ({ db }) => ({
  create: create({ db }),
  load: load({ db }),
});
