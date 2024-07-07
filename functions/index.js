const functions = require('firebase-functions');
const admin = require('firebase-admin');
const mongoose = require('mongoose');

admin.initializeApp();

const { MONGO_URI } = functions.config().mongodb; // Ensure you set this in your Firebase environment config

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
  uid: String,
  email: String,
  displayName: String,
  // Add more fields as per your user data structure
});

const User = mongoose.model('User', userSchema);

exports.onUserSignUp = functions.firestore.document('users/{userId}')
  .onCreate((snap, context) => {
    const userData = snap.data();
    const newUser = new User({
      uid: context.params.userId,
      email: userData.email,
      displayName: userData.displayName,
      // Map other fields as needed
    });

    return newUser.save().then(() => {
      console.log('User saved to MongoDB:', userData);
    }).catch((error) => {
      console.error('Error saving user to MongoDB:', error);
    });
  });
