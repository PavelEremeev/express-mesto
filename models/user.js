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
    validate: {
      validator(v) {
        // eslint-disable-next-line no-useless-escape
        return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(v);
      },
      message: 'Введите url',
    },
  }
})

module.exports = model('user', userSchema)