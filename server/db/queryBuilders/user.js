const db = require('../db.js');

class User {
  static async getById(id) {
    return db
      .first()
      .table('user')
      .where('id', id);
  }

  static async getByIds(ids) {
    return db
      .select()
      .table('user')
      .whereIn('id', ids);
  }

  static async getAll() {
    return db
      .select()
      .table('user');
  }

  static async create({
    name,
    password,
    email,
  }) {
    console.log(`Add user ${name} with password ${password}`);
    const user = {
      name,
      password,
      email,
    };

    const result = await db('user').insert(user, 'id');
    user.id = result[0];
    return user;
  }

  static async delete({ id }) {
    const result = await db('user')
      .where('id', id)
      .del('id');
    console.log('Deleted user with id ', result[0]);
    return result[0];
  }
}

module.exports = User;
