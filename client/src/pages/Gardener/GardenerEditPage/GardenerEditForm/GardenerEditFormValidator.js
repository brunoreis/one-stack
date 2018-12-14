import FormValidator from '../../../../helpers/FormValidator';

export default new FormValidator([
  {
    field: 'name',
    method: 'isEmpty',
    validWhen: false,
    message: 'Nome é obrigatório.',
  },
]);
