const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { communityService } = require('../services');

const postMessage = catchAsync(async (req, res) => {
  await communityService.postMessage(req.body, req.params.communityName, req.user._id);
  res.status(httpStatus.CREATED).send('success');
});

const getCommunityMessage = catchAsync(async (req, res) => {
  const communityMessage = await communityService.getMessageDetail(req.params.communityName);
  res.send(communityMessage);
});

module.exports = {
  postMessage,
  getCommunityMessage,
};
