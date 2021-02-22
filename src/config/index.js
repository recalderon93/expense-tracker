const dotenv = require('dotenv');

dotenv.config();

module.exports={
  db: {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  },
};
