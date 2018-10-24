const bcrypt = require('bcrypt');

exports.seed = knex => knex('user')
  .del()
  .then(() => knex('user').insert([
    {
      email: 'guido@email',
      password: bcrypt.hashSync('senha', 10),
    },
    {
      email: 'bruno@email',
      password: bcrypt.hashSync('senha', 10),
    },
  ]));
