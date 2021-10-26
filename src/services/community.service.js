const { Community, Message } = require('../models');

const postMessage = async (message, name, user) => {
  message.user = user;
  const messageData = await Message.create(message);
  const communityObject = { name, $push: { message_list: messageData._id }, $addToSet: { user_list: user } };
  await Community.findOneAndUpdate({ name }, communityObject, { upsert: true, new: true, setDefaultsOnInsert: true });
};

const getMessageDetail = async (name) => {
  return Community.findOne({ name })
    .populate({ path: 'message_list', populate: { path: 'user', model: 'User' } })
    .exec();
};

module.exports = {
  postMessage,
  getMessageDetail,
};
