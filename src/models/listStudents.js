const { QueryTypes } = require('@sequelize/core');
const connection = require('./connection');

const listStudents = async () => {
    try {
        const students = await connection.query('SELECT * from studentBase', {
            type: QueryTypes.SELECT
        })
        return students
    } catch (error){
        return error;
    }
}

module.exports = listStudents