const UserDB = require('../db/queryBuilders/user');

class User {
  // id: number;
  // firstName: string;
  // lastName: string;

  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
  }

  static async load(ctx, args) {
    const data = await UserDB.getById(args.id);
    if (!data) return null;

    return new User(data);
  }

  static async loadAll() {
    const data = await UserDB.getAll();

    return data.map(row => new User(row));
  }
}

module.exports = User;
