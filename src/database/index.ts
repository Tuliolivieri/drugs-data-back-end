require('dotenv/config');

import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWD,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
});

connection.connect((err) => {console.log(err)});

export { connection };
