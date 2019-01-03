import plant from './plant/_index';
import user from './user/_index';
import gardener from './gardener/_index';

export default ({ db }) => () => ({
  plant: plant({ db }),
  gardener: gardener({ db }),
  user: user({ db }),
});
