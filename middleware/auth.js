const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../config/constant');
const config = require('config');
const jwtKey = config.get(JWT_KEY);

module.exports = async function (req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }
  try {
    jwt.verify(token, jwtKey, (error, decoded) => {
      if (error) {
        res.status(401).json({ msg: 'Token is not valid' });
      } else {
        req.token = token;
        req.user = decoded;
        next();
      }
    });
  } catch (err) {
    console.error('something wrong with auth middleware');
    res.status(500).json({ msg: 'Server Error' });
  }
};
