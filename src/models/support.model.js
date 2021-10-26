const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const supportSchema = mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    is_answered: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
supportSchema.plugin(toJSON);

/**
 * @typedef Support
 */
const Support = mongoose.model('Support', supportSchema);

module.exports = Support;
