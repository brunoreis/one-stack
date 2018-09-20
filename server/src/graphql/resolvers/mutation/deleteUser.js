import User from '../../../data/user';

export default async (_, args) => User.delete(args.id);
