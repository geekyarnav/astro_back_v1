const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createUser = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
    role: Joi.string().required().valid('user', 'admin'),
  }),
};

const getUsers = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const updateUser = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email(),
      password: Joi.string().custom(password),
      name: Joi.string(),
    })
    .min(1),
};

const addUserInformation = {
  body: Joi.object().keys({
    full_name: Joi.string().required(),
    height: Joi.string().required(),
    mother_tongue: Joi.string().required(),
    caste: Joi.string().required(),
    religion: Joi.string().required(),
    annual_income: Joi.number().integer().required(),
    summary: Joi.string().allow('').allow(null),
    family: Joi.string().required(),
    education: Joi.string().required(),
    occupation: Joi.string().required(),
    location: Joi.string().required(),
    highest_education: Joi.string().required(),
    under_graduate_degree: Joi.string().allow('').allow(null),
    under_graduate_college: Joi.string().allow('').allow(null),
    post_graduate_degree: Joi.string().allow('').allow(null),
    post_graduate_college: Joi.string().allow('').allow(null),
    organization_name: Joi.string().allow('').allow(null),
    mother_occupation: Joi.string().required(),
    father_occupation: Joi.string().required(),
    sister: Joi.string().allow('').allow(null),
    brother: Joi.string().allow('').allow(null),
    gothra: Joi.string().required(),
    maternal_gothra: Joi.string().required(),
    family_type: Joi.string().required(),
    family_income: Joi.number().integer().required(),
    alternate_email: Joi.string().allow('').allow(null),
    mobile: Joi.number().integer().required(),
    alternate_mobile: Joi.number().integer().allow(null),
    landline: Joi.number().integer().allow(null),
    suitable_start_time: Joi.date().required(),
    suitable_end_time: Joi.date().required(),
    contact_adress: Joi.string().allow('').allow(null),
    parent_adress: Joi.string().allow('').allow(null),
  }),
};

const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  addUserInformation,
};
