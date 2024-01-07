const Profile = require('../models/profile');
const Chat = require('../models/chat');

const initSocket = (http) => {
  const socketIO = require('socket.io')(http, {
    cors: {
      origin: ['http://localhost:3000', 'https://shadimakers.com/'],
    },
  });

  socketIO.on('connection', async (socket) => {
    const user_id = socket.handshake.query['user_id'];
    //making online
    if (user_id) {
      await Profile.findOneAndUpdate(
        { user: user_id },
        {
          $set: { isOnline: true },
        }
      );
    }

    socket.on('send_message', async (data) => {
      const new_message = {
        to: data.to,
        from: data.from,
        text: data.message,
      };

      const res = await Chat.findOneAndUpdate(
        { _id: data?.conversation_id },
        {
          $push: { messages: new_message },
          $inc: { unread: 1 },
        },
        {new: true}
      ).populate('profiles');

      socketIO.emit('receive_message', res);
    });

    socket.on('disconnect', async () => {
      //making offline
      await Profile.findOneAndUpdate(
        { user: user_id },
        {
          $set: { isOnline: false },
        }
      );
    });
  });
};

module.exports = { initSocket };
