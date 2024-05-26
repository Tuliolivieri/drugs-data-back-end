require('dotenv/config');

import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWD,
  port: Number(process.env.DB_PORT),
});

connection.connect((err) => {console.log(err)});

connection.query('')


// require('dotenv/config');
// const Sequelize = require("sequelize");

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWD,
//   {
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     dialect: 'mysql',
//   },
// ); 

// sequelize.authenticate().then(() => {
//   console.log('Connection has been established successfully.');
// }).catch((error: Error) => {
//   console.error('Unable to connect to the database: ', error);
// });

// export default sequelize;