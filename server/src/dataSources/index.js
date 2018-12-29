import plant from './plant';

export default ({ db }) => () => ({
  plant: plant({ db }),
});
