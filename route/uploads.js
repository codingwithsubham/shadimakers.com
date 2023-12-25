const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { uploads } = require('../middleware/fileUpload');
const { authenticateGoogle, uploadToGoogleDrive, deleteFile } = require('../gapiUpload/Gapi');

router.post('/photos', auth, uploads.single('myFile'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }
    const auth = authenticateGoogle();
    const response = await uploadToGoogleDrive(req.file, auth);
    //deleteFile(req.file.path);
    return res.json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
