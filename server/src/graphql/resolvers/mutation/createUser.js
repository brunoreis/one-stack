import User from '../../../data/user';

export default async (_, args) => User.create(args.username, args.password);
