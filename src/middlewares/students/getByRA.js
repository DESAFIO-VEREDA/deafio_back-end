const { StatusCodes } = require('http-status-codes');
const { getByRA } = require('../../services/students');

module.exports = async (req, res, next) => {
    try {
        const { ra } = req.params;
        const student = await getByRA(ra);
        if (!student) return res.status(StatusCodes.NOT_FOUND).json({ message: 'Student not found' });
        req.student = student;
        
        next();
    } catch (error) {
        next(error)
    }
}