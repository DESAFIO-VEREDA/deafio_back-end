const { QueryTypes } = require('@sequelize/core');
const connection = require('./connection');

const getProofsByRA = async (ra) => {
    try {
        const proofs = await connection.query('SELECT * from studentBase WHERE ra = ?', {
            raw: true,
            replacements: [ra],
            type: QueryTypes.SELECT
        })
        return proofs
    } catch (error){
        return error;
    }
}

module.exports = getProofsByRA