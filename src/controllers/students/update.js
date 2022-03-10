const { StatusCodes } = require('http-status-codes');
const { update } = require('../../services/students');

module.exports = async (req, res, next) => {
    try { 
        const { id } = req.params;
        const body = { ...req.body }
        Object.keys(body).forEach((key) => {
            req.proof[key] = body[key]
        })


        await update(id, req.proof );

        return res.status(StatusCodes.NO_CONTENT).end();
    } catch (error) {
        next(error)
    }
}