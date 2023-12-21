const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Profile = require('../models/profile');

router.post('/', auth, async (req, res) => {
  try {
    let profile = new Profile({
      user: req.user._id,
      profData: req.body,
    });
    await profile.save();
    return res.json(profile);
  } catch (error) {
    //console.log(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.get('/find', auth, async (req, res) => {
  try {
    let profiles = await Profile.find({}).skip(req.query?.page * req.query?.limit).limit(req.query?.limit);
    return res.json(profiles);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;