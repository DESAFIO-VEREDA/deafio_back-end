const { createProof } = require ('../../models');

const update = async ({ ra, name, grade, year, evaluationName, discipline, grade2 }) => {
    try {
        await createProof({ ra, name, grade, year, evaluationName, discipline, grade2 })
    } catch (error) {
        return error;
    }
}

module.exports = update;