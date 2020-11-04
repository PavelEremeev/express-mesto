const { Schema, model, Mongoose } = require('mongoose');
const validator = require('../utils/validator')

const cardSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 30
  },
  link: {
    type: String,
    required: true,
    // validate: {
    //   validator
    // }
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  likes: {
    type: [{type: Schema.Types.ObjectId, ref: 'user'}],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = model('card', cardSchema)