import entityType from './entityType/_index';
import contactType from './contactType/_index';
import linkType from './linkType/_index';
import memberType from './memberType/_index';
import country from './country/_index';
import entity from './entity/_index';
import contact from './contact/_index';
import contactItem from './contactItem/_index';

export default ({ db }) => () => ({
  entityType: entityType({ db }),
  contactType: contactType({ db }),
  linkType: linkType({ db }),
  memberType: memberType({ db }),
  country: country({ db }),
  entity: entity({ db }),
  contact: contact({ db }),
  contactItem: contactItem({ db }),
});
