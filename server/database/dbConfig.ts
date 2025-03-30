import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT as string),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

client.connect()
  .then(() => {
    console.log(`Connected to the database ${client.database} running on port: ${client.port} handled by the user: ${client.user} with password of ${client.password} hosted on ${client.host}`);
  })
  .catch((err) => {
    console.error('Connection error', err.stack);
  });

export { client };
