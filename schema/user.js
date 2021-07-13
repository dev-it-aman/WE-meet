const mongoose = require("mongoose");

const user = mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

module.exports = new mongoose.model("user", user);
