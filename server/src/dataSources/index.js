import entityType from './entityType/_index';
import contactType from './contactType/_index';
import linkType from './linkType/_index';
import memberType from './memberType/_index';

export default ({ db }) => () => ({
  entityType: entityType({ db }),
  contactType: contactType({ db }),
  linkType: linkType({ db }),
  memberType: memberType({ db }),
});
