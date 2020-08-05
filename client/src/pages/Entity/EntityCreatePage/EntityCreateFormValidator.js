import FormValidator from '../../../helpers/FormValidator';

export default new FormValidator([
  {
    field: 'name',
    method: 'isEmpty',
    validWhen: false,
    message: 'Digite um nome.',
  },
]);
