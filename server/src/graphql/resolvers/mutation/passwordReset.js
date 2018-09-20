export default async (_,
  args,
  context,
) => context.data.user.passwordReset(args.token, args.password);
