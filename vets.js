const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");

const vet = new mongoose.Schema({
  vetFName: {
    type: String,
    required: true,
  },
  vetLName: {
    type: String,
  },
  phonenum: {
    type: Number,
  },
  phoneNum: {
    type: String,
    min: 10,
    max: 10,
    required: true,
  },
});

// module.exports = mongoose.model("vet", vet);
exports.vet = vet;
