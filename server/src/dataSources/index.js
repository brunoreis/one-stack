import entityType from './entityType/_index';

export default ({ db }) => () => ({
  entityType: entityType({ db }),
});
