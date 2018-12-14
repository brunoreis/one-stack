import FormValidator from '../../../../helpers/FormValidator';

export default new FormValidator([
  {
    field: 'name',
    method: 'isEmpty',
    validWhen: false,
    message: 'Nome é obrigatório.',
  },
  {
    field: 'email',
    method: 'isEmpty',
    validWhen: false,
    message: 'Email é obrigatório.',
  },
  {
    field: 'email',
    method: 'isEmail',
    validWhen: true,
    message: 'Email inválido.',
  },
  {
    field: 'password',
    method: 'isEmpty',
    validWhen: false,
    message: 'Senha é obrigatória.',
  },
]);
