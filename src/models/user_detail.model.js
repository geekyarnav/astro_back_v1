const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const userDetailSchema = mongoose.Schema(
  {
    full_name: {
      type: String,
      required: true,
      trim: true,
    },
    height: {
      type: String,
      required: true,
      trim: true,
    },
    mother_tongue: {
      type: String,
      required: true,
      trim: true,
    },
    caste: {
      type: String,
      required: true,
      trim: true,
    },
    religion: {
      type: String,
      required: true,
      trim: true,
    },
    annual_income: {
      type: Number,
      required: true,
      trim: true,
    },
    summary: {
      type: String,
      trim: true,
    },
    family: {
      type: String,
      required: true,
      trim: true,
    },
    education: {
      type: String,
      required: true,
      trim: true,
    },
    occupation: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    highest_education: {
      type: String,
      required: true,
      trim: true,
    },
    under_graduate_degree: {
      type: String,
      trim: true,
    },
    under_graduate_college: {
      type: String,
      trim: true,
    },
    post_graduate_degree: {
      type: String,
      trim: true,
    },
    post_graduate_college: {
      type: String,
      trim: true,
    },
    organization_name: {
      type: String,
      trim: true,
    },
    mother_occupation: {
      type: String,
      required: true,
      trim: true,
    },
    father_occupation: {
      type: String,
      required: true,
      trim: true,
    },
    sister: {
      type: String,
      trim: true,
    },
    brother: {
      type: String,
      trim: true,
    },
    gothra: {
      type: String,
      trim: true,
      required: true,
    },
    maternal_gothra: {
      type: String,
      trim: true,
      required: true,
    },
    family_type: {
      type: String,
      trim: true,
      required: true,
    },
    family_income: {
      type: Number,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    alternate_email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    mobile: {
      type: Number,
      trim: true,
      required: true,
      unique: true,
    },
    alternate_mobile: {
      type: Number,
      trim: true,
    },
    landline: {
      type: Number,
      trim: true,
    },
    suitable_start_time: {
      type: Date,
      required: true,
    },
    suitable_end_time: {
      type: Date,
      required: true,
    },
    contact_adress: {
      type: String,
      trim: true,
    },
    parent_adress: {
      type: String,
      trim: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
userDetailSchema.plugin(toJSON);
userDetailSchema.plugin(paginate);

/**
 * @typedef User
 */
const UserDetail = mongoose.model('UserDetail', userDetailSchema);

module.exports = UserDetail;
