const { StatusCodes } = require('http-status-codes');
const { list } = require('../../services/students');

module.exports = async (_req, res, next) => {
    try { 
        const students = await list()

        return res.status(StatusCodes.OK).json(students)
    } catch (error) {
        next(error)
    }
}