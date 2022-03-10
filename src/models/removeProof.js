const { QueryTypes } = require('@sequelize/core');
const connection = require('./connection');

const removeStudent = async (id) => {
    try {
        await connection.query('DELETE from studentBase WHERE id = ?', {
            raw: true,
            replacements: [id],
            type: QueryTypes.DELETE
        })
    } catch (error){
        return error;
    }
}

module.exports = removeStudent