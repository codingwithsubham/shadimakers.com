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
    let profiles = await Profile.aggregate([
      { $match: { user: { $not: { $eq: req.user._id}} } },
      { $sample: { size: 20 } },
    ]);
    return res.json(profiles);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/find/:id', auth, async (req, res) => {
  try {
    let profile = await Profile.findOne({ user: req.params.id });
    return res.json(profile);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

//update
router.post('/update', auth, async (req, res) => {
  try {
    let profile = await Profile.findOne({ user: req.user._id });
    profile.profData = {
      ...profile.profData,
      info: req.body,
    };
    await profile.save();
    return res.json(profile);
  } catch (error) {
    //console.log(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

//photos
router.post('/photos', auth, async (req, res) => {
  try {
    let profile = await Profile.findOne({ user: req.user._id });
    profile.profData = {
      ...profile.profData,
      imgs: [...profile.profData.imgs, ...req.body],
    };
    await profile.save();
    return res.json(profile);
  } catch (error) {
    //console.log(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
