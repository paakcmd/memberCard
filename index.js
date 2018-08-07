const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./routes/authRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const merchantRoutes = require('./routes/merchantRoutes');


require('./models/Users');
require('./models/Merchants');
require('./models/Transactions');
require('./services/passport');


mongoose.connect(keys.mongoURI);


const app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
transactionRoutes(app, mongoose, io);
merchantRoutes(app, mongoose);

io.on('connection', function(socket){});


const PORT = process.env.PORT || 5000;
http.listen(PORT);
