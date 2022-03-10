const { QueryTypes } = require('@sequelize/core');
const connection = require('./connection');

const createProof = async ({ ra, name, grade, year, evaluationName, discipline, grade2 }) => {
    try {
        await connection.query('INSERT into studentBase values(?,?,?,?,?,?,?)', {
            replacements: [ra, name, grade, year, evaluationName, discipline, grade2],
            raw: true,
            type: QueryTypes.INSERT
        })
    } catch (error){
        return error;
    }
}

module.exports = createProof