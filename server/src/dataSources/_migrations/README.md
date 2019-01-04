To generate a new migration run
```
knex migrate:make 'migration_name'
```
then complete the file generated in '/db/migrations/' with the desired alterations.

To run all new migrations, use
```
knex migrate:latest
```

run `knex --help` for more command and detailed information.

Some references:

https://medium.com/@jaeger.rob/seed-knex-postgresql-database-with-json-data-3677c6e7c9bc
https://bamtech.gitbook.io/dev-standards/backend/graphql-js/getting-started-with-apollo-server-dataloader-knex.mo
