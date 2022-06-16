const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");

const pet = new mongoose.Schema({
  petName: {
    type: String,
    required: true,
  },
  FavoritFoot: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 1,
    max: 99,
  },
  owners: String,
});

// module.exports = mongoose.model("pet", pet);
exports.pet = pet;
