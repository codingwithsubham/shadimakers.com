const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'user',
    require: true,
  },
  isOnline: {
    type: Boolean,
  },
  profData: {
    type: Object,
    require: true
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
