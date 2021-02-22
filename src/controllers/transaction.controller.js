const Transactions = require('../models/transactions');

exports.get = async (req, res) => {
  const { id } = req.params;
  let response;
  try {
    response = await Transactions.get(id);
  } catch (error) {
    console.log(error)
  }
  if (response.rows.length === 0) {
    response='<h1>ID no valid<h1>'
  }
  res.send(response.rows)
}