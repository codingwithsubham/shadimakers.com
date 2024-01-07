const express = require('express');
const path = require('path');
const app = express();
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const socket = require('./socket/Socket');
const cors = require('cors');
const http = require('http').Server(app);

app.use(cors());
// Connact Socket
socket.initSocket(http);
// Connect Database
connectDB();
// Init Middleware
app.use(express.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
// Defineing Routes
app.use('/api/v1/auth', require('./route/auth'));
app.use('/api/v1/profile', require('./route/profile'));
app.use('/api/v1/match', require('./route/match'));
app.use('/api/v1/uploads', require('./route/uploads'));
app.use('/api/v1/chat', require('./route/chat'));
// Defining folder static
app.use('/public', express.static(__dirname + '/uploads'));
app.use(express.static('app/build'));
// Routing all requestes to the client build
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'app', 'build', 'index.html'));
});
// Define Port
const PORT = process.env.PORT || 8081;
// Server Start
http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
