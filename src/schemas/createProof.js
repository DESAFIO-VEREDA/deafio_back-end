const Joi = require('joi');

module.exports = Joi.object({
    ra: Joi.string().required(),
    name: Joi.string().required(),
    grade: Joi.string().required(),
    year: Joi.string().required(),
    evaluationName: Joi.string().required(),
    discipline: Joi.string().required(),
    grade2: Joi.string().required()
});