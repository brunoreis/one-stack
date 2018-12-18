import PlantDB from '../../db/queryBuilders/plant';

export default async id => PlantDB.del(id);
