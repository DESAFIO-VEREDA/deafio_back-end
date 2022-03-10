const { StatusCodes } = require('http-status-codes');
const { create } = require('../../services/students');

module.exports = async (req, res, next) => {
    try { 
        const { ra, name, grade, year, evaluationName, discipline, grade2 } = req.body


        await create({ ra, name, grade, year, evaluationName, discipline, grade2 });

        return res.status(StatusCodes.CREATED).end();
    } catch (error) {
        next(error)
    }
}