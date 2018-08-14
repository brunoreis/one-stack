const db = require('..');

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
}

module.exports = User;
