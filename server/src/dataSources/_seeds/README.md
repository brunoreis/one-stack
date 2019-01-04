To generate a new seed file run
```
knex seed:make 'table_name'
```
Edit the file generated in '/db/seeds/' with the desired data, and run the seed with
```
knex seed:run
```

run `knex --help` for more information.

Some references:

https://medium.com/@jaeger.rob/seed-knex-postgresql-database-with-json-data-3677c6e7c9bc
https://bamtech.gitbook.io/dev-standards/backend/graphql-js/getting-started-with-apollo-server-dataloader-knex.mo
