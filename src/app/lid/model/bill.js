const mongoose = require('mongoose');


const billsModel = new mongoose.Schema({
  Invoice: String,
  Date: String,
  Name: String,
  CardNumber: String,
  Khundi: String,
  Area: String,
});
export const bills = mongoose.model.bills || mongoose.model("bills",billsModel);
