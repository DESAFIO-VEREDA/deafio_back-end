const Joi = require('joi');

module.exports = Joi.object({
  name: Joi.string().required(),
  ra: Joi.string().email().required(),
  evaluationName: Joi.string().min(6).required(),
  roleId: Joi.number()
});