const { QueryTypes } = require('@sequelize/core');
const connection = require('./connection');

const getProofByid = async (id) => {
    try {
        const proof = await connection.query('SELECT * from studentBase WHERE id = ?', {
            raw: true,
            replacements: [ra],
            type: QueryTypes.SELECT
        })
        return proof
    } catch (error){
        return error;
    }
}

module.exports = getProofByid