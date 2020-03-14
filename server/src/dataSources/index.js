import entityType from './entityType/_index';
import contactType from './contactType/_index';

export default ({ db }) => () => ({
  entityType: entityType({ db }),
  contactType: contactType({ db }),
});
