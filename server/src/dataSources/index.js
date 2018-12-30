import plant from './plant/_index';

export default ({ db }) => () => ({
  plant: plant({ db }),
});
