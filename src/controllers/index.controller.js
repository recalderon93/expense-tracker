const Transactions = require('../models/transactions');

exports.get = async (req, res) => {
  res.send(await Transactions.all());
};