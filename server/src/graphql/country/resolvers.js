import createCountry from './mutations/createCountry';
import updateCountry from './mutations/updateCountry';
import deleteCountry from './mutations/deleteCountry';

import country from './queries/country';
import countries from './queries/countries';

export default {
  Mutation: {
    createCountry,
    updateCountry,
    deleteCountry,
  },
  Query: {
    country,
    countries,
  },
};
