
exports.seed = knex => knex('user')
  .del()
  .then(() => knex('user').insert([
    {
      id: 1, name: 'guido', email: 'guido@email', password: 'senha',
    },
    {
      id: 2, name: 'bruno', email: 'bruno@email', password: 'senha',
    },
  ]));
