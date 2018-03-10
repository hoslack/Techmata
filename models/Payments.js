const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const PaymentSchema = Schema({
  username: String,
  email: String,
  transaction_code: String,
  amount: String,
  phone_number: String,
  time_stamp: { type: Date, default: Date.now },
  payment_description: String,
});

module.exports = model('payment', PaymentSchema);
