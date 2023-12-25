const { google } = require('googleapis');
const fs = require('fs');
const { Readable } = require('stream');

const authenticateGoogle = () => {
  const auth = new google.auth.GoogleAuth({
    keyFile: `${__dirname}/svc-key.json`,
    scopes: 'https://www.googleapis.com/auth/drive',
  });
  return auth;
};

const uploadToGoogleDrive = async (file, auth) => {
  const fileMetadata = {
    name: file.originalname,
    parents: ['1-gETyQ6esrWy5MCw8QwYbPbtsXF4gkrw'],
  };
  const media = {
    mimeType: file.mimetype,
    body: bufferToStream(file.buffer),
  };
  const driveService = google.drive({ version: 'v3', auth });
  const response = await driveService.files.create({
    requestBody: fileMetadata,
    media: media,
    fields: 'id',
  });
  return response;
};

const deleteFile = (filePath) => {
  fs.unlink(filePath, () => {
    return true;
  });
};

const bufferToStream = (buffer) => {
  const stream = new Readable();
  stream.push(buffer);
  stream.push(null);

  return stream;
}

module.exports = { uploadToGoogleDrive, authenticateGoogle, deleteFile };
