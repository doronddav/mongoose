const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");
const { objectId } = require("mongoose");
const owner = new mongoose.Schema({
  ownerFName: {
    type: String,
    required: true,
  },
  OwnerLName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  age: Number,
  vet: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  pets: {
    type: [mongoose.Types.ObjectId],
  },
});

// module.exports = mongoose.model("owner", owner);
exports.owner = owner;
