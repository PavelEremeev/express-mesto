const { Schema, model } = require('mongoose');
// const validator = require('../utils/validator')

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 30
  },
  about: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 30
  },

  avatar: {
    type: String,
    required: true,
    // validate: {
    //   validator
    // }
  }
})

module.exports = model('user', userSchema)