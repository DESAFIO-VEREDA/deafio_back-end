const { QueryTypes } = require('@sequelize/core');
const connection = require('./connection');

const listProofs = async () => {
    try {
        const proofs = await connection.query('SELECT * from studentBase', {
            raw: true,
            type: QueryTypes.SELECT
        })
        return proofs
    } catch (error){
        return error;
    }
}

module.exports = listProofs