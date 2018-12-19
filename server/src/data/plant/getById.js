import PlantDB from '../../db/queryBuilders/plant';

export default async id => PlantDB.getById(id);
