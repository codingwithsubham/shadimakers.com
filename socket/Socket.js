const User = require('../models/user');


const initSocket = (http) => {
  const socketIO = require('socket.io')(http, {
    cors: {
      origin: ['http://localhost:3000', 'https://shadimakers.com/'],
    },
  });

  socketIO.on('connection', async (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);
    const user_id = socket.handshake.query["user_id"];

    if(user_id){
      await User.findOneAndUpdate({ _id: user_id }, {
        $set : { isOnline: true }
      });
    }

    socket.on('send_message', (data) => {
      console.log(data);
      socketIO.emit('receive_message', data);
    });

    socket.on('disconnect', async () => {
      console.log('🔥: A user disconnected');
      await User.findOneAndUpdate({ _id: user_id }, {
        $set : { isOnline: false }
      });
    });
  });
};

module.exports = { initSocket };
