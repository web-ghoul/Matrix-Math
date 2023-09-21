const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resetaccountsSchema = new Schema({
  userId: String,
  uniqueString: String,
  createdAt: Date,
  expireAt: Date,
});

const resetaccounts = mongoose.model("resetaccounts", resetaccountsSchema);

module.exports = resetaccounts;