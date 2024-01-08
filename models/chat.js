const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
  participants: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "user",
    },
  ],
  profiles: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "profile",
    },
  ],
  unread: {
    type: Number,
  },
  updated_at: {
    type: Date,
    default: Date.now(),
  },
  messages: [
    {
      to: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
      },
      from: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
      },
      created_at: {
        type: Date,
        default: Date.now(),
      },
      text: {
        type: String,
      },
    },
  ],
});

module.exports = Chat = mongoose.model('chat', ChatSchema);
