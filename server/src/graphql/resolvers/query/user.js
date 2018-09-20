export default async (_, args, context) => context.data.user.getById(args.id);
