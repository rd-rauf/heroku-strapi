module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "ec2-54-90-13-87.compute-1.amazonaws.com"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "d667cc1cir07dh"),
        username: env("DATABASE_USERNAME", "ovgrxcwmezmkhe"),
        password: env("DATABASE_PASSWORD", "c6c96d983527c56700a8c66de56ca35d3bcc4ae92cd207c1a17bbbe7a1b36f36"),
        schema: "public",
        ssl: { rejectUnauthorized: false }
      },
      options: {}
    }
  }
});

/* module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "sqlite",
        filename: env("DATABASE_FILENAME", ".tmp/data.db")
      },
      options: {
        useNullAsDefault: true
      }
    }
  }
});
 */