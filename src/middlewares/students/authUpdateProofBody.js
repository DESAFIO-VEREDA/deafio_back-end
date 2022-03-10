const { StatusCodes } = require('http-status-codes');
const proofSchema = require('../../schemas/updateProof');

module.exports = async (req,res,next) => {
    try {
      const { ra, name, grade, year, evaluationName, discipline, grade2 } = req.body
      const { error } = proofSchema.validate({ ra, name, grade, year, evaluationName, discipline, grade2});
      if (error) return res.status(StatusCodes.BAD_REQUEST).json({ message: error.message })
      next()
    } catch (err) {
        next(err)
    }
}