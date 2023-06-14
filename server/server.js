const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./models/user'); // Path to your User model
const { OAuth2Client } = require('google-auth-library');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'})); // Replace with your Angular app's domain

app.use(session({ secret: 'some_secret', resave: true, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    console.log("Successfully connected to MongoDB!");
});

app.post('/auth/google', async (req, res) => {
  const { token }  = req.body;
  const ticket = await client.verifyIdToken({
      idToken: token,
      requiredAudience: process.env.GOOGLE_CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
  });
  const payload = ticket.getPayload();
  const userid = payload['sub'];
  
  User.findOne({ googleId: userid }).then((currentUser) => {
    if(currentUser){
      // already have the user
      res.json(currentUser);
    } else {
      // if not, create user in our db
      new User({
        googleId: userid,
        username: payload.name,
        // add other attributes you want to save
      }).save().then((newUser) => {
        res.json(newUser);
      });
    }
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
