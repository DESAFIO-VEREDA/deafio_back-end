const Joi = require('joi');

module.exports = Joi.object({
    ra: Joi.string(),
    name: Joi.string(),
    grade: Joi.string(),
    year: Joi.string(),
    evaluationName: Joi.string(),
    discipline: Joi.string(),
    grade2: Joi.string()
});