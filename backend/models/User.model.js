const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const user = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String
  }
},{
   collection: 'users'
});

module.exports = mongoose.model('User', user);
