const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  password: {
    type: String,
    require: true,
  },
  userid: {
    type: String,
    require: true,
  },
});

module.exports = User = mongoose.model('user', UserSchema);
