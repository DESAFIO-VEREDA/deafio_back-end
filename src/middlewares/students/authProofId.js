const { StatusCodes } = require('http-status-codes');
const { getById } = require('../../services/students');

module.exports = async (req, res, next) => {
    try {
        const { id } = req.params;
        const proof = await getById(id);
        if (!proof) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: 'Proof not found' });
        } 
        req.proof = proof;
 
        next();
    } catch (error) {
        next(error)
    }
}