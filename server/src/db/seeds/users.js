const bcrypt = require('bcrypt');

exports.seed = knex => knex('user')
  .del()
  .then(() => knex('user').insert([
    {
      name: 'guido',
      email: 'guido@email',
      password: bcrypt.hashSync('senha', 10),
    },
    {
      name: 'bruno',
      email: 'bruno@email',
      password: bcrypt.hashSync('senha', 10),
    },
  ]));
