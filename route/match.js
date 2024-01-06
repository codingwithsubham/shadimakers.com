const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Profile = require('../models/profile');

router.post('/add', auth, async (req, res) => {
  const { id } = req.body;
  try {
    await Profile.findOneAndUpdate(
      { user: id },
      {
        $push: { 'profData.matchRequests': req.user._id },
      }
    );
    await Profile.findOneAndUpdate(
      { user: req.user._id },
      {
        $push: { 'profData.matchRequested': id },
      }
    );
    return res.json({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/approve', auth, async (req, res) => {
  const { id } = req.body;
  try {
    //updating match list
    await Profile.findOneAndUpdate(
      { user: id },
      {
        $push: { 'profData.matches': req.user._id },
        $pull: { 'profData.matchRequested': req.user._id },
      }
    );
    await Profile.findOneAndUpdate(
      { user: req.user._id },
      {
        $push: { 'profData.matches': id },
        $pull: { 'profData.matchRequests': id },
      }
    );

    return res.json({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
