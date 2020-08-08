import FormValidator from '../../../helpers/FormValidator';

export default new FormValidator([
  {
    field: 'name',
    method: 'isEmpty',
    validWhen: false,
    message: 'Digite um nome.',
  },
  {
    field: 'latitude',
    method: 'isEmpty',
    validWhen: false,
    message: 'Clique no mapa para selecionar as coordenadas',
  },
  {
    field: 'longitude',
    method: 'isEmpty',
    validWhen: false,
    message: 'Clique no mapa para selecionar as coordenadas',
  },
]);
