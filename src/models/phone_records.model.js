const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const phoneSchema = mongoose.Schema(
  {
    astrologer: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    cost: {
      type: Number,
    },
    start_time: {
      type: Date,
      default: Date.now,
    },
    end_time: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
phoneSchema.plugin(toJSON);

/**
 * @typedef phoneRecord
 */
const PhoneRecord = mongoose.model('PhoneRecord', phoneSchema);

module.exports = PhoneRecord;
