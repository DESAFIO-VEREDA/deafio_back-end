const { StatusCodes } = require('http-status-codes');
const { list } = require('../../services/students');

module.exports = async (_req, res, next) => {
    try { 
      const students = await list()
      console.log(students)

      if(students === null) return res.status(StatusCodes.SERVICE_UNAVAILABLE).end()

      return res.status(StatusCodes.OK).json(students)
    } catch (error) {
      next(error)
    }
}