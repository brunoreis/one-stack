import GardenerDB from '../../db/queryBuilders/gardener';

export default async id => GardenerDB.getById(id);
