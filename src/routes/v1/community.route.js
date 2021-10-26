const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const communityValidator = require('../../validations/community.validation');
const communityController = require('../../controllers/community.controller');

const router = express.Router();

router
  .route('/:communityName/message')
  .post(auth('postMessage'), validate(communityValidator.postMessage), communityController.postMessage)
  .get(auth('getMessage'), communityController.getCommunityMessage);

module.exports = router;
