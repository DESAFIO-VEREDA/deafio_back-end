const { QueryTypes } = require('@sequelize/core');
const connection = require('./connection');

const updateProof = async (id, {ra, name, grade, year, evaluationName, discipline, grade2 }) => {
    try {
            await connection.query('UPDATE studentBase set ra = ? name = ?, grade = ?, year = ?, evaluationName = ?, discipline = ?, grade2 = ? WHERE id = ?', {
            replacements: [ra, name, grade, year, evaluationName, discipline, grade2, id],
            raw: true,
            type: QueryTypes.UPDATE
        })
    } catch (error){
        return error;
    }
}

module.exports = updateProof