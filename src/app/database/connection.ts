import { createConnection } from 'typeorm';

createConnection()
  .then(() => console.log('Database Connected'))
  .catch((err) => console.log(err));
