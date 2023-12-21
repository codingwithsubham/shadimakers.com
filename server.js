const express = require('express');
const path = require('path');
const app = express();
const connectDB = require('./config/db');
//const bodyParser = require('body-parser');
//app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
// Connect Database
connectDB();
// Init Middleware
app.use(express.json({ extended: false }));
// Defineing Routes
app.use('/api/v1/auth', require('./route/auth'));
app.use('/api/v1/profile', require('./route/profile'));
app.use('/api/v1/uploads', require('./route/uploads'));
// Defining folder static
app.use("/public", express.static(__dirname + "/uploads"));
app.use(express.static('app/build'));
// Routing all requestes to the client build
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'app', 'build', 'index.html'));
});
// Define Port
const PORT = process.env.PORT || 8081;
// Server Start
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));