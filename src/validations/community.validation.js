const Joi = require('joi');

const postMessage = {
  body: Joi.object().keys({
    message: Joi.string().required(),
  }),
};

module.exports = {
  postMessage,
};
