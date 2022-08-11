import * as Joi from 'joi';

const registerSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': `Please enter your name`,
    'any.required': `Please enter your name`,
  }),
  email: Joi.string().required().messages({
    'string.empty': `Please enter your email`,
    'any.required': `Please enter your email`,
  }),
  mobile: Joi.string().required().messages({
    'string.empty': `Please enter your mobile`,
    'any.required': `Please enter your email`,
  }),
  // city: Joi.string().required().messages({
  //   'string.empty': `Please enter your mobile`,
  //   'any.required': `Please enter your email`,
  // }),
  // gov: Joi.string().required().messages({
  //   'string.empty': `Please enter your mobile`,
  //   'any.required': `Please enter your email`,
  // }),
  password: Joi.string().min(6).required().messages({
    'string.empty': `Please enter your password`,
    'string.min': 'Password must be at least 6 characters',
    'any.required': `Please enter your password`,
  }),
});

export default registerSchema;
