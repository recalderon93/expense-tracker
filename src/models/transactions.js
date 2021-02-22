const db = require('../db');

exports.create = async (amount, typeOf, wallet, about) => {
  const T = {
    amount,
    typeOf,
    wallet,
    about,
  };

  await db.pool.query(
    `INSERT INTO transactions (amount, type_of, wallet, about) VALUES(${amount}, ${typeOf}, ${wallet}, ${about});`,
  );
  return T;
};

exports.get = async (id) => {
  const res = await db.pool.query(`SELECT * FROM transactions WHERE id=${id};`);
  return res;
};

exports.all = async () => {
  let response;
  try {
    response = await db.pool.query('SELECT * FROM transactions;');
  } catch (error) {
    console.log(error);
  }

  return response.rows;
};
