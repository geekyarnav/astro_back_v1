const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const videosLinkSchema = mongoose.Schema(
  {
    link: {
      type: String,
      required: true,
    },
    showOnTop: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
videosLinkSchema.plugin(toJSON);

/**
 * @typedef Videos
 */
const Video = mongoose.model('Video', videosLinkSchema);

module.exports = Video;
