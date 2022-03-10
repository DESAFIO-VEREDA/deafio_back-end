const { listStudents } = require ('../../models');

const list = async () => {
    try {
        const students = listStudents()
        return students;
    } catch (error) {
        return error;
    }
}

module.exports = list;