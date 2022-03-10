const { StatusCodes } = require('http-status-codes');
const { getByRA } = require('../../services/students');

module.exports = async (req, res, next) => {
    try {
        const { ra } = req.params;
        const proofs = await getByRA(ra);
        if (!proofs || proofs.length === 0) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: 'Student not found' });
        } 
        req.proofs = proofs;
 
        next();
    } catch (error) {
        next(error)
    }
}