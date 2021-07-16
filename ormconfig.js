module.exports = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "docker",
  database: "postgres",
  entities: ["src/app/database/entities/*.ts"],
  synchronize: false,
  migrationsTableName: "migrations",
  migrations: ["src/app/database/migrations/*.ts"],
  subscribers: ["src/app/subscriber/*.ts"],
  cli: {
    migrationsDir: "src/app/database/migrations",
  },
};
