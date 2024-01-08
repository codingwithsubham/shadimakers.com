const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Chat = require('../models/chat');
const Profile = require('../models/profile');

router.post('/get-conversation', auth, async (req, res) => {
  const { from, to } = req.body;

  try {
    const ex_chat = await Chat.findOne({
      participants: { $all: [to, from] },
    }).populate('profiles');

    if (ex_chat) {
      return res.json(ex_chat);
    }

    const fromProfile = await Profile.findOne({ user: from });
    const toProfile = await Profile.findOne({ user: to });

    let new_chat = await Chat.create({
      participants: [to, from],
      profiles: [fromProfile._id, toProfile?._id]
    });

    new_chat = await Chat.findById(new_chat).populate('profiles');

    return res.json(new_chat);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: 'Server Error' });
  }
});

router.get('/:id', auth, async (req, res) => {
    try {
      const chats = await Chat.find({
        participants: { $all: [req.params.id] },
      }).sort({ updated_at: -1 }).populate('profiles');
  
      return res.json(chats);
    } catch (error) {
      return res.status(500).send({ error: 'Server Error' });
    }
  });

module.exports = router;
