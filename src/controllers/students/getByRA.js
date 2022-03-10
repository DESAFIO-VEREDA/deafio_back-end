const { StatusCodes } = require('http-status-codes');

module.exports = async (req, res, next) => {
    try { 
        const proofs = req.proofs

        return res.status(StatusCodes.OK).json(proofs)
    } catch (error) {
        next(error)
    }
}